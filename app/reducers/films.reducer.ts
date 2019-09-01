import { Film, FilmWithCoordinates } from '../types/Film';
import { FilmsActions } from '../actions/films.actions';
import { Reducer } from 'redux';

export interface FilmsState {
  isLoading: boolean;
  films: Array<FilmWithCoordinates>;
  selectedFilm: FilmWithCoordinates | null;
  selectedFilmPoster: string | null;
  filmSuggestions: Array<Film>;
  isLoadingSuggestions: boolean;
  query: string;
}

export const initialState: FilmsState = {
  isLoading: false,
  films: [],
  selectedFilm: null,
  selectedFilmPoster: null,
  filmSuggestions: [],
  isLoadingSuggestions: false,
  query: '',
};

const filmReducer: Reducer<FilmsState, FilmsActions> = (
  state: FilmsState = initialState,
  action: FilmsActions,
) => {
  switch (action.type) {
    case 'FETCH_FILMS':
      return {
        ...state,
        isLoading: true,
      };
    case 'FETCH_FILMS_SUCCESS':
      return {
        ...state,
        films: action.films,
        isLoading: false,
      };
    case 'SELECT_FILM':
      return {
        ...state,
        selectedFilm: action.film,
      };
    case 'SET_SELECTED_FILM_POSTER':
      return {
        ...state,
        selectedFilmPoster: action.posterURL,
      };
    case 'FETCH_SUGGESTIONS':
      return {
        ...state,
        isLoadingSuggestions: true,
      };
    case 'FETCH_SUGGESTIONS_SUCCESS':
      return {
        ...state,
        filmSuggestions: action.films,
        isLoadingSuggestions: false,
      };
    case 'CLEAR_SUGGESTIONS':
      return {
        ...state,
        filmSuggestions: [],
      };
    case 'SET_SEARCH_VALUE':
      return {
        ...state,
        query: action.payload.query,
      };
    default:
      return state;
  }
};

export default filmReducer;
