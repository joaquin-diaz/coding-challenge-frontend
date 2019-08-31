import Action from './Action';
import Film from '../types/Film';

export type FilmsAction = 'FETCH_FILMS' | 'FETCH_FILMS_SUCCESS' | 'FETCH_FILMS_ERROR';

interface FetchFilmsAction extends Action<FilmsAction> {
  type: 'FETCH_FILMS';
}
interface FetchFilmsSuccessAction extends Action<FilmsAction> {
  type: 'FETCH_FILMS_SUCCESS';
  films: Array<Film>;
}

export type FilmsActionType = FetchFilmsAction | FetchFilmsSuccessAction;

export const fetchFilms = (): FetchFilmsAction => {
  return {
    type: 'FETCH_FILMS',
  };
};

export const fetchFilmsSuccess = (films: Array<Film>): FetchFilmsSuccessAction => {
  return {
    films,
    type: 'FETCH_FILMS_SUCCESS',
  };
};
