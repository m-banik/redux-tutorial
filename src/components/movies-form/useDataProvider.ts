/* Custom'owy hook udostępniający wiązki stanu i
 dane stworzone na jego bazie komponentowi. */
import { useSelector } from 'react-redux';
import {
  selectMoviesListLength,
  selectIfMovieOfGivenTitleIsAlreadyOnTheList
} from '@MoviesModel/selectors';
import { StoreType } from '@Common/types';

type UseDataProviderType = (movieTitle: string) => {
  moviesListLength: ReturnType<typeof selectMoviesListLength>;
  isMovieOfGivenTitleAlreadyOnTheList: ReturnType<
    ReturnType<typeof selectIfMovieOfGivenTitleIsAlreadyOnTheList>
  >;
};

export const useDataProvider: UseDataProviderType = (movieTitle) => {
  // https://react-redux.js.org/api/hooks#useselector-examples
  const moviesListLength = useSelector((state: StoreType) =>
    selectMoviesListLength(state)
  );
  const isMovieOfGivenTitleAlreadyOnTheList = useSelector((state: StoreType) =>
    selectIfMovieOfGivenTitleIsAlreadyOnTheList(movieTitle)(state)
  );
  return {
    moviesListLength,
    isMovieOfGivenTitleAlreadyOnTheList
  };
};
