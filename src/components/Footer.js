import React from 'react';
import { Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Footer = ({ language }) => {

    const { t } = useTranslation();

    return (
        <Paper className="footer">
            <Typography variant="body1">
                {t('footer')}
            </Typography>
        </Paper>
    );
};

export default Footer;