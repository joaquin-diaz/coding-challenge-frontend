import * as React from 'react';
import FilmDetails from '../Components/FilmDetails';
import { useSelector } from 'react-redux';
import { ApplicationState } from 'configure.store';

const FilmsDetailContainer: React.FC = () => {
  const selectedFilm = useSelector((state: ApplicationState) => state.films.selectedFilm);

  return <FilmDetails film={selectedFilm} />;
};

export default FilmsDetailContainer;
