/* Może to nie jest najbardziej fortunna nazwa dla pliku.
 Trzymamy tu obiekty i enum'y szczególnego przeznaczenia
 - do obsługi API. Endpoint'y, metody i nagłówki dla fetch'a.
 Uwaga: Do rozważenia jest pomysł o wydzieleniu dedykowanej
 klasy w charakterze serwisu do obsługi przedmiotowej logiki. */
export enum EndpointsEnum {
  FETCH_RANDOM_CURIO = 'http://numbersapi.com/random/trivia?json'
}

export enum MethodsEnum {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE'
}

/* Dla uproszczenia nie używam w tym programie nagłówków, ale
 poniższy format sprawdza się w innych aplikacjach. */
export const headers = {
  json: {
    'Content-Type': 'application/json'
  },
  form: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  auth: (token: string, form?: boolean) => {
    const basicHeader = { Authorization: `Bearer ${token}` };
    if (form) {
      return basicHeader;
    }
    return { ...headers.json, ...basicHeader };
  }
};
