import React, { useState } from 'react';
import { Container } from '@mui/material';
import Header from './components/Header';
import TextArea from './components/TextArea';
import TextStats from './components/TextStats';

function App() {

  const [text, setText] = useState('');

  return (
    <div>
      <Header />
      <Container>
        <TextArea text={text} setText={setText} />
        <TextStats text={text} />
      </Container>
    </div>
  );
}

export default App;