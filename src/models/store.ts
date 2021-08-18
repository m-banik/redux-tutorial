/* Niżej link do szczegółów nt poniższego. Polecał lekturę całej dokumentacji.
 https://redux.js.org/usage/configuring-your-store#integrating-the-devtools-extension
*/
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistedRootReducer } from './root.reducer';
import { rootSaga } from './root.saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

/* Bardzo przydatne narzędzie.
 https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
*/
export const store = createStore(
  persistedRootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
