/* Funkcja pomocnicza, której zadaniem jest przeciwdziałanie zjawisku
 mutacji danych. Szczeglnie niepożądane w Redux'ie. Dawniej stosowało
 się na takie wypadki ImmutableJS, dziś triumfy święci Immer. Poniżej
 lekkie i proste autorskie rozwiązanie. Wada: wymusza kontrolę typu.
 https://www.npmjs.com/package/immutable
 https://www.npmjs.com/package/immer
 */
type CreateDeepCopyType = (input: unknown) => unknown;

export const createDeepCopy: CreateDeepCopyType = (input) => {
  const stringifiedInput: string = JSON.stringify(input);
  const parsedOutput: unknown = JSON.parse(stringifiedInput);
  return parsedOutput;
};
