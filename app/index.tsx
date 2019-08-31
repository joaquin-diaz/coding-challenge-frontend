import 'react-hot-loader';
import 'babel-polyfill';

import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import reactDom from 'react-dom';

import App from './App';

const AppWithHotLoader = hot(App);

reactDom.render(<AppWithHotLoader />, document.getElementById('root'));
