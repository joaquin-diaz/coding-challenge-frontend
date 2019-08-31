import * as React from 'react';

import FilmsLocationMapContainer from '../Containers/FilmsLocationMap.container';
import SearchBarContainer from '../Containers/SearchBar.container';
import FilmDetailsContainer from '../Containers/FilmDetails.container';
import styled from '@emotion/styled';

const GlobalStyles = styled.div`
  font-family: 'Open Sans', sans-serif;
`;

const Main: React.FC = () => {
  return (
    <GlobalStyles>
      <SearchBarContainer />
      <FilmsLocationMapContainer />
      <FilmDetailsContainer />
    </GlobalStyles>
  );
};

export default Main;
