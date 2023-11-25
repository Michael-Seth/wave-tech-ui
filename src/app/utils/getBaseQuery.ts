/* eslint-disable @typescript-eslint/indent */
import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { RootState } from 'app/store';
import { signOut } from 'features/auth/redux/auth-slice';
import { toast } from 'react-toastify';

const getBaseQueryWithLogout = (baseUrl: string) => {
  const baseQuery = fetchBaseQuery({
    baseUrl,
    prepareHeaders(headers, { getState }) {
      const state = getState() as RootState;

      if (state.auth && state.auth.token) {
        headers.set('Authorization', `Bearer ${state.auth.token}`);
      }
      return headers;
    },
  });

  const baseQueryWithLogout: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
  > = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
      toast('Your session expired!', {
        type: 'error',
        toastId: 'session-expired',
      });
      api.dispatch(signOut());
    }
    return result;
  };

  return baseQueryWithLogout;
};

export default getBaseQueryWithLogout;
