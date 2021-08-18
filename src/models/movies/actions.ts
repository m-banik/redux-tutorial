/* Kreatory akcji, inaczej też(błędnie) akcje. Akcja to obiekt z
 obowiązkowym polem `type` i dodatkowymi. Kreator to funkcja, która
 go zwraca. Czysta funkcja - bez efektów ubocznych. */
import * as moviesActionTypes from './types';
import { IdType, MovieObjectType } from '@Common/types';

export const addMovieStart = (newMovieTitle: string) =>
  <const>{
    type: moviesActionTypes.ADD_MOVIE_START,
    newMovieTitle
  };

export const addRandomMovieStart = () =>
  <const>{
    type: moviesActionTypes.ADD_RANDOM_MOVIE_START
  };

export const addRandomCurioAsMovieStart = () =>
  <const>{
    type: moviesActionTypes.ADD_RANDOM_CURIO_AS_MOVIE_START
  };

export const removeMovieStart = (
  removedMovieIdentifier: string | IdType,
  byProperty?: 'id' | 'title'
) =>
  <const>{
    type: moviesActionTypes.REMOVE_MOVIE_START,
    removedMovieIdentifier,
    byProperty: byProperty ?? 'title'
  };

export const storeMovies = (moviesToBeStored: MovieObjectType[]) =>
  <const>{
    type: moviesActionTypes.STORE_MOVIES,
    moviesToBeStored
  };

export const clearMoviesListStart = () =>
  <const>{
    type: moviesActionTypes.CLEAR_MOVIES_LIST_START
  };

export const clearMoviesListSuccess = () =>
  <const>{
    type: moviesActionTypes.CLEAR_MOVIES_LIST_SUCCESS
  };

export const resetMoviesModelState = () =>
  <const>{
    type: moviesActionTypes.RESET_MOVIES_MODEL_STATE
  };

// Zbiorczy typ dla akcji tego modelu
export type MoviesModelActionType = ReturnType<
  | typeof addMovieStart
  | typeof addRandomMovieStart
  | typeof addRandomCurioAsMovieStart
  | typeof removeMovieStart
  | typeof storeMovies
  | typeof clearMoviesListStart
  | typeof clearMoviesListSuccess
  | typeof resetMoviesModelState
>;
