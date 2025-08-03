'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
  },
});

export default theme;
