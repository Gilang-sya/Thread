import React from 'react';
import { Container, Typography } from '@mui/material';

function NotFound404Page() {
  return (
    <Container sx={{ pb: 2 }}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        color="text.primary"
        sx={{ fontWeight: 'bold' }}
        align="center">
        404 Not Found
      </Typography>
    </Container>
  );
}

export default NotFound404Page;
