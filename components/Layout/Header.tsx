"use client";
import React from "react";
import NavLink from "../Common/NavLink";
import Button from "../Common/Button";
import { Icon } from "@iconify/react";
import { Logo } from "../Common/Assets";
import { useRouter, useParams } from "next/navigation";

const Header: React.FC<{
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ show, setShow }) => {
  const router = useRouter();
  const params = useParams();

  const is_td = params.id;

  return (
    <header
      className={`w-full bg-transparent ${
        is_td ? "fixed" : "sticky"
      } !z-50 left-0 right-0 top-4 lg:top-6 contain `}
    >
      {/* Desktop */}
      <nav className="relative hidden w-full lg:flex justify-between items-center bg-white rounded-full py-[15px] px-8">
        <div
          className="w-fit h-fit cursor-pointer z-50 "
          onClick={() => router.push("/")}
        >
          <Logo />
        </div>
        {!is_td && (
          <ul className="absolute w-full h-full right-0 left-0 top-0 bottom-0  flex justify-center items-center gap-x-20 ">
            <NavLink text="Home" path="" />
            <NavLink text="About Us" path="about-us" />
            <NavLink text="Programs" path="programs" />
          </ul>
        )}

        {is_td ? (
          <Button text="Go Back Home" action={() => router.push("/")} />
        ) : (
          <Button text="Get Started" action={() => router.push("/training")} />
        )}
      </nav>
      <nav className="relative flex w-full lg:hidden justify-between items-center bg-white rounded-full py-5 px-4 md:px-8">
        <div className="w-[68px] h-[17px] md:w-fit md:h-fit ">
          <Logo />
        </div>

        {is_td ? (
          <Icon
            icon="lucide:x"
            width={24}
            height={24}
            className="text-primaryRed"
            onClick={() => router.push("/")}
          />
        ) : show ? (
          <Icon
            icon="lucide:x"
            width={24}
            height={24}
            className="text-primaryRed"
            onClick={() => setShow(false)}
          />
        ) : (
          <Icon
            icon="solar:hamburger-menu-broken"
            width={24}
            height={24}
            className="text-primaryRed"
            onClick={() => setShow(true)}
          />
        )}
      </nav>
    </header>
  );
};

export default Header;
