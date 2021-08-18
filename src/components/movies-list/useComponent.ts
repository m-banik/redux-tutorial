// Custom'owy hook - interfejs na linii komponent a jego logika
import { useCallback, useEffect } from 'react';
import { useDataProvider } from './useDataProvider';
import { useDataPersister } from './useDataPersister';
import { IdType, MovieObjectType } from '@Common/types';

type MovieRemoverType = (removedMovieId: IdType) => void;

type UseComponentType = () => {
  title: string;
  movies: MovieObjectType[];
  onRemoveMovie: MovieRemoverType;
};

export const useComponent: UseComponentType = () => {
  const { moviesDataToBeDisplayed } = useDataProvider();
  const { addRandomMovie, addRandomCurioAsMovie, removeMovie } =
    useDataPersister();
  // https://pl.reactjs.org/docs/hooks-reference.html#usecallback
  const onRemoveMovie = useCallback<MovieRemoverType>(
    (removedMovieId) => removeMovie(removedMovieId, 'id'),
    [removeMovie]
  );
  // https://pl.reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    const randomMovieSetterTimeoutId = setTimeout(() => addRandomMovie(), 5000);
    const randomCurioSetterTimeoutId = setTimeout(
      () => addRandomCurioAsMovie(),
      8000
    );
    return () => {
      clearTimeout(randomMovieSetterTimeoutId);
      clearTimeout(randomCurioSetterTimeoutId);
    };
    // eslint-disable-next-line
  }, []);
  return {
    title: moviesDataToBeDisplayed.description,
    movies: moviesDataToBeDisplayed.list,
    onRemoveMovie
  };
};
