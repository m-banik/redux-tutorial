// Konfiguracja stosu - obiektu z modelami danych
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer as moviesReducer } from './movies/reducer';
import { StoreType } from '@Common/types';

const persistConfig = {
  key: 'root',
  storage
};

// Typ stosu definiuje strukturę
const rootReducer = combineReducers<StoreType>({
  moviesModel: moviesReducer
});

// Stos zapamiętany - zapisany w `localStorage` przeglądarki
export const persistedRootReducer = persistReducer(persistConfig, rootReducer);
