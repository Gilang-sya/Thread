import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, Typography, Card } from '@mui/material';
import ThreadInput from '../components/ThreadInput';
import { asyncCreateThread } from '../states/threads/action';

function AddThreadPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //@TODO: dispatch disini
  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncCreateThread({ title, body, category }));
    navigate('/');
  };

  return (
    <Container sx={{ mt: 2 }}>
      <Card>
        <Typography
          variant="h5"
          color="text.primary"
          component="div"
          sx={{ fontWeight: 'bold', mt: 2, ml: 2 }}>
          Buat Thread Baru
        </Typography>
        <ThreadInput addThread={onAddThread} />
      </Card>
    </Container>
  );
}

export default AddThreadPage;
