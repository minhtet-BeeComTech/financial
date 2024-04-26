"use client";
import { useCallback } from "react";

import { useAuth } from "../common";

export const useHandleAuth = (props?: any) => {
  const { authReducer, dispatch, ...extraProps } = useAuth();

  const handleSetAuth = useCallback(
    (data: any) => {
      dispatch(authReducer.setAuth(data));
    },
    [dispatch, authReducer]
  );

  return {
    handleSetAuth,
  };
};
