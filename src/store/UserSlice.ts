import { createSlice } from "@reduxjs/toolkit";
import type { InitialStateProps } from "../types/AuthTypes.types";

const initialState: InitialStateProps = {
  currentUser: null,
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { loginFailure, loginStart, loginSuccess, logout } =
  userSlice.actions;
