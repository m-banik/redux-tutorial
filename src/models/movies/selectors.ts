/* Selektory to funkcje memonizujące dane. Ich wynik się nie zmieni
 i nie przekalkuluje, dopóki nie zmieni się ich zależność(lub stan).
 Mogą zwracać wiązkę stanu ze stosu lub inną danę obliczoną na jej
 bazie. W tym ostatnim przypadku często wykorzystuje się metodę
 tablicową `reduce`.
 https://github.com/reduxjs/reselect
 */
import { createSelector } from 'reselect';
import { StoreType } from '@Common/types';

const moviesModel = (state: StoreType) => state.moviesModel;

export const selectMoviesListDescription = createSelector(
  [moviesModel],
  (moviesModelState) => moviesModelState.description
);

export const selectMoviesList = createSelector(
  [moviesModel],
  (moviesModelState) => moviesModelState.list
);

export const selectMoviesListLength = createSelector(
  [selectMoviesList],
  (moviesList) => moviesList.length
);

export const selectIsMoviesListEmpty = createSelector(
  [selectMoviesListLength],
  (moviesListLength) => moviesListLength === 0
);

export const selectIfMovieOfGivenTitleIsAlreadyOnTheList = (
  movieTitle: string
) =>
  createSelector([selectMoviesList], (moviesList) => {
    return (
      moviesList.findIndex(
        ({ title }) => title.toLowerCase() === movieTitle.toLowerCase()
      ) >= 0
    );
  });

export const selectMoviesDataToBeDisplayed = createSelector(
  [moviesModel],
  (moviesModelState) => ({
    description: moviesModelState.description,
    list: moviesModelState.list.map((movie) => ({
      id: movie.id,
      title: movie.title
    }))
  })
);
