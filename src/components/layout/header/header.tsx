import Link from "next/link";
import Image from "next/image";
import { AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { BsBell, BsSearch } from "react-icons/bs";

import { InputCom } from "@/components/form";

export const HeaderCom = () => {
  return (
    <header className="z-10 px-[24px] pr-[43px] py-[15px] sm:py-[20px]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-3">
          <div className="block lg:hidden cursor-pointer">
            <AiOutlineMenu className="text-typo font-bold text-[18px]" />
          </div>
          <span className="text-typo text-xl text-gray-800">Dashboard</span>
        </div>
        <div className="hidden lg:block">
          <div className="flex items-center gap-x-4">
            <div className="min-w-[267px]">
              <InputCom
                placeholder="Search ..."
                rightComponent={
                  <BsSearch className="text-typo text-[14px] mr-[2px]" />
                }
              />
            </div>
            <div className="flex items-center justify-between bg-primary rounded-[8px] px-[20px] py-1 gap-x-[72px] pl-[50px] relative">
              <Link href="/account/profile" className="absolute top-[-18px] left-[-7px] w-[55px] h-[55px] rounded-[55px] overflow-hidden">
                <Image
                  src={require("../../../../public/avatar.png")}
                  className="w-full h-[55px] object-cover"
                  layout="responsive"
                  width={55}
                  height={55}
                  alt="Avatar"
                  priority
                />
              </Link>
              <Link href="/account/profile">
                <span className="text-typo text-[14px]">Hello, Michaela</span>
              </Link>
              <div className="flex items-center gap-x-3">
                <Link href="/system/mails" className="cursor-pointer transition-transform duration-300 hover:-translate-y-[2px]">
                  <AiOutlineMail className="text-typo text-[18px]" />
                </Link>
                <Link href="/system/notifications" className="cursor-pointer transition-transform duration-300 hover:-translate-y-[2px] relative">
                  <div className="flex items-start justify-center bg-[#9699F3] min-w-[18px] h-[18px] rounded-[18px] absolute top-[-12px] left-[7px]">
                    <span className="text-white text-[12px] text-center">
                      5
                    </span>
                  </div>
                  <BsBell className="text-typo text-[18px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Link href="/account/profile" className="block lg:hidden cursor-pointer">
          <div className="w-[30px] h-[30px] rounded-[30px] overflow-hidden">
            <Image
              src={require("../../../../public/avatar.png")}
              className="w-full h-[30px] object-cover"
              layout="responsive"
              width={30}
              height={30}
              alt="Avatar"
              priority
            />
          </div>
        </Link>
      </div>
    </header>
  );
};
