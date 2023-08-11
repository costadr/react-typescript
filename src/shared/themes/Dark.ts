import { createTheme } from '@mui/material';
import { cyan, yellow } from '@mui/material/colors';

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: yellow[700],
      dark: yellow[800],
      light: yellow[500],
      contrastText: '#ffffff',
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: '#ffffff',
    },
    background: {
      paper: '#303134',
      default: '#202124',
    }
  },
  typography: {
    fontFamily: 'Roboto',
    body1: {
      color: '#ffffff', // Set font color to white for body1 text
    },
    body2: {
      color: '#ffffff', // Set font color to white for body2 text
    },
    h1: {
      color: '#ffffff', // Set font color to white for h1 text
    },
    // Repeat for h2, h3, h4, h5, and h6
  },
  components: {
    MuiIcon: {
      styleOverrides: {
        root: {
          color: '#ffffff', // Set font color to white for Material-UI icons
        },
      },
    },
  },
});