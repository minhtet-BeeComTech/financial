"use client";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "@/store";
import { useTheme } from "@/hook";

export const Providers = ({ children }: any) => {
  const { handleTheme } = useTheme();

  useEffect(() => {
    const onHandleTheme = () => {
      let theme = localStorage.getItem("theme") || "light";
      handleTheme(theme);
    };

    onHandleTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="relative">{children}</div>
      </PersistGate>
    </Provider>
  );
};
