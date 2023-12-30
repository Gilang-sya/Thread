import React from 'react';
import { Container, CssBaseline, Grid, Box, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/login');
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 9,
          flexDirection: 'column',
          display: 'flex',
          alignItems: 'center',
        }}>
        <Typography component="h1" variant="h5" sx={{ mt: 8 }}>
          Register
        </Typography>
        <RegisterInput register={onRegister} />
        <Grid container justifyContent="flex-end">
          <Grid item>
            Already have an account?
            <Link to="/login" variant="body2">
              Login
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default RegisterPage;
