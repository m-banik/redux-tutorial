/* Typowa funkcja pomocnicza, z myślą o jakich tworzy się ten folder.
 Bierze dwie listy zdefiniowanej zawartości i wykonuje na nich operacje.
 Dobiera unikatowy element drugiej z nich i dokłada do pierwszej. */
import { MovieObjectType } from '@Common/types';

export const getRandomMovie = (
  originalMovies: MovieObjectType[],
  extraMovies: MovieObjectType[]
): MovieObjectType => {
  const randomIndex = Math.floor(Math.random() * extraMovies.length);
  const isAlreadyPresentInTheList =
    originalMovies.findIndex(({ id }) => id === extraMovies[randomIndex].id) >=
    0;
  if (isAlreadyPresentInTheList) {
    return getRandomMovie(originalMovies, extraMovies);
  }
  return extraMovies[randomIndex];
};
