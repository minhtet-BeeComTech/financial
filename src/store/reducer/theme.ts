import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { baseApi, routes } from "../api";

export interface ThemeState {}

const initialState: ThemeState = {};

export const themeApi = baseApi
  .enhanceEndpoints({
    addTagTypes: ["Themes"],
  })
  .injectEndpoints({
    endpoints: (builder: any) => ({
    }),
  });

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state: any, action: PayloadAction<any>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const themeReducer = {
  themeSlice: themeSlice.reducer,
  setTheme: themeSlice.actions.setTheme,
};
