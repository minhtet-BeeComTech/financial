"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import {
  BsArrowLeftRight,
  BsCarFront,
  BsBag,
  BsDatabase,
  BsArrowUpRight,
  BsArrowDownRight,
  BsHouse,
  BsCamera
} from "react-icons/bs";
import { SiTesla } from "react-icons/si";
import {
  AiFillApple,
  AiOutlineAmazon,
  AiOutlineRight,
  AiOutlineDown,
} from "react-icons/ai";
import { RiNetflixFill } from "react-icons/ri";
import { PiAirplaneTilt } from "react-icons/pi";

import { StackedAreaChartCom, BarChartCom, PieChartCom } from "@/components";
import { moneyFormat } from "@/utils";

let transactions = [
  {
    name: "Alex T.",
    desc: "Transfers",
    cardType: "Debit card",
    amount: 3000,
    income: true,
    serviceType: "transfer",
  },
  {
    name: "Uber",
    desc: "Taxi",
    cardType: "Debit card",
    amount: 19.84,
    income: false,
    serviceType: "uber",
  },
  {
    name: "Metro",
    desc: "Supermarkets",
    cardType: "Debit card",
    amount: 85.29,
    income: false,
    serviceType: "supermarket",
  },
  {
    name: "Cashback",
    desc: "Rewards",
    cardType: "Debit card",
    amount: 4.5,
    income: true,
    serviceType: "reward",
  },
];
let investment = [
  {
    name: "AAPL",
    desc: "Apple",
    cardType: "Debit card",
    amount: 3204.05,
    income: 92.59,
    percent: 2.89,
    code: "apple",
  },
  {
    name: "TSLA",
    desc: "Tesla",
    cardType: "Debit card",
    amount: 8547.82,
    outcome: 111.98,
    percent: 1.31,
    code: "tesla",
  },
  {
    name: "NFLX",
    desc: "Netflix",
    cardType: "Debit card",
    amount: 1210,
    outcome: 7.02,
    percent: 0.58,
    code: "netflix",
  },
  {
    name: "AMZN",
    desc: "Amazon",
    cardType: "Debit card",
    amount: 14367.75,
    income: 206.89,
    percent: 1.44,
    code: "amazon",
  },
];
let quicktransfer = [
  {
    name: "Alexander Abramson",
    accNo: "**** 1676",
  },
  {
    name: "Julia Davidson",
    accNo: "**** 1676",
  },
  {
    name: "Andrew Evans",
    accNo: "**** 1676",
  },
];
let goals = [
  {
    name: "Trip",
    code: "trip",
    total: 20000,
  },
  {
    name: "House",
    code: "house",
    total: 18000,
  },
  {
    name: "Camera",
    code: "camera",
    total: 4650,
  },
];

export const Transactions = React.memo(
  ({ transactions }: { transactions?: any }) => {
    const handleIcon = (serviceType: string) => {
      switch (serviceType) {
        case "transfer":
          return (
            <div className="flex flex-row items-center justify-center w-[30px] h-[30px] rounded-[30px] bg-active-gradient p-2">
              <BsArrowLeftRight className="text-typo-400" />
            </div>
          );
        case "uber":
          return (
            <div className="flex flex-row items-center justify-center w-[30px] h-[30px] rounded-[30px] bg-active-gradient p-2">
              <BsCarFront className="text-typo-400" />
            </div>
          );
        case "supermarket":
          return (
            <div className="flex flex-row items-center justify-center w-[30px] h-[30px] rounded-[30px] bg-active-gradient p-2">
              <BsBag className="text-typo-400" />
            </div>
          );
        case "reward":
          return (
            <div className="flex flex-row items-center justify-center w-[30px] h-[30px] rounded-[30px] bg-active-gradient p-2">
              <BsDatabase className="text-typo-400" />
            </div>
          );

        default:
          return (
            <div className="flex flex-row items-center justify-center w-[30px] h-[30px] rounded-[30px] bg-active-gradient p-2">
              <BsArrowLeftRight className="text-typo-400" />
            </div>
          );
      }
    };

    const transactionList = useMemo(
      () =>
        transactions.map((item: any, index: number) => (
          <li
            key={index}
            className="cursor-pointer border-b border-border last:border-b-0 pb-2 mt-2"
          >
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center space-x-2">
                {handleIcon(item.serviceType)}
                <div className="flex flex-col">
                  <span className="text-typo">{item.name}</span>
                  <span className="text-typo-400 text-sm">
                    {item.desc || "-"}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span
                  className={`${
                    item.income ? "text-typo-600" : "text-typo-700"
                  } text-sm`}
                >
                  {item.income ? "+" : "-"}${moneyFormat(item.amount)}
                </span>
                <span className="text-typo-400 text-sm">
                  {item.cardType || "-"}
                </span>
              </div>
            </div>
          </li>
        )),
      [transactions]
    );

    return <ul>{transactionList}</ul>;
  }
);

export const Investment = React.memo(() => {
  const handleIcon = (code: string) => {
    switch (code) {
      case "apple":
        return (
          <div className="flex flex-row items-center justify-center w-[30px] h-[30px] rounded-[30px] bg-active-gradient p-2">
            <AiFillApple className="text-typo-400" />
          </div>
        );
      case "tesla":
        return (
          <div className="flex flex-row items-center justify-center w-[30px] h-[30px] rounded-[30px] bg-active-gradient p-2">
            <SiTesla className="text-typo-400" />
          </div>
        );
      case "netflix":
        return (
          <div className="flex flex-row items-center justify-center w-[30px] h-[30px] rounded-[30px] bg-active-gradient p-2">
            <RiNetflixFill className="text-typo-400" />
          </div>
        );
      case "amazon":
        return (
          <div className="flex flex-row items-center justify-center w-[30px] h-[30px] rounded-[30px] bg-active-gradient p-2">
            <AiOutlineAmazon className="text-typo-400" />
          </div>
        );

      default:
        return (
          <div className="flex flex-row items-center justify-center w-[30px] h-[30px] rounded-[30px] bg-active-gradient p-2">
            <BsArrowLeftRight className="text-typo-400" />
          </div>
        );
    }
  };

  return (
    <ul>
      {investment.map((item: any, index: number) => (
        <li
          key={index}
          className="cursor-pointer border-b border-border last:border-b-0 pb-2 mt-2"
        >
          <div className="grid grid-cols-3 items-center">
            <div className="flex flex-row items-center space-x-2">
              {handleIcon(item.code)}
              <div className="flex flex-col">
                <span className="text-typo">{item.name}</span>
                <span className="text-typo-400 text-sm">
                  {item.desc || "-"}
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-end space-x-[4px]">
              {item.income ? (
                <BsArrowUpRight className="text-typo-600 text-xs" />
              ) : (
                <BsArrowDownRight className="text-typo-700 text-xs" />
              )}
              <span
                className={`${
                  item.income ? "text-typo-600" : "text-typo-700"
                } text-sm`}
              >
                {item.percent}%
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-typo text-sm">
                ${moneyFormat(item.amount)}
              </span>
              <span
                className={`${
                  item.income ? "text-typo-600" : "text-typo-700"
                } text-sm`}
              >
                {item.income ? "+" : "-"}$
                {moneyFormat(item.income || item.outcome)}
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
});

export const QuickTransfer = React.memo(() => {
  const handleIcon = (name: string) => {
    return (
      <div className="flex flex-row items-center justify-center w-[30px] h-[30px] rounded-[30px] bg-active-gradient p-2">
        <span className="text-typo-400 uppercase">{name[0] || "-"}</span>
      </div>
    );
  };

  return (
    <ul>
      {quicktransfer.map((item: any, index: number) => (
        <li
          key={index}
          className="cursor-pointer border-b border-border last:border-b-0 pb-2 mt-2"
        >
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-2">
              {handleIcon(item.name)}
              <div className="flex flex-col">
                <span className="text-typo">{item.name}</span>
                <span className="text-typo-400 text-sm">
                  {item.accNo || "-"}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <AiOutlineRight className="text-typo text-[14px]" />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
});

export const Goals = React.memo(() => {
  const handleIcon = (code: string) => {
    switch (code) {
      case "trip":
        return (
          <div className="flex flex-row items-center justify-center w-[30px] h-[30px] rounded-[30px] bg-active-gradient p-2">
            <PiAirplaneTilt className="text-typo-400" />
          </div>
        );
      case "house":
        return (
          <div className="flex flex-row items-center justify-center w-[30px] h-[30px] rounded-[30px] bg-active-gradient p-2">
            <BsHouse className="text-typo-400" />
          </div>
        );
      case "camera":
        return (
          <div className="flex flex-row items-center justify-center w-[30px] h-[30px] rounded-[30px] bg-active-gradient p-2">
            <BsCamera className="text-typo-400" />
          </div>
        );

      default:
        return (
          <div className="flex flex-row items-center justify-center w-[30px] h-[30px] rounded-[30px] bg-active-gradient p-2">
            <BsHouse className="text-typo-400" />
          </div>
        );
    }
  };

  return (
    <ul>
      {goals.map((item: any, index: number) => (
        <li
          key={index}
          className="cursor-pointer border-b border-border last:border-b-0 pb-2 mt-2"
        >
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-2">
              {handleIcon(item.code)}
              <div className="flex flex-col">
                <span className="text-typo">{item.name}</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
});

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-3 min-h-screen">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-3/4">
            {/* section 1 */}
            <div className="flex flex-wrap">
              <div className="w-full sm:w-1/2 lg:w-4/12">
                <div className="bg-primary rounded-[6px] p-4 mb-4 mr-0 sm:mr-4">
                  <div className="flex flex-row items-center justify-between">
                    <div>
                      <span className="text-typo">Income</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-[1px] cursor-pointer">
                      <span className="text-typo-500 text-sm">this month</span>
                      <AiOutlineDown className="text-typo-500 text-[12px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-4/12">
                <div className="bg-primary rounded-[6px] p-4 mb-4 mr-0 sm:mr-4">
                  <div className="flex flex-row items-center justify-between">
                    <div>
                      <span className="text-typo">Expenses</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-[1px] cursor-pointer">
                      <span className="text-typo-500 text-sm">this month</span>
                      <AiOutlineDown className="text-typo-500 text-[12px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-4/12">
                <div className="bg-primary rounded-[6px] p-4 mb-4 mr-0 sm:mr-4">
                  <div className="flex flex-row items-center justify-between">
                    <div>
                      <span className="text-typo">Investment</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-[1px] cursor-pointer">
                      <span className="text-typo-500 text-sm">this month</span>
                      <AiOutlineDown className="text-typo-500 text-[12px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* section 2 */}
            <div className="flex flex-wrap">
              <div className="w-full sm:w-1/2 lg:w-8/12">
                <div className="bg-primary rounded-[6px] p-4 mb-4 mr-0 sm:mr-4">
                  <div className="flex flex-row items-center justify-between mb-[10px]">
                    <div>
                      <span className="text-typo">Revenue analysis</span>
                    </div>
                    <div>
                      <span className="text-typo-500">Dropdown</span>
                    </div>
                  </div>
                  <div className="flex">
                    <StackedAreaChartCom />
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-4/12">
                <div className="bg-primary rounded-[6px] p-4 mb-4 mr-0 sm:mr-4">
                  <div className="flex flex-row items-center justify-between mb-[10px]">
                    <div>
                      <span className="text-typo">Financial analysis</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-[1px] cursor-pointer">
                      <span className="text-typo-500 text-sm">this month</span>
                      <AiOutlineDown className="text-typo-500 text-[12px]" />
                    </div>
                  </div>
                  <BarChartCom />
                </div>
              </div>
            </div>

            {/* section 3 */}
            <div className="flex flex-wrap">
              <div className="w-full sm:w-1/2 lg:w-4/12">
                <div className="bg-primary rounded-[6px] p-4 mb-4 mr-0 sm:mr-4">
                  <div className="flex flex-row items-center justify-between">
                    <div>
                      <span className="text-typo">Expenses</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-[1px] cursor-pointer">
                      <span className="text-typo-500 text-sm">last week</span>
                      <AiOutlineDown className="text-typo-500 text-[12px]" />
                    </div>
                  </div>
                  <PieChartCom />
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-4/12">
                <div className="bg-primary rounded-[6px] p-4 mb-4 mr-0 sm:mr-4">
                  <div className="flex flex-row items-center justify-between">
                    <div>
                      <span className="text-typo">Transactions</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-[1px] cursor-pointer">
                      <span className="text-typo-500 text-sm">today</span>
                      <AiOutlineDown className="text-typo-500 text-[12px]" />
                    </div>
                  </div>
                  <Transactions transactions={transactions} />
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-4/12">
                <div className="bg-primary rounded-[6px] p-4 mb-4 mr-0 sm:mr-4">
                  <div className="flex flex-row items-center justify-between">
                    <div>
                      <span className="text-typo">Investment</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-[1px] cursor-pointer">
                      <span className="text-typo-500 text-sm">today</span>
                      <AiOutlineDown className="text-typo-500 text-[12px]" />
                    </div>
                  </div>
                  <Investment />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/4">
            <div className="bg-primary rounded-[6px] p-4 mb-4">
              <div className="flex flex-row items-center justify-between mb-[30px]">
                <div>
                  <span className="text-typo">My Cards</span>
                </div>
                <div className="cursor-pointer">
                  <span className="text-typo-500 text-sm">add card +</span>
                </div>
              </div>
              <div className="relative ml-[20px]">
                <div className="w-full">
                  <Image
                    src={require("../../public/AYA_JCB_Debit.png")}
                    className="w-full object-cover"
                    layout="responsive"
                    alt="bank1"
                    priority
                  />
                </div>
                <div className="absolute top-[-20px] left-[-20px] w-full h-[160px]">
                  <Image
                    src={require("../../public/AYA_JCB_Debit.png")}
                    className="w-full h-[160px] object-cover"
                    layout="responsive"
                    alt="bank2"
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="bg-primary rounded-[6px] p-4 mb-4">
              <div className="flex flex-row items-center justify-between">
                <div>
                  <span className="text-typo">Quick Transaction</span>
                </div>
                <div className="cursor-pointer">
                  <span className="text-typo-500 text-sm">add +</span>
                </div>
              </div>
              <QuickTransfer />
            </div>
            <div className="bg-primary rounded-[6px] p-4">
              <div className="flex flex-row items-center justify-between">
                <div>
                  <span className="text-typo">Goals</span>
                </div>
                <div className="cursor-pointer">
                  <span className="text-typo-500 text-sm">add goal +</span>
                </div>
              </div>
              <Goals/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
