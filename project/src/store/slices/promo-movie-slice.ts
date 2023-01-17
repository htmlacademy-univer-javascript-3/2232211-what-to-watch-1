import { createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit';
import { Movie } from '../../types/movie';
import { ApiRoutes } from '../../services/api-routes';
import { API } from '../../services/api';
import { Namespace } from '../../constants';
import { toast } from 'react-toastify';

export const getPromoMovieAction = createAsyncThunk(
  'data/getPromoMovie',
  async () => {
    const {data} = await API.get<Movie>(ApiRoutes.Promo);
    return data;
  },
);

export const updatePromoMovieWithoutLoadingAction = createAsyncThunk(
  'data/updatePromoMovieWithoutLoading',
  async () => {
    const {data} = await API.get<Movie>(ApiRoutes.Promo);
    return data;
  },
);

type promoMovieInitialState = {
  promoMovie?: Movie;
  promoMovieLoading: boolean;
  promoMovieLoadingError?: SerializedError;
}

const initialState = {
  promoMovie: undefined,
  promoMovieLoading: false,
  promoMovieLoadingError: undefined,
} as promoMovieInitialState;

const promoMovieSlice = createSlice({
  name: Namespace.PromoMovie,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPromoMovieAction.pending, (state, _) => {
      state.promoMovieLoading = true;
    });
    builder.addCase(getPromoMovieAction.fulfilled, (state, action) => {
      state.promoMovie = action.payload;
      state.promoMovieLoading = false;
    });
    builder.addCase(getPromoMovieAction.rejected, (state, action) => {
      toast.error('Failed to get promo movie');
      state.promoMovieLoadingError = action.error;
      state.promoMovieLoading = false;
    });
    builder.addCase(updatePromoMovieWithoutLoadingAction.fulfilled, (state, action) => {
      state.promoMovie = action.payload;
    });
    builder.addCase(updatePromoMovieWithoutLoadingAction.rejected, (state, action) => {
      toast.error('Failed to update promo movie');
      state.promoMovieLoadingError = action.error;
    });
  }
});

export default promoMovieSlice.reducer;
