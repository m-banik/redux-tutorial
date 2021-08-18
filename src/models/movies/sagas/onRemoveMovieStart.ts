// Saga nasłuchująca na akcję o typie REMOVE_MOVIE_START
import { select, put, takeLatest } from 'typed-redux-saga';
import { REMOVE_MOVIE_START } from '../types';
import { removeMovieStart, storeMovies } from '../actions';
import { selectMoviesList } from '../selectors';
import { ErrorsEnum } from '@Common/index';
import { createDeepCopy, checkIfAreOfMovieObjectType } from '@Utils/index';

type actionType = ReturnType<typeof removeMovieStart>;

function* onRemoveMovie({ removedMovieIdentifier, byProperty }: actionType) {
  const moviesList = createDeepCopy(yield* select(selectMoviesList));
  if (!checkIfAreOfMovieObjectType(moviesList)) {
    alert(ErrorsEnum.type);
    return;
  }
  const movieToBeRemoved = moviesList.find(
    (movie) => movie[byProperty] === removedMovieIdentifier
  );
  if (!movieToBeRemoved) {
    alert(ErrorsEnum.remove_absent_element);
    return;
  }
  const moviesToBeStored = moviesList.filter(
    ({ id }) => id !== movieToBeRemoved.id
  );
  yield* put(storeMovies(moviesToBeStored));
}

// Właściwe nasłuchiwanie na akcję
export function* onRemoveMovieStart() {
  yield* takeLatest<typeof REMOVE_MOVIE_START, typeof onRemoveMovie>(
    REMOVE_MOVIE_START,
    onRemoveMovie
  );
}
