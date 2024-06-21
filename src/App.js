import React, { useState } from 'react';
import { Container, createTheme, CssBaseline } from '@mui/material';
import Header from './components/Header';
import TextArea from './components/TextArea';
import TextStats from './components/TextStats';
import '@fontsource/poppins';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    h1: {
      fontFamily: 'Poppins, Arial, sans-serif',
      fontSize: '2.5rem',
      fontWeight: 'bold',
    },
    body1: {
      fontFamily: 'Poppins, Arial, sans-serif',
      fontSize: '1rem',
    },
  },
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

function App() {

  const [text, setText] = useState('');

  return (
    <div theme={theme}>
    <CssBaseline />
      <Header />
      <Container>
        <TextArea text={text} setText={setText} />
        <TextStats text={text} />
      </Container>
    </div>
  );
}

export default App;