// Saga integrująca wszystkie sagi tego modelu
import { all, call } from 'typed-redux-saga';
import { onAddMovieStart } from './onAddMovieStart';
import { onAddRandomCurioAsMovieStart } from './onAddRandomCurioAsMovieStart';
import { onAddRandomMovieStart } from './onAddRandomMovieStart';
import { onClearMoviesListStart } from './onClearMoviesListStart';
import { onRemoveMovieStart } from './onRemoveMovieStart';

export function* moviesSagas() {
  yield all([
    call(onAddMovieStart),
    call(onAddRandomCurioAsMovieStart),
    call(onAddRandomMovieStart),
    call(onClearMoviesListStart),
    call(onRemoveMovieStart)
  ]);
}
