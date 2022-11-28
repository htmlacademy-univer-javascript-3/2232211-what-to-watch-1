import { createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit';
import { Movie } from '../../types/movie';
import { api } from '../../services/api';
import { ApiRoutes } from '../../services/api-routes';

export const getMoviesAction = createAsyncThunk(
  'data/getMovies',
  async () => {
    const {data} = await api.get<Movie[]>(ApiRoutes.Movies);
    return data;
  },
);

const MOVIES_TO_VIEW_COUNT_STEP = 8;

type moviesInitialState = {
  movies: Movie[];
  moviesLoading: boolean;
  moviesLoadingError?: SerializedError;
  moviesToViewCount: number;
}

const initialState = {
  movies: [],
  moviesLoading: false,
  moviesLoadingError: undefined,
  moviesToViewCount: MOVIES_TO_VIEW_COUNT_STEP,
} as moviesInitialState;

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    showMoreMoviesToView: (state) => {
      state.moviesToViewCount += MOVIES_TO_VIEW_COUNT_STEP;
    },
    resetMoviesToViewCount: (state) => {
      state.moviesToViewCount = MOVIES_TO_VIEW_COUNT_STEP;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMoviesAction.pending, (state, _) => {
      state.moviesLoading = true;
    });
    builder.addCase(getMoviesAction.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.moviesLoading = false;
    });
    builder.addCase(getMoviesAction.rejected, (state, action) => {
      state.moviesLoadingError = action.error;
      state.moviesLoading = false;
    });
  },
});

const { actions, reducer } = moviesSlice;

export const {
  showMoreMoviesToView,
  resetMoviesToViewCount
} = actions;

export default reducer;
