import React, { useEffect, useState } from 'react';
import ThreadsList from '../components/ThreadsList';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Button } from '@mui/material';
import asyncPopulateUsersAndThreads from '../states/shared/action';
import {
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncneutralizeVoteThread,
} from '../states/threads/action';

function HomePage() {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const categories = new Set(threads.map((thread) => thread.category));

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onUpVoteThread = (id) => {
    dispatch(asyncUpVoteThread(id));
  };

  const onDownVoteThread = (id) => {
    dispatch(asyncDownVoteThread(id));
  };

  const onneutralizeVoteThread = (id) => {
    dispatch(asyncneutralizeVoteThread(id));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    threadUser: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <Container>
      {Array.from(categories).map((category) => {
        if (filter === category) {
          return (
            <Button
              key={category}
              variant="outlined"
              onClick={() => setFilter('')}
              sx={{ mr: 2, mb: 2 }}>
              {`#${category}`}
            </Button>
          );
        }
        return (
          <Button
            key={category}
            variant="text"
            onClick={() => setFilter(category)}
            sx={{ mr: 2, mb: 2 }}>
            {`#${category}`}
          </Button>
        );
      })}

      <ThreadsList
        threads={
          filter
            ? threadList.filter((thread) => thread.category === filter)
            : threadList
        }
        upVote={onUpVoteThread}
        downVote={onDownVoteThread}
        neutralizeVote={onneutralizeVoteThread}
      />
    </Container>
  );
}

export default HomePage;
