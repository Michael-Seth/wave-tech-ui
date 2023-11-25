import { createApi } from '@reduxjs/toolkit/query/react';
import getBaseQueryWithLogout from 'app/utils/getBaseQuery';

type TTopoJson = {
  type: string;
  objects: {
    world: {
      type: string;
      geometries: (
        | {
            type: string;
            arcs: number[][];
            id: string;
            properties: {
              name: string;
            };
          }
        | {
            type: string;
            arcs: number[][][];
            id: string;
            properties: {
              name: string;
            };
          }
      )[];
    };
  };
  arcs: number[][][];
  bbox: number[];
};

export const topoJsonApi = createApi({
  reducerPath: 'topoJsonApi',
  baseQuery: getBaseQueryWithLogout(''),
  endpoints: (build) => ({
    getTopoJson: build.query<TTopoJson, void>({
      query: () => '/topojson.json',
    }),
  }),
});

export const { useGetTopoJsonQuery, useLazyGetTopoJsonQuery } = topoJsonApi;
