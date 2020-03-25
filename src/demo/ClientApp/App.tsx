import * as React from 'react';
import Basic from './pages/basic/Basic';
import Header from './components/header/Header';
import { hot } from 'react-hot-loader';
import { muiTheme } from './theme/theme';
import { ThemeProvider } from '@material-ui/core/styles';

const App = () => (
  <ThemeProvider theme={muiTheme}>
    <Header />
    <Basic />
  </ThemeProvider>
);

export default hot(module)(App);
