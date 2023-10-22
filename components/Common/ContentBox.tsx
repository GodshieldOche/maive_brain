import { Rubik } from "next/font/google";
import React from "react";

interface Props {
  title: string;
  description: string;
}

export const rubik = Rubik({
  subsets: ["latin"],
  weight: "800",
});

const ContentBox: React.FC<Props> = ({ title, description }) => {
  return (
    <div className="w-full flex flex-col gap-y-4 ">
      <div className="py-8 px-4 bg-primaryGreen rounded-md flex ">
        <h1
          className="text-white big_text !font-[700]"
          style={{
            ...rubik.style,
          }}
        >
          {title}
        </h1>
      </div>
      <h3 className="big_text">{description}</h3>
    </div>
  );
};

export default ContentBox;
