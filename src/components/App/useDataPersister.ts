// Custom'owy hook udostępniający kreatory akcji komponentowi
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { resetMoviesModelState } from '@MoviesModel/actions';
import { DispatchType } from '@Common/types';

type UseDataPersisterType = () => {
  resetMoviesModel: typeof resetMoviesModelState;
};

export const useDataPersister: UseDataPersisterType = () => {
  const dispatch =
    useDispatch<DispatchType<ReturnType<typeof resetMoviesModelState>>>();
  const resetMoviesModel = useCallback<typeof resetMoviesModelState>(
    () => dispatch(resetMoviesModelState()),
    [dispatch]
  );
  return {
    resetMoviesModel
  };
};
