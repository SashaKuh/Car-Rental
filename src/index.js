import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { GlobalStyle } from 'components/GlobalStyles';

const root = document.getElementById('root');

createRoot(root).render(
  <Provider store={store}>
    <BrowserRouter basename='/car-rental'>
      <GlobalStyle/>
      <App />
    </BrowserRouter>
  </Provider>
);
