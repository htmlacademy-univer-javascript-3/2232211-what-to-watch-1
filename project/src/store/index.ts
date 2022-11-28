import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/api';
import moviesSlice from './slices/movies-slice';
import promoMovieSlice from './slices/promo-movie-slice';
import activeTabSlice from './slices/active-tab-slice';
import reviewsSlice from './slices/reviews-slice';

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    promoMovie: promoMovieSlice,
    activeTab: activeTabSlice,
    reviews: reviewsSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }),
});
