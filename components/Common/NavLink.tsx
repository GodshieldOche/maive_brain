"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  path: string;
  text: string;
}

const NavLink: React.FC<Props> = ({ path, text }) => {
  const pathname = usePathname().split("/")[1];

  return (
    <li className="w-fit h-fit flex flex-col xl:flex-row xl:items-center  relative ">
      <Link href={`/${path}`} className="text-primaryGreen  cursor-pointer ">
        {text}
      </Link>
      {path === pathname && (
        <div className="absolute right-0 left-0 top-[94%] w-full h-full flex justify-center">
          <div className=" w-full h-[2px] bg-primaryGreen rounded-full "></div>
        </div>
      )}
    </li>
  );
};

export default NavLink;
