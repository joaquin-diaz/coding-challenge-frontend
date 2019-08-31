import Film from '../types/Film';
import { Action, ActionCreator } from 'redux';

export const FETCH_FILMS = 'FETCH_FILMS';
export const FETCH_FILMS_SUCCESS = 'FETCH_FILMS_SUCCESS';
export const SELECT_FILM = 'SELECT_FILM';
export const SET_SELECTED_FILM_POSTER = 'SET_SELECTED_FILM_POSTER';

export type FilmsAction =
  | typeof FETCH_FILMS
  | typeof FETCH_FILMS_SUCCESS
  | typeof SELECT_FILM
  | typeof SET_SELECTED_FILM_POSTER;
type FilmActionType = Action<FilmsAction>;

export interface FetchFilmsAction extends FilmActionType {
  type: typeof FETCH_FILMS;
}
export interface FetchFilmsSuccessAction extends FilmActionType {
  type: typeof FETCH_FILMS_SUCCESS;
  films: Array<Film>;
}
export interface SelectFilmAction extends FilmActionType {
  type: typeof SELECT_FILM;
  film: Film;
}
export interface SetSelectedFilmPosterAction extends FilmActionType {
  type: typeof SET_SELECTED_FILM_POSTER;
  posterURL: string;
}

export type FilmsActions =
  | FetchFilmsAction
  | FetchFilmsSuccessAction
  | SelectFilmAction
  | SetSelectedFilmPosterAction;

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

export const selectFilm: ActionCreator<SelectFilmAction> = (film: Film) => {
  return {
    film,
    type: SELECT_FILM,
  };
};

export const setSelectedFilmPoster: ActionCreator<SetSelectedFilmPosterAction> = (
  posterURL: string,
) => {
  return {
    posterURL,
    type: SET_SELECTED_FILM_POSTER,
  };
};
