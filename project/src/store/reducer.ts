import { createReducer } from '@reduxjs/toolkit';
import { AllGenresTab } from '../components/genre-list/genre-list';
import { moviesMock, promoMovieMock } from '../mocks/moviesMock';
import { changeActiveTab, setMovies, setPromoMovie, setReviews } from './action';
import { reviewsMock } from '../mocks/reviewsMock';

const initialState = {
  activeTab: AllGenresTab,
  movies: moviesMock,
  promoMovie: promoMovieMock,
  reviews: reviewsMock
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeActiveTab, (state, action) => {
      const { newTab } = action.payload;

      state.activeTab = newTab;
    })
    .addCase(setMovies, (state, action) => {
      const { movies } = action.payload;

      state.movies = movies;
    })
    .addCase(setPromoMovie, (state, action) => {
      const { promoMovie } = action.payload;

      state.promoMovie = promoMovie;
    })
    .addCase(setReviews, (state, action) => {
      const { reviews } = action.payload;

      state.reviews = reviews;
    });
});

export { reducer };
