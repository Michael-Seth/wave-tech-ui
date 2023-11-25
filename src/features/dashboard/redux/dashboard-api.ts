import { createApi } from '@reduxjs/toolkit/query/react';
import { TServerResponse } from 'app/types/api';
import { apiBaseUrl } from 'app/utils/env';
import getBaseQueryWithLogout from 'app/utils/getBaseQuery';

import {
  TAnalysis,
  TDashboardLineChartData,
  TDashboardLineChartDTO,
} from '../types/dashboard';

export const dashboardApi = createApi({
  reducerPath: 'dashboardApi',
  baseQuery: getBaseQueryWithLogout(apiBaseUrl),
  endpoints: (build) => ({
    getOverview: build.query<TAnalysis, void>({
      query: () => '/admin/dashboard-overview-count',
      transformResponse: (res: TServerResponse<TAnalysis>) => res.data,
    }),

    getLineGraphData: build.query<
      TDashboardLineChartData,
      TDashboardLineChartDTO | undefined
    >({
      query: (params) => ({
        url: '/admin/graph-data',
        params,
      }),
      transformResponse: (res: TServerResponse<TDashboardLineChartData>) =>
        res.data,
    }),
  }),
});

export const {
  useGetOverviewQuery,
  useLazyGetOverviewQuery,
  useGetLineGraphDataQuery,
  useLazyGetLineGraphDataQuery,
} = dashboardApi;
