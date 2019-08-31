import Film from '../types/Film';
import { Action, ActionCreator } from 'redux';

export const FETCH_FILMS = 'FETCH_FILMS';
export const FETCH_FILMS_SUCCESS = 'FETCH_FILMS_SUCCESS';

export type FilmsAction = typeof FETCH_FILMS | typeof FETCH_FILMS_SUCCESS;

interface FetchFilmsAction extends Action<FilmsAction> {
  type: typeof FETCH_FILMS;
}
interface FetchFilmsSuccessAction extends Action<FilmsAction> {
  type: typeof FETCH_FILMS_SUCCESS;
  films: Array<Film>;
}

export type FilmsActions = FetchFilmsAction | FetchFilmsSuccessAction;

export const fetchFilms: ActionCreator<FetchFilmsAction> = () => {
  return {
    type: FETCH_FILMS,
  };
};

export const fetchFilmsSuccess: ActionCreator<FetchFilmsSuccessAction> = (films: Array<Film>) => {
  return {
    films,
    type: FETCH_FILMS_SUCCESS,
  };
};
