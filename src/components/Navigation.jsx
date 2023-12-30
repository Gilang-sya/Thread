import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Avatar,
  Button,
  Typography,
  Box,
  Toolbar,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { userShape } from './ThreadItem';

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -37,
  left: 0,
  right: 0,
  margin: '0 auto',
});

function Navigation({ authUser, signOut }) {
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{ top: 'auto', bottom: 0, bgcolor: '#ffffff' }}
    >
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <Avatar
              alt="Avatar Icon"
              src={authUser.avatar}
              sx={{ width: 40, height: 40, mr: 2 }}
            />
          </Link>
        </Typography>

        <Link to="/new" style={{ textDecoration: 'none' }}>
          <StyledFab aria-label="add">
            <AddIcon sx={{ color: 'black' }} />
          </StyledFab>
        </Link>

        <Box sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button sx={{ color: 'black' }}>Threads</Button>
          </Link>

          <Link to="/leaderboards" style={{ textDecoration: 'none' }}>
            <Button sx={{ color: 'black' }}>Leaderboards</Button>
          </Link>
        </Box>

        <Button variant="contained" color="error" onClick={signOut}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

Navigation.propTypes = {
  authUser: PropTypes.shape(userShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
