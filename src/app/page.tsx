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
  BsCamera,
  BsSearch,
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

import {
  StackedAreaChartCom,
  BarChartCom,
  PieChartCom,
  TinyLineChartCom,
  InputCom,
} from "@/components";
import { moneyFormat } from "@/utils";

//* start tmp data
const transactions = [
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
    desc: "Markets",
    cardType: "Debit card",
    amount: 85.29,
    income: false,
    serviceType: "market",
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
const investment = [
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
const quicktransfer = [
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
const goals = [
  {
    name: "Trip",
    code: "trip",
    total: 20000,
    percent: 50,
  },
  {
    name: "House",
    code: "house",
    total: 18000,
    percent: 35,
  },
  {
    name: "Camera",
    code: "camera",
    total: 4650,
    percent: 20,
  },
];
const expenses = [
  {
    name: "Market",
    color: "#5366fe",
    amt: 186.65,
  },
  {
    name: "Transfers",
    color: "#5cc7ff",
    amt: 207.82,
  },
  {
    name: "Restaurants",
    color: "#9f4cfe",
    amt: 197.25,
  },
  {
    name: "Cash",
    color: "#ea60fe",
    amt: 340,
  },
  {
    name: "Study",
    color: "#fe54b1",
    amt: 500.85,
  },
  {
    name: "Other",
    color: "#392c6b",
    amt: 93.04,
  },
];
//* end tmp data

interface Transaction {
  name: string;
  desc?: string;
  cardType?: string;
  amount: number;
  income: boolean;
  serviceType: string;
}
interface TransactionsProps {
  transactions: Transaction[];
}
const Transactions = React.memo(({ transactions }: TransactionsProps) => {
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
      case "market":
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
              <span className="text-typo-400 text-sm text-right">
                {item.cardType || "-"}
              </span>
            </div>
          </div>
        </li>
      )),
    [transactions]
  );

  return <ul>{transactionList}</ul>;
});
Transactions.displayName = "Transactions";

const Investment = React.memo(() => {
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
Investment.displayName = "Investment";

const QuickTransfer = React.memo(() => {
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
QuickTransfer.displayName = "QuickTransfer";

const Goals = React.memo(() => {
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
        <li key={index} className="cursor-pointer pb-2 mt-2">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-grow items-center space-x-2">
              {handleIcon(item.code)}
              <div className="flex flex-col w-full gap-y-1">
                <div className="flex flex-row flex-wrap items-center justify-between">
                  <span className="text-typo">{item.name}</span>
                  <span className="text-typo text-sm">
                    ${moneyFormat(item.total)}/
                    <span className="text-typo-400 text-sm">
                      ${moneyFormat(item.total)}
                    </span>
                  </span>
                </div>
                <div className="w-full bg-progress rounded-full h-2.5">
                  <div
                    className="bg-progress-active-gradient h-2.5 rounded-full"
                    style={{ width: `${item.percent}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
});
Goals.displayName = "Goals";

export default function Home() {
  return (
    <div className="min-h-screen mb-4">
      <div className="block lg:hidden">
        <div className="flex flex-row justify-end mb-4">
          <div className="min-w-[269px]">
            <InputCom
              placeholder="Search ..."
              rightComponent={<BsSearch className="text-typo text-[14px]" />}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-3/4">
          {/* section 1 */}
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 lg:w-4/12">
              <div className="bg-primary rounded-[6px] mb-4 mr-0 sm:mr-4 relative overflow-hidden">
                <div className="absolute top-[60px] left-0 w-full">
                  <div className="flex flex-col gap-y-[40px] px-[18px]">
                    <span className="text-typo font-semibold">
                      ${moneyFormat(65587.67)}
                    </span>
                    <span className="text-typo-600 text-sm">+16%</span>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between p-4 mb-[5px]">
                  <div>
                    <span className="text-typo text-lg">Income</span>
                  </div>
                  <div className="flex flex-row items-center gap-x-1 cursor-pointer">
                    <span className="text-typo-500 text-sm">this month</span>
                    <AiOutlineDown className="text-typo-500 text-[12px]" />
                  </div>
                </div>
                <div className="flex pl-[60px]">
                  <TinyLineChartCom />
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-4/12">
              <div className="bg-primary rounded-[6px] mb-4 mr-0 sm:mr-4 relative overflow-hidden">
                <div className="absolute top-[60px] left-0 w-full">
                  <div className="flex flex-col gap-y-[40px] px-[18px]">
                    <span className="text-typo font-semibold">
                      ${moneyFormat(1420.67)}
                    </span>
                    <span className="text-typo-700 text-sm">-36%</span>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between p-4 mb-[5px]">
                  <div>
                    <span className="text-typo text-lg">Expenses</span>
                  </div>
                  <div className="flex flex-row items-center gap-x-1 cursor-pointer">
                    <span className="text-typo-500 text-sm">this month</span>
                    <AiOutlineDown className="text-typo-500 text-[12px]" />
                  </div>
                </div>
                <div className="flex pl-[60px]">
                  <TinyLineChartCom />
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-4/12">
              <div className="bg-primary rounded-[6px] mb-4 mr-0 sm:mr-4 relative overflow-hidden">
                <div className="absolute top-[60px] left-0 w-full">
                  <div className="flex flex-col gap-y-[40px] px-[18px]">
                    <span className="text-typo font-semibold">
                      ${moneyFormat(950.67)}
                    </span>
                    <span className="text-typo-600 text-sm">+12%</span>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between mb-[5px] p-4">
                  <div>
                    <span className="text-typo text-lg">Investment</span>
                  </div>
                  <div className="flex flex-row items-center gap-x-1 cursor-pointer">
                    <span className="text-typo-500 text-sm">this month</span>
                    <AiOutlineDown className="text-typo-500 text-[12px]" />
                  </div>
                </div>
                <div className="flex pl-[60px]">
                  <TinyLineChartCom />
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
                    <span className="text-typo text-lg">Revenue analysis</span>
                  </div>
                  <div className="flex flex-row items-center gap-x-4">
                    <div className="flex flex-row items-center gap-x-1 cursor-pointer">
                      <div className="w-2 h-2 rounded-full bg-[#7DB4FE] mr-[1px]" />
                      <span className="text-typo-500 text-sm">2020</span>
                      <AiOutlineDown className="text-typo-500 text-[12px]" />
                    </div>
                    <div className="flex flex-row items-center gap-x-1 cursor-pointer">
                      <div className="w-2 h-2 rounded-full bg-[#F6A3C8] mr-[1px]" />
                      <span className="text-typo-500 text-sm">2021</span>
                      <AiOutlineDown className="text-typo-500 text-[12px]" />
                    </div>
                  </div>
                </div>
                <StackedAreaChartCom />
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-4/12">
              <div className="bg-primary rounded-[6px] p-4 mb-4 mr-0 sm:mr-4">
                <div className="flex flex-row items-center justify-between mb-[10px]">
                  <div>
                    <span className="text-typo text-lg">
                      Financial analysis
                    </span>
                  </div>
                  <div className="flex flex-row items-center gap-x-1 cursor-pointer">
                    <span className="text-typo-500 text-sm">this month</span>
                    <AiOutlineDown className="text-typo-500 text-[12px]" />
                  </div>
                </div>
                <div className="flex flex-row items-center gap-x-4 mb-4">
                  <div className="flex flex-row items-center gap-x-2">
                    <div className="w-2 h-2 rounded-full bg-[#9c50a5]" />
                    <span className="text-typo text-sm">Expenses</span>
                  </div>
                  <div className="flex flex-row items-center gap-x-2">
                    <div className="w-2 h-2 rounded-full bg-[#755cca]" />
                    <span className="text-typo text-sm">Income</span>
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
                    <span className="text-typo text-lg">Expenses</span>
                  </div>
                  <div className="flex flex-row items-center gap-x-1 cursor-pointer">
                    <span className="text-typo-500 text-sm">last week</span>
                    <AiOutlineDown className="text-typo-500 text-[12px]" />
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-5/12">
                    <PieChartCom />
                  </div>
                  <div className="w-full lg:w-7/12 pt-[15px]">
                    {expenses.map((item: any, index: number) => (
                      <div
                        key={index}
                        className="flex flex-row justify-between items-center mb-[5px]"
                      >
                        <div className="flex flex-row items-center gap-x-1">
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: item.color }}
                          />
                          <span className="text-typo text-sm">{item.name}</span>
                        </div>
                        <span className="text-typo text-sm">
                          ${moneyFormat(item.amt)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="min-h-[46px]">
                  <span className="text-typo-400 text-sm leading-2">
                    You have spent 16% less money this week that last week.
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-4/12">
              <div className="bg-primary rounded-[6px] p-4 mb-4 mr-0 sm:mr-4">
                <div className="flex flex-row items-center justify-between">
                  <div>
                    <span className="text-typo text-lg">Transactions</span>
                  </div>
                  <div className="flex flex-row items-center gap-x-1 cursor-pointer">
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
                    <span className="text-typo text-lg">Investment</span>
                  </div>
                  <div className="flex flex-row items-center gap-x-1 cursor-pointer">
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
                <span className="text-typo text-lg">My Cards</span>
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
            <div className="flex flex-row items-center justify-between mb-[15px]">
              <div>
                <span className="text-typo text-lg">Quick Transaction</span>
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
                <span className="text-typo text-lg">Goals</span>
              </div>
              <div className="cursor-pointer">
                <span className="text-typo-500 text-sm">add goal +</span>
              </div>
            </div>
            <Goals />
          </div>
        </div>
      </div>
    </div>
  );
}
