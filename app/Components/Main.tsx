import * as React from 'react';

import FilmsLocationMapContainer from '../Containers/FilmsLocationMap.container';
import SearchBarContainer from '../Containers/SearchBar.container';

const Main: React.FC = () => {
  return (
    <div>
      <SearchBarContainer />
      <FilmsLocationMapContainer />
    </div>
  );
};

export default Main;
