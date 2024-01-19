
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { GlobalStyle } from 'components/GlobalStyles';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
  <Provider store={store}>
    <GlobalStyle />
    <BrowserRouter basename='/car-rental'>
      <App />
    </BrowserRouter>
    </Provider>
    </React.StrictMode>
);
