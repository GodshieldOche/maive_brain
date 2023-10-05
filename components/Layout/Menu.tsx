"use client";
import React from "react";
import NavLink from "../Common/NavLink";
import Button from "../Common/Button";
import { useRouter } from "next/navigation";

const Menu: React.FC<{
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ show, setShow }) => {
  const router = useRouter();
  return (
    <div
      className="fixed xl:hidden top-0 overflow-hidden left-0 right-0 bottom-0 w-full  z-40 pt-32 pb-28 flex flex-col justify-between items-center transition-all duration-700 ease-in-out contain bg-lightOrange "
      style={{
        height: show ? "100vh" : "0px",
      }}
    >
      <NavLink text="Home" path="" setShow={setShow} />
      <NavLink text="About Us" path="about-us" setShow={setShow} />
      <NavLink text="Programs" path="programs" setShow={setShow} />

      <Button
        text="Get Started"
        action={() => {
          setShow(false);
          router.push("/training");
        }}
      />
    </div>
  );
};

export default Menu;
