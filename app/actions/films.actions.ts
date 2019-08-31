import Film from '../types/Film';
import { Action, ActionCreator } from 'redux';

export const FETCH_FILMS = 'FETCH_FILMS';
export const FETCH_FILMS_SUCCESS = 'FETCH_FILMS_SUCCESS';
export const SELECT_FILM = 'SELECT_FILM';

export type FilmsAction = typeof FETCH_FILMS | typeof FETCH_FILMS_SUCCESS | typeof SELECT_FILM;
type FilmActionType = Action<FilmsAction>;

interface FetchFilmsAction extends FilmActionType {
  type: typeof FETCH_FILMS;
}
interface FetchFilmsSuccessAction extends FilmActionType {
  type: typeof FETCH_FILMS_SUCCESS;
  films: Array<Film>;
}
interface SelectFilm extends FilmActionType {
  type: typeof SELECT_FILM;
  film: Film;
}

export type FilmsActions = FetchFilmsAction | FetchFilmsSuccessAction | SelectFilm;

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

export const selectFilm: ActionCreator<SelectFilm> = (film: Film) => {
  return {
    film,
    type: SELECT_FILM,
  };
};
