/* Główny plik "wykonawczy" aplikacji. To tu dokonuje się
implementacja Reakta w HTML-u. */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './models/store';
import { App } from '@Components/index';

// Wrappery - od dołu, kontener z zapamiętanym stosem i stosem właściwym
ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('app-root')
);
