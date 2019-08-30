import 'react-hot-loader';

import * as React from 'react';
import { hot } from 'react-hot-loader/root';

import reactDom from 'react-dom';

const App = () => {
  return <div>React App</div>;
};

const AppWithHotLoader = hot(App);

reactDom.render(<AppWithHotLoader />, document.getElementById('root'));
