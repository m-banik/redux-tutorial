// Custom'owy hook udostępniający kreatory akcji komponentowi
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  addRandomCurioAsMovieStart,
  removeMovieStart,
  addRandomMovieStart
} from '@MoviesModel/actions';
import { DispatchType } from '@Common/types';

type UseDataPErsisterType = () => {
  addRandomCurioAsMovie: typeof addRandomCurioAsMovieStart;
  removeMovie: typeof removeMovieStart;
  addRandomMovie: typeof addRandomMovieStart;
};

export const useDataPersister: UseDataPErsisterType = () => {
  const dispatch =
    useDispatch<
      DispatchType<
        ReturnType<
          | typeof addRandomCurioAsMovieStart
          | typeof removeMovieStart
          | typeof addRandomMovieStart
        >
      >
    >();
  const addRandomCurioAsMovie = useCallback<typeof addRandomCurioAsMovieStart>(
    () => dispatch(addRandomCurioAsMovieStart()),
    [dispatch]
  );
  const removeMovie = useCallback<typeof removeMovieStart>(
    (removedMovieIdentifier, byProperty) =>
      dispatch(removeMovieStart(removedMovieIdentifier, byProperty)),
    [dispatch]
  );
  const addRandomMovie = useCallback<typeof addRandomMovieStart>(
    () => dispatch(addRandomMovieStart()),
    [dispatch]
  );
  return {
    addRandomCurioAsMovie,
    removeMovie,
    addRandomMovie
  };
};
