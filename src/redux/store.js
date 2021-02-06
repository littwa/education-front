import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import authReducers from "./auth/authReducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const userPersistConfig = {
  key: "tokens",
  storage,
  // whitelist: ["accessToken"],
};

export const store = configureStore({
  reducer: {
    users: authReducers.allUsers,
    loading: authReducers.isLoading,
    user: authReducers.user,
    tokens: persistReducer(userPersistConfig, authReducers.tokens),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

// const store = configureStore({
//   reducer: { app, auth: persistReducer(authPersistConfig, auth) },
//   middleware: getDefaultMiddleware({
//    serializableCheck: {
//     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
//    }
//   })
//  });
