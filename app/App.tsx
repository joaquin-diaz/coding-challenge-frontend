import * as React from 'react';
import Main from './Components/Main';
import { Provider } from 'react-redux';
import configureStore from './configure.store';

const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
