import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Card } from '@mui/material';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import {
  asyncReceiveThreadDetail,
  asyncDownVoteThreadDetail,
  asyncCreateComment,
  asyncUpVoteThreadDetail,
  asyncNeutralizeVoteThreadDetail,
  asyncDownVoteComment,
  asyncUpVoteComment,
  asyncNeutralizeVoteComment,
} from '../states/threadDetail/action';
import NotFound404Page from './NotFoundPage';
import CommentInput from '../components/CommentInput';
import CommentsList from '../components/CommentsList';
import ThreadDetail from '../components/ThreadDetail';

function DetailPage() {
  const { threadId } = useParams();
  const { threadDetail = null, authUser } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(threadId));
  }, [threadId, dispatch]);

  const onUpVoteThreadDetail = () => {
    dispatch(asyncUpVoteThreadDetail());
  };

  const onDownVoteThreadDetail = () => {
    dispatch(asyncDownVoteThreadDetail());
  };

  const onneutralizeVoteThreadDetail = () => {
    dispatch(asyncNeutralizeVoteThreadDetail());
  };

  const onCommentSubmit = (content) => {
    dispatch(asyncCreateComment({ content }));
  };

  const onUpVoteComment = (id) => {
    dispatch(asyncUpVoteComment(id));
  };

  const onDownVoteComment = (id) => {
    dispatch(asyncDownVoteComment(id));
  };

  const onneutralizeVoteComment = (id) => {
    dispatch(asyncNeutralizeVoteComment(id));
  };

  if (threadDetail === null) {
    return <NotFound404Page />;
  }

  return (
    <Container sx={{ pb: 2 }}>
      <Card>
        <ThreadDetail
          {...threadDetail}
          authUser={authUser.id}
          upVoteThreadDetail={onUpVoteThreadDetail}
          downVoteThreadDetail={onDownVoteThreadDetail}
          neutralizeVoteThreadDetail={onneutralizeVoteThreadDetail}
        />

        <CommentInput addComment={onCommentSubmit} />

        <Typography
          sx={{ fontSize: 17, ml: 2, fontWeight: 'bold' }}
          gutterBottom>
          Komentar({threadDetail.comments.length})
        </Typography>

        <CommentsList
          comments={threadDetail.comments}
          authUser={authUser.id}
          upVoteComment={onUpVoteComment}
          downVoteComment={onDownVoteComment}
          neutralizeVoteComment={onneutralizeVoteComment}
        />
      </Card>
    </Container>
  );
}

export default DetailPage;
