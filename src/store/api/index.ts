import { createApi } from "@reduxjs/toolkit/query/react";
import {
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { Mutex } from "async-mutex";

import { configData } from "@/utils";

const baseUrl = configData.baseUrl;
const basicToken = configData.basicToken || process.env.BASIC_TOKEN;
const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: async (headers: any, { getState }: any) => {
    let state: any = getState();
    const token = state?.auth?.logInData?.accessToken;

    headers.set("Accept", "application/json");
    headers.set("Content-Type", "application/json");
    headers.set("Accept-Language", "en");

    if (!headers?.map?.authorization) {
      headers.set(
        "Authorization",
        token ? `Bearer ${token}` : `Basic ${basicToken}`
      );
    }

    return headers;
  },
  timeout: 40000,
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args: any, api: any, extraOptions: any) => {
  await mutex.waitForUnlock();
  let result: any = await baseQuery(args, api, extraOptions);

  if (result?.error?.data?.error === "Token expired") {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const state = api.getState();
        const token = state?.auth?.logInData?.accessToken;
        const refreshToken = state?.auth?.logInData?.refreshToken;

        fetch(`${baseUrl}/api/v1/auth/refreshtoken`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ token: refreshToken }),
        })
          .then(async (res) => {
            const data = await res.json();
            if (res.status === 200) {
              result = await baseQuery(args, api, extraOptions);
            } else {
              handleLogOut(api);
            }
          })
          .catch((err) => {
            console.log("err.message", err.message);
          });
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

const handleLogOut = (api: any) => {
  // route change
};

export const baseApi: any = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder: any) => ({}),
});

export * from "./Routes";
export * from "./HttpError";
