import * as React from 'react';

import SearchBar from './SearchBar/SearchBar';
import FilmsLocationMapContainer from '../Containers/FilmsLocationMap.container';

const Main: React.FC = () => {
  return (
    <div>
      <SearchBar />
      <FilmsLocationMapContainer />
    </div>
  );
};

export default Main;
