"use client";
import React from "react";
import NavLink from "../Common/NavLink";
import Button from "../Common/Button";
import { Icon } from "@iconify/react";
import { Logo } from "../Common/Assets";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <header className="w-full bg-transparent sticky !z-50 left-0 right-0 top-4 lg:top-6 contain ">
      {/* Desktop */}
      <nav className="relative hidden w-full lg:flex justify-between items-center bg-white rounded-full py-[15px] px-8">
        <div
          className="w-fit h-fit cursor-pointer z-50 "
          onClick={() => router.push("/")}
        >
          <Logo />
        </div>
        <ul className="absolute w-full h-full right-0 left-0 top-0 bottom-0  flex justify-center items-center gap-x-20 ">
          <NavLink text="Home" path="" />
          <NavLink text="About Us" path="about-us" />
          <NavLink text="Programs" path="programs" />
        </ul>
        <Button text="Get Started" action={() => router.push("/training")} />
      </nav>
      <nav className="relative flex w-full lg:hidden justify-between items-center bg-white rounded-full py-5 px-4 md:px-8">
        <div className="w-[68px] h-[17px] md:w-fit md:h-fit ">
          <Logo />
        </div>
        <Icon
          icon="solar:hamburger-menu-broken"
          width={24}
          height={24}
          className="text-primaryRed"
        />
      </nav>
    </header>
  );
};

export default Header;