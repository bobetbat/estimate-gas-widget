import { createTheme, ThemeOptions, colors } from '@mui/material';

export enum ThemeMode {
  Light = 'light',
  Dark = 'dark'
}

// Common settings for both themes
const commonSettings: ThemeOptions = {
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px', // Bubbly corners
          padding: '16px', // Default padding
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)', // Subtle shadow
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
          padding: '8px 16px', // Default padding
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)', // Subtle shadow
          '@media (max-width:600px)': {
            padding: '6px 12px', // Reduced padding for small screens
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          padding: '16px', // Default padding
          overflow: 'hidden', // Ensure corners are rounded
          '@media (max-width:600px)': {
            padding: '8px', // Reduced padding for small screens
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '12px', // Default padding
          '@media (max-width:600px)': {
            padding: '6px', // Reduced padding for small screens
          },
          textAlign: 'left', // Consistent alignment
        },
        head: {
          fontWeight: 'bold', // Bold header text
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: 'inherit', // Inherit color for text
          marginBottom: '4px', // Consistent spacing below
        },
        h6: {
          fontWeight: 'bold', // Bold headings
          marginBottom: '4px', // Spacing for headings
        },
      },
    },
  },
};

// Define the light theme colors
const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff', // White background
      paper: '#f5f5f5', // Light gray paper background
    },
    primary: {
      main: '#007bff', // Blue for better contrast
      contrastText: '#fff', // White text
    },
    secondary: {
      main: '#ffb74d', // Warm orange
      contrastText: '#000', // Black text
    },
    error: {
      main: colors.red.A200, // Lighter red
      contrastText: '#fff', // White text
    },
    text: {
      primary: '#000', // Black primary text
      secondary: '#555', // Dark gray secondary text
      disabled: '#aaa', // Light gray disabled text
    },
    divider: '#555', // Dark gray dividers
    action: {
      active: '#007bff', // Blue active icon
      hover: '#f5f5f5', // Light gray hover
      selected: '#ffb74d', // Warm orange selected
      disabled: '#aaa', // Light gray disabled
      disabledBackground: '#e0e0e0', // Light gray disabled background
    },
  },
  ...commonSettings,
};

// Define the dark theme colors
const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    background: {
      default: '#303030', // Dark background
      paper: '#424242', // Darker paper background
    },
    primary: {
      main: '#f5f5dc', // Creamy white
      contrastText: '#fff', // White text
    },
    secondary: {
      main: '#19857b', // Tealish green
      contrastText: '#fff', // White text
    },
    error: {
      main: colors.red.A400, // Red
      contrastText: '#fff', // White text
    },
    divider: '#e0e0e0', // Light gray dividers
    text: {
      primary: '#fff', // White primary text
      secondary: '#aaa', // Light gray secondary text
      disabled: '#555', // Dark gray disabled text
    },
    action: {
      active: '#19857b', // Tealish green active icon
      hover: '#424242', // Darker hover
      selected: '#19857b', // Tealish green selected
      disabled: '#555', // Dark gray disabled
      disabledBackground: '#424242', // Darker disabled background
    },
  },
  ...commonSettings,
};

export const getTheme = (mode: ThemeMode | null) =>
  createTheme(mode === ThemeMode.Light ? lightThemeOptions : darkThemeOptions);
