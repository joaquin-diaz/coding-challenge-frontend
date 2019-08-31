import { all } from 'redux-saga/effects';

import filmsSagas from './films.sagas';

export default function* rootSaga() {
  yield all([...filmsSagas]);
}
