import * as React from 'react';
import Basic from './pages/basic/Basic';
import Header from './components/header/Header';
import { hot } from 'react-hot-loader';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { muiTheme } from './theme/theme';

const App = () => (
  <ThemeProvider theme={muiTheme}>
    <Header />
    <Basic />
  </ThemeProvider>
);

export default hot(module)(App);
