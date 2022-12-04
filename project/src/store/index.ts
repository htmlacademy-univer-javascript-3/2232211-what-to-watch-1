import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/api';
import moviesSlice from './slices/movies-slice';
import promoMovieSlice from './slices/promo-movie-slice';
import activeTabSlice from './slices/active-tab-slice';
import authorizationSlice from './slices/authorization-slice';
import movieSlice from './slices/movie-slice';

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    promoMovie: promoMovieSlice,
    activeTab: activeTabSlice,
    movie: movieSlice,
    authorization: authorizationSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }),
});
