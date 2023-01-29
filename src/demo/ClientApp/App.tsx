import * as React from 'react';
import Basic from './pages/basic/Basic';
import Header from './components/header/Header';
import { hot } from 'react-hot-loader';
import { muiTheme } from './theme/theme';
import {
  ThemeProvider,
  Theme,
  StyledEngineProvider,
} from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

const App = () => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={muiTheme}>
      <BrowserRouter>
        <Header />
        <Basic />
      </BrowserRouter>
    </ThemeProvider>
  </StyledEngineProvider>
);

export default hot(module)(App);
