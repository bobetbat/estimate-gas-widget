import { createTheme, ThemeOptions, colors } from '@mui/material';

// Common settings for both themes
const commonSettings: ThemeOptions = {
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px', // Bubbly corners
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)', // Subtle shadow
          padding: '16px', // Default padding
          '@media (max-width:600px)': {
            padding: '8px', // Reduced padding for small screens
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '16px', // Bubbly corners
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)', // Subtle shadow
          padding: '8px 16px', // Default padding
          '@media (max-width:600px)': {
            padding: '6px 12px', // Reduced padding for small screens
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderRadius: '16px', // Bubbly corners
          overflow: 'hidden', // Ensure corners are rounded
          padding: '16px', // Default padding
          '@media (max-width:600px)': {
            padding: '8px', // Reduced padding for small screens
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Slight rounding on cells
          padding: '12px', // Default padding
          '@media (max-width:600px)': {
            padding: '6px', // Reduced padding for small screens
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: '16px', // Bubbly corners
          padding: '8px 16px', // Default padding
          '@media (max-width:600px)': {
            padding: '6px 12px', // Reduced padding for small screens
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          borderRadius: '16px', // Bubbly corners
          padding: '8px', // Default padding
          '@media (max-width:600px)': {
            padding: '4px', // Reduced padding for small screens
          },
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
      main: colors.red.A200, // Lighter red
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
      main: colors.red.A400, // Red
    },
  },
  ...commonSettings,
};

export const getTheme = (mode: 'light' | 'dark' | null) =>
  createTheme(mode === 'light' ? lightThemeOptions : darkThemeOptions);
