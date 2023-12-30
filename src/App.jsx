import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import { useSelector, useDispatch } from 'react-redux';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import Navigation from './components/Navigation';
import Loading from './components/Loading';
import AddThreadPage from './pages/AddThreadPage';
import LeaderboardsPage from './pages/LeaderboardsPage';
import NotFound404Page from './pages/NotFoundPage';

function App() {
  const { isPreload = false, authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <Routes>
          <Route path="/*" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <Loading />

      <Navigation authUser={authUser} signOut={onSignOut} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<NotFound404Page />} />
        <Route path="/new" element={<AddThreadPage />} />
        <Route path="/leaderboards" element={<LeaderboardsPage />} />
        <Route path="/thread/:threadId" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
