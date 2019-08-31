import { call, put, takeLatest } from 'redux-saga/effects';

import * as filmsService from '../services/films.service';
import * as filmsActions from '../actions/films.actions';

export function* fetchFilms() {
  const response = yield call(filmsService.fetchFilms, '', 10);
  yield put(filmsActions.fetchFilmsSuccess(response));
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
];
