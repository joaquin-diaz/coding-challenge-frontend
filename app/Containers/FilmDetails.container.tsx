import * as React from 'react';
import FilmDetails from '../Components/FilmDetails';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../configure.store';
import { clearSelectedFilm } from '../actions/films.actions';

const FilmsDetailContainer: React.FC = () => {
  const selectedFilm = useSelector((state: ApplicationState) => state.films.selectedFilm);
  const selectedFilmPoster = useSelector(
    (state: ApplicationState) => state.films.selectedFilmPoster,
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(clearSelectedFilm());
  };

  return <FilmDetails film={selectedFilm} posterURL={selectedFilmPoster} onClose={handleClose} />;
};

export default FilmsDetailContainer;
