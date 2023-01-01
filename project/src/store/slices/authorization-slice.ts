import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, Namespace } from '../../constants';
import { api } from '../../services/api';
import { ApiRoutes } from '../../services/api-routes';
import { AuthData } from '../../types/auth-data';
import { dropToken, saveToken } from '../../services/token';
import { UserData } from '../../types/user-data';

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

const authorizationSlice = createSlice({
  name: Namespace.Authorization,
  initialState: {
    authorizationStatus: AuthorizationStatus.Unknown
  },
  reducers: {},
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
    });
    builder.addCase(loginAction.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    });
    builder.addCase(logoutAction.fulfilled, (state, _) => {
      dropToken();
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    });
  }
});

export default authorizationSlice.reducer;
