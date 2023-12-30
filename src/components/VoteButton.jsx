import React from 'react';
import PropTypes from 'prop-types';
import { FaRegThumbsDown } from 'react-icons/fa';
import { FaThumbsDown } from 'react-icons/fa';
import { FaRegThumbsUp } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import Typography from '@mui/material/Typography';

function VoteButton({
  id,
  upVote,
  downVote,
  neutralizeVote,
  upVotesBy,
  downVotesBy,
  authUser,
}) {
  const isUpVoted = upVotesBy.includes(authUser);
  const isDownVoted = downVotesBy.includes(authUser);

  const onUpVoteClick = () => {
    upVote(id);
  };

  const onDownVoteClick = () => {
    downVote(id);
  };

  const onNeutralizeVoteClick = () => {
    neutralizeVote(id);
  };
  return (
    <>
      {isUpVoted ? (
        <FaThumbsUp
          onClick={onNeutralizeVoteClick}
          sx={{ cursor: 'pointer' }}
        />
      ) : (
        <FaRegThumbsUp onClick={onUpVoteClick} sx={{ cursor: 'pointer' }} />
      )}

      <Typography
        variant="body2"
        color="text.primary"
        component="span"
        sx={{ ml: 0.5 }}>
        {upVotesBy.length}
      </Typography>

      {isDownVoted ? (
        <FaThumbsDown
          onClick={onNeutralizeVoteClick}
          sx={{ cursor: 'pointer' }}
        />
      ) : (
        <FaRegThumbsDown onClick={onDownVoteClick} sx={{ cursor: 'pointer' }} />
      )}

      <Typography
        variant="body2"
        color="text.primary"
        component="span"
        sx={{ ml: 0.5, mr: 1 }}>
        {downVotesBy.length}
      </Typography>
    </>
  );
}

VoteButton.propTypes = {
  id: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralizeVote: PropTypes.func.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired,
};

export default VoteButton;
