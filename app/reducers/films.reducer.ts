import Film from '../types/Film';
import { FilmsActions } from '../actions/films.actions';
import { Reducer } from 'redux';

export interface FilmsState {
  isLoading: boolean;
  films: Array<Film>;
  selectedFilm: Film | null;
}

export const initialState: FilmsState = {
  isLoading: false,
  films: [],
  selectedFilm: null,
};

const filmReducer: Reducer<FilmsState> = (
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
    default:
      return state;
  }
};

export default filmReducer;
