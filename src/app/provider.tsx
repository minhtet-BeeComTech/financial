"use client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "@/store";
import { Container } from "./container";

interface ProviderProps {
  children: React.ReactNode;
}
export const Providers: React.FC<ProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Container>{children}</Container>
      </PersistGate>
    </Provider>
  );
};
