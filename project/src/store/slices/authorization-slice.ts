import { createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit';
import { AuthorizationStatus, Namespace } from '../../constants';
import { api } from '../../services/api';
import { ApiRoutes } from '../../services/api-routes';
import { AuthData } from '../../types/auth-data';
import { dropToken, saveToken } from '../../services/token';
import { UserData } from '../../types/user-data';
import { toast } from 'react-toastify';

export const checkAuthAction = createAsyncThunk(
  'user/checkAuthStatus',
  async () => {
    await api.get(ApiRoutes.Login);
  }
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({email, password}: AuthData) => {
    const {data} = await api.post<UserData>(ApiRoutes.Login, {email, password});
    return data;
  }
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    await api.delete(ApiRoutes.Logout);
  }
);

type authorizationInitialState = {
  authorizationStatus: AuthorizationStatus;
  authorizationError?: SerializedError;
}

const initialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  authorizationError: undefined,
} as authorizationInitialState;

const authorizationSlice = createSlice({
  name: Namespace.Authorization,
  initialState,
  reducers: {
    clearAuthorizationError(state) {
      state.authorizationError = undefined;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(checkAuthAction.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
    });
    builder.addCase(checkAuthAction.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      saveToken(action.payload.token);
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.authorizationError = undefined;
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      toast('Failed to login');
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.authorizationError = action.error;
    });
    builder.addCase(logoutAction.fulfilled, (state, _) => {
      dropToken();
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    });
  }
});

export const { clearAuthorizationError } = authorizationSlice.actions;
export default authorizationSlice.reducer;
