import { useReducer } from 'react';

import * as filmActions from '../actions/films.actions';
import * as filmService from '../services/films.service';

import filmsReducer, { initialState, FilmsState } from '../reducers/films.reducer';

const useFilmsApi = (): [FilmsState, (query: string, limit: number) => any] => {
  const [state, dispatch] = useReducer(filmsReducer, initialState);

  const fetchFilms = async (query: string, limit: number) => {
    dispatch(filmActions.fetchFilms());

    try {
      const results = (await filmService.fetchFilms(query, limit)) as any;
      dispatch(filmActions.fetchFilmsSuccess(results));
    } catch (error) {
      console.log('Error when fetching films', error);
    }
  };

  return [state, fetchFilms];
};

export default useFilmsApi;
