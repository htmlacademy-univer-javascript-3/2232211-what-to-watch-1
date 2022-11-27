import { createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit';
import { api } from '../../services/api';
import { getCommentsLink } from '../../services/api-routes';
import { ReviewProps } from '../../components/review/review';

export const getReviewsAction = createAsyncThunk(
  'data/reviews',
  async (movieId: string) => {
    const {data} = await api.get<ReviewProps[]>(getCommentsLink(movieId));
    return data;
  },
);

type reviewsInitialState = {
  reviews: ReviewProps[];
  reviewsLoading: boolean;
  reviewsLoadingError?: SerializedError;
}

const initialState = {
  reviews: [],
  reviewsLoading: false,
  reviewsLoadingError: undefined,
} as reviewsInitialState;

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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

export default reviewsSlice.reducer;
