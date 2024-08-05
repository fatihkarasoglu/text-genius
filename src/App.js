import React, { useState } from 'react';
import { Container, CssBaseline } from '@mui/material';
import Header from './components/Header';
import TextArea from './components/TextArea';
import TextStats from './components/TextStats';
import Footer from './components/Footer';
import '@fontsource/poppins';
import './App.css';

function App() {
  const [text, setText] = useState('');

  return (
    <div id='root'>
      <CssBaseline />
      <Header />
      <Container className="container">
        <TextArea text={text} setText={setText} />
        <TextStats text={text} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
