import { createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit';
import { api } from '../../services/api';
import { Movie } from '../../types/movie';
import { getCommentsLink, getMovieLink, getSimilarMoviesLink } from '../../services/api-routes';
import { ReviewProps } from '../../components/review/review';
import { Namespace } from '../../constants';
import { useNavigate } from 'react-router-dom';
import { PageLink } from '../../utils/links';
import { toast } from 'react-toastify';

export const getMovieAction = createAsyncThunk(
  'data/getMovie',
  async (movieId: string) => {
    const {data} = await api.get<Movie>(getMovieLink(movieId));
    return data;
  },
);

export const updateMovieWithoutLoadingAction = createAsyncThunk(
  'data/updateMovieWithoutLoading',
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
      toast.error(`Failed to get movie with id ${action.meta.arg}`);
      state.movieLoadingError = action.error;
      state.movieLoading = false;
      useNavigate()(PageLink.NotFound);
    });

    builder.addCase(getSimilarMoviesAction.pending, (state, _) => {
      state.similarMoviesLoading = true;
    });
    builder.addCase(getSimilarMoviesAction.fulfilled, (state, action) => {
      state.similarMovies = action.payload;
      state.similarMoviesLoading = false;
    });
    builder.addCase(getSimilarMoviesAction.rejected, (state, action) => {
      toast.error(`Failed to get similar movies for movie with id ${action.meta.arg}`);
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
      toast.error(`Failed to get reviews movies for movie with id ${action.meta.arg}`);
      state.reviewsLoadingError = action.error;
      state.reviewsLoading = false;
    });

    builder.addCase(updateMovieWithoutLoadingAction.fulfilled, (state, action) => {
      state.movie = action.payload;
    });
    builder.addCase(updateMovieWithoutLoadingAction.rejected, (state, action) => {
      toast.error(`Failed to update movie with id ${action.meta.arg}`);
      state.movieLoadingError = action.error;
    });
  }
});

export default movieSlice.reducer;
