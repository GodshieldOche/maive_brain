"use client";
import React, { CSSProperties } from "react";

interface Props {
  text: string;
  styles?: CSSProperties;
  action?: () => void;
}

const Button: React.FC<Props> = ({ text, styles, action }) => {
  return (
    <button
      className="bg-primaryGreen z-50 cursor-pointer text-sm md:text-base font-SpaceG text-white w-full lg:w-fit font-semibold py-[13px] px-[49px] rounded-full "
      style={{
        cursor: "pointer",
        ...styles,
      }}
      onClick={action}
    >
      {text}
    </button>
  );
};

export default Button;
