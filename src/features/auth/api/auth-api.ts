import { createAsyncThunk } from '@reduxjs/toolkit';
import { TServerResponse } from 'app/types/api';
import { apiBaseUrl } from 'app/utils/env';
import getServerErrorMessage from 'app/utils/getServerErrorMessage';
import axios, { AxiosResponse } from 'axios';

import { TUser } from '../types/user';

const axiosInstance = axios.create({
  baseURL: `${apiBaseUrl}/users`,
});

export const login = createAsyncThunk(
  'auth/login',
  async (data: Record<'email' | 'password', string>, thunkApi) => {
    try {
      const response: AxiosResponse<TServerResponse<TUser>> =
        await axiosInstance.post('/login', data);

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(getServerErrorMessage(error));
    }
  }
);

export const resetPasswordRequest = createAsyncThunk(
  'auth/reset-password',
  async (email: string, thunkApi) => {
    try {
      const response: AxiosResponse<TServerResponse<string>> =
        await axiosInstance.post('/reset-password', { email });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(getServerErrorMessage(error));
    }
  }
);

export const validatePasswordReset = createAsyncThunk(
  'auth/validate-reset-password',
  async (data: Record<'token' | 'password', string>, thunkApi) => {
    try {
      const response: AxiosResponse<TServerResponse<TUser>> =
        await axiosInstance.post('/validate-reset-password', data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(getServerErrorMessage(error));
    }
  }
);
