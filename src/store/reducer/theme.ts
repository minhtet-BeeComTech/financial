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
      createTheme: builder.mutation({
        query: (body: any) => {
          let { url, method } = routes.createTheme;
          return {
            url,
            method,
            body,
          };
        },
        async onQueryStarted(args: any, { dispatch, queryFulfilled }: any) {
          try {
            // const { data } = await queryFulfilled;
            // console.log("createTheme data", data);
          } catch (err) {}
        },
        invalidatesTags: ["Themes"],
      }),
      getThemes: builder.query({
        query: ({ page = 1, limit = 10 }: any) => {
          let { url, method } = routes.getThemes;
          return { url: `${url}?page=${page}&limit=${limit}`, method };
        },
        async onQueryStarted(args: any, { dispatch, queryFulfilled }: any) {
          try {
          } catch (err) {}
        },
        providesTags: ["Themes"],
      }),
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
