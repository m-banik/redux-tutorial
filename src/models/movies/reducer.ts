/* Reducer/reduktor. Funkcja w konstrukcji switch'a, która przechowuje
 stan modelu - składową stosu/stanu globalnego. Akcja do niego trafia,
 a ten zmienia stan w rezultacie - albo nie. */
import * as moviesActionTypes from './types';
import { MoviesModelActionType } from './actions';
import { basic_data } from '@Common/samples';
import { MoviesModelStateType, ReducerType } from '@Common/types';

// Stan domyślny/początkowy
const INITIAL_STATE: MoviesModelStateType = basic_data;

/* Redux funkcjonuje trochę obok Reakta. W zasadzie nic o sobie nie wiedzą.
 Użytkownik odpala akcję(lub jakiś element logiki lokalnej komponentu, czego
 użytkownik nie jest nawet świadom), a ta trafia do reducer'a, który coś na
 jej bazie robi(w oparciu o jej stan i inną zawartość obiektu). Sagi to middleware,
 który wyłapuje te akcje zanim trafią do reducer'a. Pracując z Redux'em trzeba
 pamiętać o poniższych pryncypiach.
 https://redux.js.org/understanding/thinking-in-redux/three-principles
*/

// Reducer
export const reducer: ReducerType<MoviesModelStateType, MoviesModelActionType> =
  (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case moviesActionTypes.STORE_MOVIES:
        return {
          ...state,
          list: action.moviesToBeStored
        };
      case moviesActionTypes.CLEAR_MOVIES_LIST_SUCCESS:
        return {
          ...state,
          list: []
        };
      case moviesActionTypes.RESET_MOVIES_MODEL_STATE:
        return {
          ...INITIAL_STATE
        };
      default:
        return state;
    }
  };
