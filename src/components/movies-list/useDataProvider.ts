/* Custom'owy hook udostępniający wiązki stanu i
 dane stworzone na jego bazie komponentowi. */
import { useSelector } from 'react-redux';
import { selectMoviesDataToBeDisplayed } from '@MoviesModel/selectors';
import { StoreType } from '@Common/types';

type UseDataProviderType = () => {
  moviesDataToBeDisplayed: ReturnType<typeof selectMoviesDataToBeDisplayed>;
};

export const useDataProvider: UseDataProviderType = () => {
  const moviesDataToBeDisplayed = useSelector((state: StoreType) =>
    selectMoviesDataToBeDisplayed(state)
  );
  return {
    moviesDataToBeDisplayed
  };
};
