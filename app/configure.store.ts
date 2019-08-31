import { createStore, Reducer, combineReducers, Store, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxSaga from 'redux-saga';

import Actions from './actions/Actions';
import filmsReducer, { FilmsState } from './reducers/films.reducer';

import sagas from './sagas';

export interface ApplicationState {
  films: FilmsState;
}

const combinedReducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  films: filmsReducer,
});

function configureStore(): Store<ApplicationState> {
  const composeEnhancers = composeWithDevTools({});
  const sagaMiddleware = reduxSaga();

  const composedMiddleware = composeEnhancers(applyMiddleware(sagaMiddleware));

  const store = createStore<ApplicationState, Actions, {}, {}>(
    combinedReducers,
    undefined,
    composedMiddleware,
  );

  sagaMiddleware.run(sagas);

  return store;
}

export default configureStore;
