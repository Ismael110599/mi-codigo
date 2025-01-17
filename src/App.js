import React from 'react';
import { Container, CssBaseline, Typography } from '@mui/material';
import AutoList from './components/AutoList';

const App = () => {
  return (
    <Container>
      <CssBaseline />
      <Typography variant="h3" gutterBottom align="center">Gestión de Autos</Typography>
      <AutoList />
    </Container>
  );
};

export default App;
