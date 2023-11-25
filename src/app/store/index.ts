import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from 'features/auth/redux/auth-slice';
import { dashboardApi } from 'features/dashboard/redux/dashboard-api';

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createFilter from 'redux-persist-transform-filter';

export const configureStoreWithMiddleware = (initialState = {}) => {
  const loadSubsetFilter = createFilter('auth', ['userDetails', 'token']);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const persistConfig: any = {
    key: 'root',
    storage,
    whitelist: ['auth'],
    transforms: [loadSubsetFilter],
  };

  const rootReducer = combineReducers({
    auth: authReducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
  });
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat([
        dashboardApi.middleware,
      ]),
    preloadedState: initialState,
    devTools: import.meta.env.DEV,
  });

  const persistor = persistStore(store);
  return { store, persistor };
};

export const { persistor, store } = configureStoreWithMiddleware({});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
