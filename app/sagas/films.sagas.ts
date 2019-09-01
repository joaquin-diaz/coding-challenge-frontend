import { call, put, takeLatest } from 'redux-saga/effects';

import * as filmsService from '../services/films.service';
import * as filmsActions from '../actions/films.actions';

export function* fetchFilms(action: filmsActions.FetchFilmsAction) {
  const response = yield call(
    filmsService.fetchFilms,
    action.payload.query,
    action.payload.limit,
    true,
  );
  yield put(filmsActions.fetchFilmsSuccess(response));
}

export function* fetchFilmsSuggestions(action: filmsActions.FetchFilmsAction) {
  const response = yield call(filmsService.fetchFilms, action.payload.query, 50, false);
  yield put(filmsActions.fetchSuggestionsSuccess(response));
}

export function* fetchFilmPoster(action: filmsActions.SelectFilmAction) {
  const response = yield call(filmsService.fetchFilmPoster, action.film.title);
  const responseJson = yield response.json();
  const posterPath = responseJson.results[0].poster_path;

  yield put(filmsActions.setSelectedFilmPoster(`http://image.tmdb.org/t/p/w500/${posterPath}`));
}

export default [
  takeLatest(filmsActions.FETCH_FILMS, fetchFilms),
  takeLatest(filmsActions.SELECT_FILM, fetchFilmPoster),
  takeLatest(filmsActions.FETCH_SUGGESTIONS, fetchFilmsSuggestions),
];
