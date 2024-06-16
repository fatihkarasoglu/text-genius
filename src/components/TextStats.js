import React, { useEffect, useState } from 'react';
import { Paper, Grid, Typography } from '@mui/material';

const TextStats = ({ text }) => {
  const [stats, setStats] = useState({
    words: 0,
    characters: 0,
    sentences: 0,
    paragraphs: 0,
    pronouns: 0,
    readingTime: '0 min',
    longestWord: '',
  });

  useEffect(() => {
    const calculateStats = () => {
      const words = text.trim().split(/\s+/).length;
      const characters = text.length;
      const sentences = text.split(/[.!?]/).filter(Boolean).length;
      const paragraphs = text.split(/\n+/).filter(Boolean).length;
      const pronouns = (text.match(/\b(I|me|my|mine|we|us|our|ours|you|your|yours|he|him|his|she|her|hers|it|its|they|them|their|theirs)\b/gi) || []).length;
      const readingTime = `${Math.ceil(words / 200)} min`;
      const longestWord = text.split(/\s+/).reduce((longest, word) => word.length > longest.length ? word : longest, '');

      setStats({
        words,
        characters,
        sentences,
        paragraphs,
        pronouns,
        readingTime,
        longestWord,
      });
    };

    calculateStats();
  }, [text]);

  return (
    <Paper style={{ padding: '16px', margin: '16px 0', textAlign: 'center' }}>
      <Grid container spacing={1}>
        <Grid item xs={2}><Typography variant="h6">Words: {stats.words}</Typography></Grid>
        <Grid item xs={2}><Typography variant="h6">Characters: {stats.characters}</Typography></Grid>
        <Grid item xs={2}><Typography variant="h6">Sentences: {stats.sentences}</Typography></Grid>
        <Grid item xs={2}><Typography variant="h6">Paragraphs: {stats.paragraphs}</Typography></Grid>
        <Grid item xs={2}><Typography variant="h6">Pronouns: {stats.pronouns}</Typography></Grid>
        <Grid item xs={4}><Typography variant="h6">Average Reading Time: {stats.readingTime}</Typography></Grid>
        <Grid item xs={3}><Typography variant="h6">Longest word: {stats.longestWord}</Typography></Grid>
      </Grid>
    </Paper>
  );
};

export default TextStats;