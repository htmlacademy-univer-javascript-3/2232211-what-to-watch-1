import { createAction } from '@reduxjs/toolkit';
import { Movie } from '../types/movie';
import { ReviewProps } from '../components/review/review';

export const changeActiveTab = createAction<{ newTab: string }>('changeActiveTab');
export const setMovies = createAction<{ movies: Movie[] }>('setMoviesList');
export const setPromoMovie = createAction<{ promoMovie: Movie }>('setPromoMovie');
export const setReviews = createAction<{ reviews: ReviewProps[] }>('setReviews');
