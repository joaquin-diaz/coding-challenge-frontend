import * as React from 'react';
import FilmDetails from '../Components/FilmDetails';
import { useSelector } from 'react-redux';
import { ApplicationState } from 'configure.store';

const FilmsDetailContainer: React.FC = () => {
  const selectedFilm = useSelector((state: ApplicationState) => state.films.selectedFilm);
  const selectedFilmPoster = useSelector(
    (state: ApplicationState) => state.films.selectedFilmPoster,
  );

  return <FilmDetails film={selectedFilm} posterURL={selectedFilmPoster} />;
};

export default FilmsDetailContainer;
