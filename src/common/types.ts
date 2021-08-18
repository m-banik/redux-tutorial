/* Typy w rozumieniu TS. Docelowo trzymamy tutaj wszystkie reużywalne, ale są wyjątki.
 Jeżeli potrzebujemy istniejącego typu, powinniśmy najpierw szukać go tutaj. Stworzyć?
 To dobre miejsce dla niego. Uwaga: pierwsza linia generuje ostrzeżenia w konsoli przy
 buildzie i uruchomieniu deweloperskiego serwera, ale to błąd ze strony podmiotów
 zewnętrznych. Nie przejmowałbym się tym. */
export { Reducer as ReducerType, Dispatch as DispatchType } from 'redux';

/* Odrębny typ dla string'a, bo ID'ki mogą też być np. number'ami. Jeżeli to się zmieni,
 wystarczy podmiana w jednym miejscu. */
export type IdType = string;

export type MovieObjectType = {
  id: IdType;
  title: string;
  director?: string;
  premiere_date?: number;
};

export type CurioObjectType = {
  text: string;
  number: number;
  found: boolean;
  type: 'trivia';
};

export type MoviesModelStateType = {
  description: string;
  list: MovieObjectType[];
};

export type StoreType = {
  moviesModel: MoviesModelStateType;
};
