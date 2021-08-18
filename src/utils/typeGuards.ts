/* Type guards, inaczej strażnicy typu. Jako funkcje znajdują się w `utils`, ale nie uważam za
 niepoprawne trzymanie ich w `common` - są ściśle związane z typami. Więcej o tym, czym są TG:
 https://www.typescriptlang.org/docs/handbook/advanced-types.html
*/
import { ErrorsEnum } from '@Common/enums';
import * as types from '@Common/types';

// Stary sposób pisania TG. Zaletą jest brak konieczności obsługi błędu.
export const checkIfIsOfMovieObjectType = (
  input: unknown
): input is types.MovieObjectType => {
  const instance = input as types.MovieObjectType;
  return (
    instance instanceof Object &&
    typeof instance.id === 'string' &&
    typeof instance.title === 'string' &&
    (typeof instance.director === 'string' ||
      instance.director === undefined) &&
    (typeof instance.premiere_date === 'number' ||
      instance.premiere_date === undefined)
  );
};

// Przykład dla tablicy elementów o zdefiniowanym złożonym typie.
export const checkIfAreOfMovieObjectType = (
  input: unknown
): input is types.MovieObjectType[] => {
  const instance = input as types.MovieObjectType[];
  return (
    instance instanceof Array &&
    instance.every((element) => checkIfIsOfMovieObjectType(element))
  );
};

// Asercja - weszła do użytku z którąś z nowszych edycji TS.
export function assertIfIsOfCurioObjectType(
  input: unknown,
  errorMessage?: string
): asserts input is types.CurioObjectType {
  const instance = input as types.CurioObjectType;
  if (
    !(
      instance instanceof Object &&
      typeof instance.text === 'string' &&
      typeof instance.number === 'number' &&
      typeof instance.found === 'boolean' &&
      instance.type === 'trivia'
    )
  ) {
    throw new Error(errorMessage || ErrorsEnum.type);
  }
}

// Przykład asercj dla tablicy.
export function assertIfAreOfCurioObjectType(
  input: unknown,
  error?: string
): asserts input is types.CurioObjectType[] {
  const instance = input as types.CurioObjectType[];
  if (!(instance instanceof Array)) {
    throw Error(error || ErrorsEnum.type);
  }
  instance.every((element) => assertIfIsOfCurioObjectType(element, error));
}

/* Uwaga: otypowane powinno być wszystko co się da. Nie lubimy typu `any`. Jeśli już, korzystamy
 z `unknown`.Chcemy mieść kontrolę nad data flow. Każdy zdefiniowany typ powinien mieć swojego
 strażnika. Powyżej znajdują się jedynie przykłady dla poszczególnych technik wykorzystywane w
 tej aplikacji. */
