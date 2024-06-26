import React, { useEffect, useState } from 'react';
import { Paper, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import "./main.css";

const TextStats = ({ text }) => {
  const [stats, setStats] = useState({
    words: 0,
    characters: 0,
    sentences: 0,
    paragraphs: 0,
    pronouns: 0,
    longestWord: '',
  });

  useEffect(() => {

    // I got help with the calculateStats variable calculations.
    const calculateStats = () => {
      const words = text.trim().split(/\s+/).length;
      const characters = text.length;
      const sentences = text.split(/[.!?]/).filter(Boolean).length;
      const paragraphs = text.split(/\n+/).filter(Boolean).length;
      const pronouns = (text.match(/\b(ben|sen|o|biz|siz|onlar|kendim|kendin|kendi|kendimiz|kendiniz|kendileri|bu|şu|kim|ne|biri|I|me|my|mine|we|us|our|ours|you|your|yours|he|him|his|she|her|hers|it|its|they|them|their|theirs)\b/gi) || []).length;
      const longestWord = text.split(/\s+/).reduce((longest, word) => word.length > longest.length ? word : longest, '');

      setStats({
        words,
        characters,
        sentences,
        paragraphs,
        pronouns,
        longestWord,
      });
    };

    calculateStats();
  }, [text]);

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <button onClick={() => changeLanguage('en')} className="langBtn">English</button>
        <button onClick={() => changeLanguage('tr')} className="langBtn">Türkçe</button>
      </div>
      <Paper style={{ padding: '16px', margin: '16px 0', textAlign: 'center', justifyContent: 'center' }}>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Typography variant="h6">{t('Words')}: {stats.words}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6">{t('Characters')}: {stats.characters}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6">{t('Sentences')}: {stats.sentences}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6">{t('Paragraphs')}: {stats.paragraphs}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6">{t('Pronouns')}: {stats.pronouns}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6">{t('LongestWord')}: {stats.longestWord}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default TextStats;