"use client";
import React from "react";

interface Props {
  title: string;
  options: {
    text: string;
    link: string;
  }[];
}

const FooterLinks: React.FC<Props> = ({ title, options }) => {
  return (
    <div className="flex flex-col w-full py-4 gap-y-2 ">
      <h1 className="text-[18px] md:text-[20px] md:text-center leading-[50px] font-semibold ">
        {title}
      </h1>
      <ul className="w-full flex flex-col gap-y-6 ">
        {options.map((item, index) => (
          <li
            key={index}
            className="small_text whitespace-nowrap font-medium  md:text-center"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
