import { createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit';
import { api } from '../../services/api';
import { Movie } from '../../types/movie';
import { ApiRoutes, getSetFavoriteMovieLink } from '../../services/api-routes';
import { Namespace } from '../../constants';
import { toast } from 'react-toastify';

export const getFavoriteMoviesAction = createAsyncThunk(
  'data/getFavoriteMovies',
  async () => {
    const {data} = await api.get<Movie[]>(ApiRoutes.FavoriteMovies);
    return data;
  },
);

export const setFavoriteMovieAction = createAsyncThunk(
  'data/setFavoriteMovie',
  async ({ movieId, status }: { movieId: number, status: number }) => {
    const {data} = await api.post<Movie>(getSetFavoriteMovieLink(movieId.toString(), status.toString()));
    return data;
  },
);

type favoriteMoviesInitialState = {
  favoriteMovies?: Movie[];
  favoriteMoviesLoading: boolean;
  favoriteMoviesLoadingError?: SerializedError;
}

const initialState = {
  favoriteMoviesInitialState: undefined,
  favoriteMoviesLoading: false,
  favoriteMoviesLoadingError: undefined,
} as favoriteMoviesInitialState;

const favoriteMoviesSlice = createSlice({
  name: Namespace.FavoriteMovies,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFavoriteMoviesAction.pending, (state, _) => {
      state.favoriteMoviesLoading = true;
    });
    builder.addCase(getFavoriteMoviesAction.fulfilled, (state, action) => {
      state.favoriteMovies = action.payload;
      state.favoriteMoviesLoading = false;
    });
    builder.addCase(getFavoriteMoviesAction.rejected, (state, action) => {
      toast.error('Failed to get favorite movies');
      state.favoriteMoviesLoadingError = action.error;
      state.favoriteMoviesLoading = false;
    });
    builder.addCase(setFavoriteMovieAction.pending, (state, _) => {
      state.favoriteMoviesLoading = true;
    });
    builder.addCase(setFavoriteMovieAction.fulfilled, (state, action) => {
      if (!state.favoriteMovies) {
        state.favoriteMovies = action.payload.isFavorite ? [action.payload] : [];
      } else if (action.payload.isFavorite) {
        state.favoriteMovies.push(action.payload);
      } else {
        state.favoriteMovies = state.favoriteMovies.filter((m) => m.id !== action.payload.id);
      }
      state.favoriteMoviesLoading = false;
    });
    builder.addCase(setFavoriteMovieAction.rejected, (state, action) => {
      toast.error('Failed to set favorite movie');
      state.favoriteMoviesLoadingError = action.error;
      state.favoriteMoviesLoading = false;
    });
  }
});

export default favoriteMoviesSlice.reducer;
