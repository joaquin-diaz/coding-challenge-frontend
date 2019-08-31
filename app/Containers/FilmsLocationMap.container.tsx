import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ApplicationState } from '../configure.store';

import FilmsLocationMap from '../Components/FilmsLocationMap';
import { fetchFilms } from '../actions/films.actions';

const FilmsLocationMapContainer = () => {
  const films = useSelector((state: ApplicationState) => state.films.films);
  const dispatch = useDispatch();

  // Fetch films on mount
  React.useEffect(() => {
    dispatch(fetchFilms('', 10));
  }, []);

  return <FilmsLocationMap films={films} />;
};

export default FilmsLocationMapContainer;
