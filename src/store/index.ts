import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productSlice } from "./ProductSlice";
import { userSlice } from "./UserSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  versions: 1,
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  products: productSlice.reducer,
  user: userSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootStateProps = ReturnType<typeof store.getState>;
export type DispatchProps = typeof store.dispatch;
