import * as React from 'react';
import styled from '@emotion/styled';

import FilmsLocationMapContainer from '../Containers/FilmsLocationMap.container';
import SearchBarContainer from '../Containers/SearchBar.container';
import FilmDetailsContainer from '../Containers/FilmDetails.container';
import LoadingScreenContainer from '../Containers/LoadingScreen.container';

const GlobalStyles = styled.div`
  font-family: 'Open Sans', sans-serif;
`;

const Main: React.FC = () => {
  return (
    <GlobalStyles>
      <LoadingScreenContainer />
      <SearchBarContainer />
      <FilmsLocationMapContainer />
      <FilmDetailsContainer />
    </GlobalStyles>
  );
};

export default Main;
