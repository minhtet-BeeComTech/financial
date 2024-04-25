"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

import { useTheme } from "@/hook";

const sidebardata = [
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
  const { handleTheme, theme } = useTheme();

  return (
    <div className="bg-sidebar h-screen overflow-y-auto w-1/6 hidden lg:block">
      <div className="p-[20px] py-[24px]">
        <h1 className="text-typo font-bold">Wallet</h1>
      </div>
      <div>
        {sidebardata.map((item, index) => {
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
                    }`}
                  >
                    {item.path === "/logout" ? (
                      <div className="flex items-center gap-x-2 cursor-pointer py-[10px] px-[20px]">
                        <div>{item.icon}</div>
                        <span className="text-typo">{item.name}</span>
                      </div>
                    ) : (
                      <Link
                        href={item.path}
                        className="flex items-center gap-x-2 py-[10px] px-[20px]"
                      >
                        <div>{item.icon}</div>
                        <div className="flex w-full items-center justify-between">
                          <div className="flex">
                            <span className="text-typo">{item.name}</span>
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
      </div>
      <div
        className="cursor-pointer py-[10px] px-[20px]"
        onClick={() => handleTheme(theme === "dark" ? "light" : "dark")}
      >
        <span className="text-typo">Switch to {theme === "dark" ? "light" : "dark"}</span>
      </div>
    </div>
  );
};
