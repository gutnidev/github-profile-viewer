import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    text: {
      primary: '#333',
      secondary: '#757373',
    },
    common: {
      black: '#333',
    },
    primary: {
      main: '#a9acb7',
      contrastText: '#fff',
    },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#ccc',
          borderBottomWidth: '0.1rem',
        },
      },
    },
  },
});
