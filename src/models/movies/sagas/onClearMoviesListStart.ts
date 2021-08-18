// Saga nasłuchująca na akcję o typie CLEAR_MOVIES_LIST_START
import { select, put, takeLatest } from 'typed-redux-saga';
import { CLEAR_MOVIES_LIST_START } from '../types';
import { selectIsMoviesListEmpty } from '../selectors';
import { storeMovies } from '../actions';
import { ErrorsEnum } from '@Common/index';

function* onClearMoviesList() {
  const isMoviesListEmpty = yield* select(selectIsMoviesListEmpty);
  if (isMoviesListEmpty) {
    alert(ErrorsEnum.empty_list);
    return;
  }
  /* Ten sam efekt czyszczący dałaby odpalona akcja resetMoviesModelState.
   Plus nadpisanie nagłówka listy. */
  yield* put(storeMovies([]));
}

// Właściwe nasłuchiwanie na akcję
export function* onClearMoviesListStart() {
  yield* takeLatest<typeof CLEAR_MOVIES_LIST_START, typeof onClearMoviesList>(
    CLEAR_MOVIES_LIST_START,
    onClearMoviesList
  );
}
