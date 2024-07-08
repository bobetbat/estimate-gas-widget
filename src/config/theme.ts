import { createTheme, ThemeOptions, colors } from '@mui/material';

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
          borderRadius: '16px', // Bubbly corners
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
          borderRadius: '8px', // Slight rounding on cells
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
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: '16px', // Bubbly corners
          padding: '8px 16px', // Default padding
          borderColor: '#ccc', // Subtle border color
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Light shadow
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
    MuiTypography: {
      styleOverrides: {
        root: {
          color: 'inherit', // Inherit color for text
          marginBottom: '16px', // Consistent spacing below
        },
        h6: {
          fontWeight: 'bold', // Bold headings
          marginBottom: '8px', // Spacing for headings
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
    background: {
      default: '#ffffff', // White background
      paper: '#f5f5f5', // Light gray paper background
    },
    primary: {
      main: '#f5f5dc', // Creamy white
      contrastText: '#000', // Black text
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
    divider: '#e0e0e0', // Light gray dividers
    action: {
      active: '#000', // Black active icon
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
      main: '#556cd6', // Blue-purple
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
    text: {
      primary: '#fff', // White primary text
      secondary: '#aaa', // Light gray secondary text
      disabled: '#555', // Dark gray disabled text
    },
    divider: '#555', // Dark gray dividers
    action: {
      active: '#fff', // White active icon
      hover: '#424242', // Darker hover
      selected: '#19857b', // Tealish green selected
      disabled: '#555', // Dark gray disabled
      disabledBackground: '#424242', // Darker disabled background
    },
  },
  ...commonSettings,
};

export const getTheme = (mode: 'light' | 'dark' | null) =>
  createTheme(mode === 'light' ? lightThemeOptions : darkThemeOptions);
