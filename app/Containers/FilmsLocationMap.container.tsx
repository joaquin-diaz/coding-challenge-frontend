import * as React from 'react';
import FilmsLocationMap from '../Components/FilmsLocationMap';

import useFilmsApi from '../hooks/useFilmsApi';

const FilmsLocationMapContainer = () => {
  const [filmsState, fetchFilms] = useFilmsApi();

  // Fetch films on mount
  React.useEffect(() => {
    fetchFilms('', 0);
  }, []);

  return <FilmsLocationMap films={filmsState.films} />;
};

export default FilmsLocationMapContainer;
