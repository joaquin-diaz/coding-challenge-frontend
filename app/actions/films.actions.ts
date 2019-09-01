import { FilmWithCoordinates, Film } from '../types/Film';
import { Action, ActionCreator } from 'redux';

export const FETCH_FILMS = 'FETCH_FILMS';
export const FETCH_FILMS_SUCCESS = 'FETCH_FILMS_SUCCESS';
export const SELECT_FILM = 'SELECT_FILM';
export const SET_SELECTED_FILM_POSTER = 'SET_SELECTED_FILM_POSTER';
export const FETCH_SUGGESTIONS = 'FETCH_SUGGESTIONS';
export const FETCH_SUGGESTIONS_SUCCESS = 'FETCH_SUGGESTIONS_SUCCESS';
export const CLEAR_SUGGESTIONS = 'CLEAR_SUGGESTIONS';

export type FilmsAction =
  | typeof FETCH_FILMS
  | typeof FETCH_FILMS_SUCCESS
  | typeof SELECT_FILM
  | typeof SET_SELECTED_FILM_POSTER
  | typeof FETCH_SUGGESTIONS
  | typeof FETCH_SUGGESTIONS_SUCCESS
  | typeof CLEAR_SUGGESTIONS;

type FilmActionType = Action<FilmsAction>;

export interface FetchFilmsAction extends FilmActionType {
  type: typeof FETCH_FILMS;
  payload: {
    query: string;
    limit: number;
  };
}
export interface FetchFilmsSuccessAction extends FilmActionType {
  type: typeof FETCH_FILMS_SUCCESS;
  films: Array<FilmWithCoordinates>;
}
export interface SelectFilmAction extends FilmActionType {
  type: typeof SELECT_FILM;
  film: FilmWithCoordinates;
}
export interface SetSelectedFilmPosterAction extends FilmActionType {
  type: typeof SET_SELECTED_FILM_POSTER;
  posterURL: string;
}
export interface FetchSuggestionsAction extends FilmActionType {
  type: typeof FETCH_SUGGESTIONS;
  payload: {
    query: string;
  };
}
export interface FetchSuggestionsSuccessAction extends FilmActionType {
  type: typeof FETCH_SUGGESTIONS_SUCCESS;
  films: Array<Film>;
}
export interface ClearSuggestionsAction extends FilmActionType {
  type: typeof CLEAR_SUGGESTIONS;
}

export type FilmsActions =
  | FetchFilmsAction
  | FetchFilmsSuccessAction
  | SelectFilmAction
  | SetSelectedFilmPosterAction
  | FetchSuggestionsAction
  | FetchSuggestionsSuccessAction
  | ClearSuggestionsAction;

export const fetchFilms: ActionCreator<FetchFilmsAction> = (query: string, limit: number) => {
  return {
    type: FETCH_FILMS,
    payload: {
      query,
      limit,
    },
  };
};

export const fetchFilmsSuccess: ActionCreator<FetchFilmsSuccessAction> = (
  films: Array<FilmWithCoordinates>,
) => {
  return {
    films,
    type: FETCH_FILMS_SUCCESS,
  };
};

export const selectFilm: ActionCreator<SelectFilmAction> = (film: FilmWithCoordinates) => {
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

export const fetchSuggestions: ActionCreator<FetchSuggestionsAction> = (query: string) => {
  return {
    type: FETCH_SUGGESTIONS,
    payload: {
      query,
    },
  };
};

export const fetchSuggestionsSuccess: ActionCreator<FetchSuggestionsSuccessAction> = (
  films: Array<Film>,
) => {
  return {
    films,
    type: FETCH_SUGGESTIONS_SUCCESS,
  };
};

export const clearSuggestions: ActionCreator<ClearSuggestionsAction> = () => {
  return {
    type: CLEAR_SUGGESTIONS,
  };
};
