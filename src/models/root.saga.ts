// Główna saga - integruje sagi wszystkich modeli - tutaj tylko jednego
import { all, call } from 'redux-saga/effects';
import { moviesSagas } from './movies/sagas';

export function* rootSaga() {
  yield all([call(moviesSagas)]);
}
