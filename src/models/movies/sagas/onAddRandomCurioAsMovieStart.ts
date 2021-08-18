// Saga nasłuchująca na akcję o typie ADD_RANDOM_CURIO_AS_MOVIE_START
import { select, put, call, takeLatest } from 'typed-redux-saga';
import { ADD_RANDOM_CURIO_AS_MOVIE_START } from '../types';
import { storeMovies } from '../actions';
import { selectMoviesList } from '../selectors';
import {
  ErrorsEnum,
  MovieObjectType,
  EndpointsEnum,
  MethodsEnum
} from '@Common/index';
import {
  createDeepCopy,
  checkIfAreOfMovieObjectType,
  uuid,
  assertIfIsOfCurioObjectType
} from '@Utils/index';

// Tutaj odbywa się obsługa dodania ciekawostki o liczbie do listy filmów(sic!)
function* onAddRandomCurioAsMovie() {
  const moviesList = createDeepCopy(yield* select(selectMoviesList));
  // Type guard
  if (!checkIfAreOfMovieObjectType(moviesList)) {
    alert(ErrorsEnum.type);
    return;
  }
  const fetchedData = yield* call(() => onFetchOuterData());
  // Obsługa typu zwrotki z API
  if (typeof fetchedData === 'string' || !fetchedData) {
    alert(fetchedData || ErrorsEnum.fetch);
    return;
  }
  const newMovie: MovieObjectType = {
    id: uuid(),
    title: fetchedData.text
  };
  const moviesToBeStored = [...moviesList, newMovie];
  yield* put(storeMovies(moviesToBeStored));
}

function* onFetchOuterData() {
  try {
    // Prawidłowa obsługa API - kontrola zawartości i limit czasu oczekiwania
    const abortController = new AbortController();
    setTimeout(() => abortController.abort(), 2000);
    const response = yield* call(() =>
      fetch(EndpointsEnum.FETCH_RANDOM_CURIO, {
        method: MethodsEnum.GET,
        signal: abortController.signal
      })
    );
    const data: unknown = yield* call(() => response.json());
    // Asercja
    assertIfIsOfCurioObjectType(data);
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      if (error.message === ErrorsEnum.default_abortion_message) {
        return ErrorsEnum.fetch_timeout_failure;
      }
      alert(error.message);
      console.log(error.message);
    }
  }
}

// Właściwe nasłuchiwanie na akcję
export function* onAddRandomCurioAsMovieStart() {
  yield* takeLatest<
    typeof ADD_RANDOM_CURIO_AS_MOVIE_START,
    typeof onAddRandomCurioAsMovie
  >(ADD_RANDOM_CURIO_AS_MOVIE_START, onAddRandomCurioAsMovie);
}
