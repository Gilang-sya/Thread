/**
 * @TODO: Create Redux store
 */
import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import leaderboardReducer from './leaderboards/reducer';
import threadReducer from './threads/reducer';
import threadDetailReducer from './threadDetail/reducer';
import userReducer from './users/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: userReducer,
    threads: threadReducer,
    threadDetail: threadDetailReducer,
    leaderboards: leaderboardReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
