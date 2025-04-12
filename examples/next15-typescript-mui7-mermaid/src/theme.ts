'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-roboto)',
    h1: {
      fontSize: '64px',
      fontWeight: 'normal',
    },
  },
});

export default theme;
