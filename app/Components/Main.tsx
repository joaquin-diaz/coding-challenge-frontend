import * as React from 'react';

import FilmsLocationMapContainer from '../Containers/FilmsLocationMap.container';
import SearchBarContainer from '../Containers/SearchBar.container';
import FilmDetailsContainer from '../Containers/FilmDetails.container';

const Main: React.FC = () => {
  return (
    <React.Fragment>
      <SearchBarContainer />
      <FilmsLocationMapContainer />
      <FilmDetailsContainer />
    </React.Fragment>
  );
};

export default Main;
