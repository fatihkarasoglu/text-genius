import React from 'react';
import { useTranslation } from 'react-i18next';
import { Paper, TextField } from '@mui/material';
import '../App.css';

const TextArea = ({ text, setText }) => {

  const { t } = useTranslation();

  return (
    <Paper className="text-area">
      <TextField
        fullWidth
        multiline
        rows={10}
        variant="outlined"
        placeholder={t('placeholder')}
        value={text}
        name='text'
        onChange={(e) => setText(e.target.value)}
      />
    </Paper>
  );
};

export default TextArea;