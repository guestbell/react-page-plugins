// Styles
require('./main.scss');
require('../../lib/scss/index.scss');

// Libs
import * as React from 'react';
import { render } from 'react-dom';
import App from './App';

// Misc
require('babel-polyfill');

render(<App />, document.getElementById('react-root'));
