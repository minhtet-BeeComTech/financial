import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { baseApi } from "../api";

export interface AuthState {
  logInData: any;
}

const initialState: AuthState = {
  logInData: {
    name: "Michaela",
  },
};

export const authApi = baseApi
  .enhanceEndpoints({
    addTagTypes: ["Auths"],
  })
  .injectEndpoints({
    endpoints: (builder: any) => ({}),
  });

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state: any, action: PayloadAction<any>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    logOut: () => initialState,
  },
});

export const authReducer = {
  authSlice: authSlice.reducer,
  setAuth: authSlice.actions.setAuth,
};
