import { createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit';
import { api } from '../../services/api';
import { Movie } from '../../types/movie';
import { getCommentsLink, getMovieLink, getSimilarMoviesLink } from '../../services/api-routes';
import { ReviewProps } from '../../components/review/review';
import { Namespace } from '../../constants';

export const getMovieAction = createAsyncThunk(
  'data/getMovie',
  async (movieId: string) => {
    const {data} = await api.get<Movie>(getMovieLink(movieId));
    return data;
  },
);

export const getSimilarMoviesAction = createAsyncThunk(
  'data/getSimilarMovies',
  async (movieId: string) => {
    const {data} = await api.get<Movie[]>(getSimilarMoviesLink(movieId));
    return data;
  },
);

export const getReviewsAction = createAsyncThunk(
  'data/reviews',
  async (movieId: string) => {
    const {data} = await api.get<ReviewProps[]>(getCommentsLink(movieId));
    return data;
  },
);

type movieInitialState = {
  movie?: Movie;
  movieLoading: boolean;
  movieLoadingError?: SerializedError;

  similarMovies: Movie[];
  similarMoviesLoading: boolean;
  similarMoviesLoadingError?: SerializedError;

  reviews: ReviewProps[];
  reviewsLoading: boolean;
  reviewsLoadingError?: SerializedError;
}

const initialState = {
  movie: undefined,
  movieLoading: false,
  movieLoadingError: undefined,

  similarMovies: [],
  similarMoviesLoading: false,
  similarMoviesLoadingError: undefined,

  reviews: [],
  reviewsLoading: false,
  reviewsLoadingError: undefined,
} as movieInitialState;

const movieSlice = createSlice({
  name: Namespace.Movie,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovieAction.pending, (state, _) => {
      state.movieLoading = true;
    });
    builder.addCase(getMovieAction.fulfilled, (state, action) => {
      state.movie = action.payload;
      state.movieLoading = false;
    });
    builder.addCase(getMovieAction.rejected, (state, action) => {
      state.movieLoadingError = action.error;
      state.movieLoading = false;
    });

    builder.addCase(getSimilarMoviesAction.pending, (state, _) => {
      state.similarMoviesLoading = true;
    });
    builder.addCase(getSimilarMoviesAction.fulfilled, (state, action) => {
      state.similarMovies = action.payload;
      state.similarMoviesLoading = false;
    });
    builder.addCase(getSimilarMoviesAction.rejected, (state, action) => {
      state.similarMoviesLoadingError = action.error;
      state.similarMoviesLoading = false;
    });

    builder.addCase(getReviewsAction.pending, (state, _) => {
      state.reviewsLoading = true;
    });
    builder.addCase(getReviewsAction.fulfilled, (state, action) => {
      state.reviews = action.payload;
      state.reviewsLoading = false;
    });
    builder.addCase(getReviewsAction.rejected, (state, action) => {
      state.reviewsLoadingError = action.error;
      state.reviewsLoading = false;
    });
  }
});

export default movieSlice.reducer;
