import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_LEADERBOARD: 'RECEIVE_LEADERBOARD',
};

function receiveLeaderboardActiionCrieator(leaderboards) {
  return {
    type: ActionType.RECEIVE_LEADERBOARD,
    payload: {
      leaderboards,
    },
  };
}

function asyncPopulateLeaderboard() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const leaderboards = await api.getLeaderBoards();
      dispatch(receiveLeaderboardActiionCrieator(leaderboards));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveLeaderboardActiionCrieator,
  asyncPopulateLeaderboard,
};
