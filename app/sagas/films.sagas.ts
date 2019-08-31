import { call, put, takeLatest } from 'redux-saga/effects';

import * as filmsService from '../services/films.service';
import * as filmsActions from '../actions/films.actions';

export function* fetchFilms() {
  const response = yield call(filmsService.fetchFilms, '', 10);
  yield put(filmsActions.fetchFilmsSuccess(response));
}

export default [takeLatest(filmsActions.FETCH_FILMS, fetchFilms)];
