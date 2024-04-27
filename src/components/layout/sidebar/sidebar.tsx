"use client";
import { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  BsGrid,
  BsWallet,
  BsArrowLeftRight,
  BsDatabase,
  BsGraphUpArrow,
  BsPersonCircle,
  BsChat,
  BsGear,
  BsArrowBarRight,
} from "react-icons/bs";
import { AiOutlineDollar } from "react-icons/ai";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

import { useHandleTheme } from "@/hook";

export const navData = [
  {
    title: "section one",
    data: [
      {
        name: "Dashboard",
        icon: <BsGrid className="text-typo" />,
        path: "/",
      },
      {
        name: "Wallet",
        icon: <BsWallet className="text-typo" />,
        path: "/service/wallet",
      },
      {
        name: "Transactions",
        icon: <BsArrowLeftRight className="text-typo" />,
        count: 1,
        path: "/service/transactions",
      },
      {
        name: "Cashback",
        icon: <BsDatabase className="text-typo" />,
        count: 4,
        path: "/service/cashback",
      },
      {
        name: "Payments",
        icon: <AiOutlineDollar className="text-typo" />,
        path: "/service/payments",
      },
      {
        name: "Investment",
        icon: <BsGraphUpArrow className="text-typo" />,
        path: "/service/investment",
      },
      {
        name: "Profile",
        icon: <BsPersonCircle className="text-typo" />,
        path: "/account/profile",
      },
      {
        name: "Support",
        icon: <BsChat className="text-typo" />,
        path: "/system/support",
      },
    ],
  },
  {
    title: "section two",
    data: [
      {
        name: "Settings",
        icon: <BsGear className="text-typo" />,
        path: "/system/settings",
      },
      {
        name: "Logout",
        icon: <BsArrowBarRight className="text-typo" />,
        path: "/logout",
      },
    ],
  },
];

export const SideBarCom = () => {
  const pathName = usePathname();
  const router = useRouter();
  const { handleTheme, theme } = useHandleTheme();

  const handleRouteChange = useCallback(
    (path: string) => {
      router.push(path);
    },
    [router]
  );

  const handleLogOut = () => {};

  return (
    <div className="bg-sidebar h-screen overflow-y-auto w-1/6 hidden lg:block">
      <div
        onClick={() => handleRouteChange("/")}
        className="flex flex-row items-center gap-x-2 p-[20px] cursor-pointer"
      >
        <div className="w-[47px] h-[47px] rounded-[47px] overflow-hidden">
          <Image
            src={require("../../../../public/googlewallet.png")}
            className="w-full h-[47px] object-cover"
            layout="responsive"
            width={47}
            height={47}
            alt="Avatar"
            priority
          />
        </div>
        <h1 className="text-typo font-bold text-lg">Wallet</h1>
      </div>
      <nav>
        {navData.map((item, index) => {
          return (
            <ul
              key={index}
              className="border-b border-border mb-[25px] pb-[25px] last:border-b-0"
            >
              {item.data.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`${
                      pathName === item.path ? "bg-active-gradient" : ""
                    } hover:text-hover`}
                  >
                    {item.path === "/logout" ? (
                      <div
                        onClick={handleLogOut}
                        className="flex items-center gap-x-2 cursor-pointer py-[10px] px-[20px]"
                      >
                        <div>{item.icon}</div>
                        <span className="text-typo label">{item.name}</span>
                      </div>
                    ) : (
                      <Link
                        href={item.path}
                        className="flex items-center gap-x-2 py-[10px] px-[20px]"
                      >
                        <div>{item.icon}</div>
                        <div className="flex w-full items-center justify-between">
                          <div className="flex">
                            <span className="text-typo label">{item.name}</span>
                          </div>
                          {item.count && (
                            <div className="flex items-start justify-center bg-[#9699F3] min-w-[18px] h-[18px] rounded-[18px]">
                              <span className="text-white text-[12px] text-center">
                                {item.count}
                              </span>
                            </div>
                          )}
                        </div>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          );
        })}
      </nav>
      <div className="absolute bottom-0 bg-sidebar z-10 w-[16%]">
        <div
          className="cursor-pointer py-[20px] px-[20px] pl-[45px] relative theme-text-hover"
          onClick={() => handleTheme(theme === "dark" ? "light" : "dark")}
        >
          <MdOutlineDarkMode
            className={`text-typo text-[18px] transition-transform duration-500 ease-in-out absolute top-[22px] left-[20px] ${
              theme === "dark"
                ? "transform rotate-0 opacity-100"
                : "opacity-0 rotate-90"
            }`}
          />
          <MdOutlineLightMode
            className={`text-typo text-[18px] transition-transform duration-500 ease-in-out absolute top-[22px] left-[20px] ${
              theme === "light"
                ? "transform rotate-90 opacity-100"
                : "opacity-0"
            }`}
          />
          <span className="text-typo label">
            Switch to {theme === "dark" ? "light" : "dark"}
          </span>
        </div>
      </div>
    </div>
  );
};
