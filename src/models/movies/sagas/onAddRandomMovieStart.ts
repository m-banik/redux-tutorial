// Saga nasłuchująca na akcję o typie ADD_RANDOM_MOVIE_START
import { select, put, takeLatest } from 'typed-redux-saga';
import { ADD_RANDOM_MOVIE_START } from '../types';
import { storeMovies } from '../actions';
import { selectMoviesList } from '../selectors';
import { ErrorsEnum, extra_data } from '@Common/index';
import {
  createDeepCopy,
  checkIfAreOfMovieObjectType,
  getRandomMovie
} from '@Utils/index';

function* onAddRandomMovie() {
  const moviesList = createDeepCopy(yield* select(selectMoviesList));
  if (!checkIfAreOfMovieObjectType(moviesList)) {
    alert(ErrorsEnum.type);
    return;
  }
  const { list } = extra_data;
  const extraMoviesPresentInTheStore = moviesList.filter(
    (movie) => list.findIndex(({ title }) => title === movie.title) >= 0
  );
  if (extraMoviesPresentInTheStore.length === list.length) {
    return;
  }
  while (true) {
    const newMovie = getRandomMovie(moviesList, list);
    const indexOfAddedMovie = moviesList.findIndex(
      ({ title }) => title === newMovie.title
    );
    if (indexOfAddedMovie < 0) {
      const moviesToBeStored = [...moviesList, newMovie];
      yield* put(storeMovies(moviesToBeStored));
      break;
    }
  }
}

// Właściwe nasłuchiwanie na akcję
export function* onAddRandomMovieStart() {
  yield* takeLatest<typeof ADD_RANDOM_MOVIE_START, typeof onAddRandomMovie>(
    ADD_RANDOM_MOVIE_START,
    onAddRandomMovie
  );
}
