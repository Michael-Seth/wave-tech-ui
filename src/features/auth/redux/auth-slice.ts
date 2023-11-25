import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  login,
  resetPasswordRequest,
  validatePasswordReset,
} from '../api/auth-api';
import { TUser } from '../types/user';

type TAuthState = {
  userDetails?: TUser;
  token?: string;
  status: 'idle' | 'pending';
  error: string;
  successMsg?: string;
  resetRequestSuccess?: boolean;
  passwordResetSuccess?: boolean;
};

const createAuthSlice = (initialState: TAuthState) =>
  createSlice({
    name: 'auth',
    initialState,
    reducers: {
      closeModal: (state) => {
        state.resetRequestSuccess = false;
      },
      startTask: (state) => {
        state.status = 'pending';
      },
      endTask: (state) => {
        state.status = 'idle';
      },
      onError(state, { payload }: PayloadAction<string>) {
        state.error = payload;
      },
      signOut(state) {
        delete state.token;
        delete state.userDetails;
        state.error = '';
        state.status = 'idle';
      },
      setUser(state, { payload }: PayloadAction<TUser>) {
        state.userDetails = payload;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(login.fulfilled, (state, { payload }) => {
          state.status = 'idle';
          state.error = '';
          state.token = payload.data.token;
          state.userDetails = payload.data;
          delete state.successMsg;
          delete state.passwordResetSuccess;
        })
        .addCase(login.rejected, (state, { payload }) => {
          state.status = 'idle';
          state.error = payload as string;
          delete state.successMsg;
        })
        .addCase(resetPasswordRequest.fulfilled, (state) => {
          state.status = 'idle';
          state.error = '';
          state.resetRequestSuccess = true;
        })
        .addCase(resetPasswordRequest.rejected, (state, { payload }) => {
          state.status = 'idle';
          state.error = payload as string;
          state.resetRequestSuccess = false;
          delete state.successMsg;
        })
        .addCase(validatePasswordReset.fulfilled, (state) => {
          state.status = 'idle';
          state.error = '';
          state.passwordResetSuccess = true;
          state.resetRequestSuccess = false;
          state.successMsg = 'Password reset successful. Please login.';
        })
        .addCase(validatePasswordReset.rejected, (state, { payload }) => {
          state.status = 'idle';
          state.error = payload as string;
          state.passwordResetSuccess = false;
          delete state.successMsg;
        });
    },
  });

const authSlice = createAuthSlice({
  error: '',
  status: 'idle',
  token: '',
});

export const { startTask, endTask, onError, signOut, closeModal, setUser } =
  authSlice.actions;

export default authSlice.reducer;
