import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import VoteButton from './VoteButton';
import postedAt from '../utils';
import { userShape } from './ThreadItem';

function ThreadDetail({
  id,
  owner,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  upVoteThreadDetail,
  downVoteThreadDetail,
  neutralizeVoteThreadDetail,
  authUser,
}) {
  return (
    <>
      <CardContent sx={{ pb: 0 }}>
        <Typography sx={{ fontSize: 16 }} gutterBottom color="text.secondary">
          {category}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="text.primary"
          sx={{ fontWeight: 'bold' }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.primary" component="span">
          {parse(body)}
        </Typography>
      </CardContent>
      <CardActions sx={{ ml: 1, pb: 4, pt: 2 }}>
        <VoteButton
          id={id}
          authUser={authUser}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
          downVote={downVoteThreadDetail}
          upVote={upVoteThreadDetail}
          neutralizeVote={neutralizeVoteThreadDetail}
        />
        <Typography
          variant="body2"
          color="text.primary"
          component="span"
          sx={{ ml: 0.5 }}
        >
          <Stack direction="row" spacing={3}>
            Dibuat Oleh
            <Avatar
              alt="Avatar Icon"
              src={owner.avatar}
              sx={{ width: 20, height: 20 }}
            />
            {owner.name}
          </Stack>
        </Typography>

        <Typography
          variant="body2"
          color="text.primary"
          component="span"
          sx={{ ml: 0.5 }}
        >
          {postedAt(createdAt)}
        </Typography>
      </CardActions>
    </>
  );
}

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVoteThreadDetail: PropTypes.func.isRequired,
  downVoteThreadDetail: PropTypes.func.isRequired,
  neutralizeVoteThreadDetail: PropTypes.func.isRequired,
};

export default ThreadDetail;
