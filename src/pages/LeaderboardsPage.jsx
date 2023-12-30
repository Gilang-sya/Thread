import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Card, Typography } from '@mui/material';
import { asyncPopulateLeaderboard } from '../states/leaderboards/action';
import LeaderBoardItem from '../components/LeaderboardItem';
import leaderboardReducer from '../states/leaderboards/reducer';

function LeaderboardsPage() {
  const dispatch = useDispatch();
  const { leaderboards = [] } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncPopulateLeaderboard());
  }, [dispatch]);

  return (
    <Container>
      <Card>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          color="text.primary"
          sx={{ fontWeight: 'bold', ml: 2, mt: 2 }}>
          Leaderboards
        </Typography>
        <Grid container spacing={11}>
          <Grid item xs={9}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="text.primary"
              sx={{ fontSize: 21, fontWeight: 'bold ', ml: 2, mt: 2 }}>
              10 Pengguna Teratas
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="text.primary"
              sx={{ fontSize: 21, fontWeight: 'bold ', mt: 2, ml: 4 }}>
              Skor
            </Typography>
          </Grid>
        </Grid>
        {leaderboards.map(({ user, score }) => (
          <LeaderBoardItem key={user.id} user={user} score={score} />
        ))}
      </Card>
    </Container>
  );
}

export default LeaderboardsPage;
