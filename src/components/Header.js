import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../App.css";

const Header = () => {
  const { t } = useTranslation();

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/fatihkarasoglu/', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/fatihkarasoglu', '_blank');
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#313638'}}>
      <Toolbar>
        <Typography style={{ flexGrow: 1, fontSize: 25, cursor: 'pointer' }} title="Text Genius">
          {t('Title')}
        </Typography>
        <IconButton color="inherit" onClick={handleGitHubClick} title="GitHub">
          <GitHubIcon />
        </IconButton>
        <IconButton color="inherit" onClick={handleLinkedInClick} title="LinkedIn">
          <LinkedInIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
