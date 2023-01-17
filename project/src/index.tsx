import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { STORE } from './store';
import { getMoviesAction } from './store/slices/movies-slice';
import { getPromoMovieAction } from './store/slices/promo-movie-slice';
import { checkAuthAction } from './store/slices/authorization-slice';

STORE.dispatch(checkAuthAction());

STORE.dispatch(getPromoMovieAction());
STORE.dispatch(getMoviesAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={STORE}>
      <App />
    </Provider>
  </React.StrictMode>,
);
