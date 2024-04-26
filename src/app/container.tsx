"use client";
import { useEffect } from "react";

import { HeaderCom, SideBarCom } from "@/components";
import { useAuth, useHandleTheme } from "@/hook";

interface ContainerProps {
  children: React.ReactNode;
}
export const Container: React.FC<ContainerProps> = ({ children }) => {
  const { logInData } = useAuth();
  const { handleTheme } = useHandleTheme();

  useEffect(() => {
    const onHandleTheme = () => {
      let theme = localStorage.getItem("theme") || "light";
      handleTheme(theme);
    };

    onHandleTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return logInData ? (
    <div className="flex h-screen">
      <SideBarCom />
      <div className="flex-1 flex flex-col">
        <HeaderCom />
        {children}
      </div>
    </div>
  ) : (
    <div className="flex min-h-screen">{children}</div>
  );
};
