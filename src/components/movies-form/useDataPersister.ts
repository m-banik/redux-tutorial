// Custom'owy hook udostępniający kreatory akcji komponentowi
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  clearMoviesListStart,
  addMovieStart,
  removeMovieStart
} from '@MoviesModel/actions';
import { DispatchType } from '@Common/types';
type UseDataPersisterType = () => {
  clearMoviesList: typeof clearMoviesListStart;
  addMovie: typeof addMovieStart;
  removeMovie: typeof removeMovieStart;
};

export const useDataPersister: UseDataPersisterType = () => {
  // https://react-redux.js.org/api/hooks#usedispatch
  const dispatch =
    useDispatch<
      DispatchType<
        ReturnType<
          | typeof clearMoviesListStart
          | typeof addMovieStart
          | typeof removeMovieStart
        >
      >
    >();
  // https://pl.reactjs.org/docs/hooks-reference.html#usecallback
  const clearMoviesList = useCallback<typeof clearMoviesListStart>(
    () => dispatch(clearMoviesListStart()),
    [dispatch]
  );
  const addMovie = useCallback<typeof addMovieStart>(
    (movieTitle) => dispatch(addMovieStart(movieTitle)),
    [dispatch]
  );
  const removeMovie = useCallback<typeof removeMovieStart>(
    (removedMovieIdentifier, byProperty) =>
      dispatch(removeMovieStart(removedMovieIdentifier, byProperty)),
    [dispatch]
  );
  return {
    clearMoviesList,
    addMovie,
    removeMovie
  };
};
