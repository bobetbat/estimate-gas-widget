import { createTheme, ThemeOptions } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Common settings for both themes
const commonSettings: ThemeOptions = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // Rounded corners
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)', // Subtle shadow
        },
      },
    },
    // Add other component overrides as needed
  },
};

// Define the light theme colors
const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#f5f5dc', // Creamy white
      contrastText: '#000',
    },
    secondary: {
      main: '#ffb74d', // Warm orange
    },
    error: {
      main: red.A200, // Lighter red
    },
  },
  ...commonSettings,
};

// Define the dark theme colors
const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#556cd6', // Blue-purple
      contrastText: '#fff',
    },
    secondary: {
      main: '#19857b', // Tealish green
    },
    error: {
      main: red.A400, // Red
    },
  },
  ...commonSettings,
};

export const getTheme = (mode: 'light' | 'dark' | null) =>
  createTheme(mode === 'light' ? lightThemeOptions : darkThemeOptions);
