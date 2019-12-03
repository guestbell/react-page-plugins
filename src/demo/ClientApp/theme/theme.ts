import { createMuiTheme } from '@material-ui/core/styles';
import defaultTheme from './defaultTheme';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: defaultTheme.primary,
    },
    secondary: {
      main: defaultTheme.secondary,
    },
    action: {
      hover: defaultTheme.grayLighter,
    },
  },
  overrides: {
    MuiCard: {
      root: {
        borderRadius: 0,
      },
    },
    MuiInput: {
      input: {
        paddingLeft: 6,
      },
    },
    MuiTableRow: {
      root: {
        '&$hover:hover': {
          backgroundColor: defaultTheme.grayLighter,
        },
      },
    },
  },
  zIndex: {
    tooltip: 15000,
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Montserrat',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 18,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1200,
      xl: 1920,
    },
  },
};

export const muiTheme = createMuiTheme(themeOptions);

export const muiDarkTheme = createMuiTheme({
  ...themeOptions,
  palette: {
    ...(themeOptions && themeOptions.palette),
    type: 'dark',
  },
  typography: {},
});
