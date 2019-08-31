import Film from '../types/Film';
import { FilmsActionType } from '../actions/films.actions';

export interface FilmsState {
  isLoading: boolean;
  films: Array<Film>;
}

export const initialState: FilmsState = {
  isLoading: false,
  films: [],
};

const filmReducer = (state: FilmsState, action: FilmsActionType): FilmsState => {
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
      };
    default: {
      return state;
    }
  }
};

export default filmReducer;
