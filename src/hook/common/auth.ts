"use client";
import { useSelector, useDispatch } from "react-redux";

import { authReducer } from "@/store";

export const useAuth = (props?: any) => {
  const auth = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  return {
    ...auth,
    authReducer,
    dispatch,
    useSelector,
  };
};
