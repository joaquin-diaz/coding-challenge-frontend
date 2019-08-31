import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ApplicationState } from '../configure.store';

import FilmsLocationMap from '../Components/FilmsLocationMap';
import { fetchFilms, selectFilm } from '../actions/films.actions';
import Film from '../types/Film';

const FilmsLocationMapContainer = () => {
  const films = useSelector((state: ApplicationState) => state.films.films);
  const dispatch = useDispatch();
  const onFilmSelect = (film: Film) => {
    dispatch(selectFilm(film));
  };

  // Fetch films on mount
  React.useEffect(() => {
    dispatch(fetchFilms('', 10));
  }, []);

  return <FilmsLocationMap films={films} onMarkerClick={onFilmSelect} />;
};

export default FilmsLocationMapContainer;
