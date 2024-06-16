import React from 'react';
import { TextField, Paper } from '@mui/material';

const TextArea = ({ text, setText }) => {
  return (
    <Paper style={{ padding: '16px', margin: '16px 0' }}>
      <TextField
        fullWidth
        multiline
        rows={10}
        variant="outlined"
        placeholder="Paste your text here..."
        value={text}
        name='text'
        onChange={(e) => setText(e.target.value)}
      />
    </Paper>
  );
};

export default TextArea;