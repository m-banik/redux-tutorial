// Saga nasłuchująca na akcję o typie ADD_MOVIE_START
import { select, put, takeLatest } from 'typed-redux-saga';
import { ADD_MOVIE_START } from '../types';
import { addMovieStart, storeMovies } from '../actions';
import { selectMoviesList } from '../selectors';
import { ErrorsEnum, MovieObjectType } from '@Common/index';
import {
  createDeepCopy,
  checkIfAreOfMovieObjectType,
  uuid
} from '@Utils/index';

type actionType = ReturnType<typeof addMovieStart>;

function* onAddMovie({ newMovieTitle }: actionType) {
  const moviesList = createDeepCopy(yield* select(selectMoviesList));
  if (!checkIfAreOfMovieObjectType(moviesList)) {
    alert(ErrorsEnum.type);
    return;
  }
  const isMovieOfGivenTitleAlreadyOnTheList =
    moviesList.findIndex(
      ({ title }) => title.toLowerCase() === newMovieTitle.toLowerCase()
    ) >= 0;
  if (isMovieOfGivenTitleAlreadyOnTheList) {
    alert(ErrorsEnum.add_present_element);
    return;
  }
  const newMovie: MovieObjectType = {
    id: uuid(),
    title: newMovieTitle
  };
  const moviesToBeStored = [...moviesList, newMovie];
  yield* put(storeMovies(moviesToBeStored));
}

// Właściwe nasłuchiwanie na akcję
export function* onAddMovieStart() {
  yield* takeLatest<typeof ADD_MOVIE_START, typeof onAddMovie>(
    ADD_MOVIE_START,
    onAddMovie
  );
}
