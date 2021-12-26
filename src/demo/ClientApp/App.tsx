import * as React from 'react';
import Basic from './pages/basic/Basic';
import Header from './components/header/Header';
import { hot } from 'react-hot-loader';
import { muiTheme } from './theme/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
const App = () => (
  <ThemeProvider theme={muiTheme}>
    <BrowserRouter>
      <Header />
      <Basic />
    </BrowserRouter>
  </ThemeProvider>
);

export default hot(module)(App);
