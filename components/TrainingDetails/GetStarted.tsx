import React from "react";
import Button from "../Common/Button";
import { TrainingProps } from "@/interface";

const GetStarted: React.FC<TrainingProps> = ({ action }) => {
  return (
    <div className="h-[45vh] w-[45vw] rounded-[15px] gap-y-12 flex flex-col items-center py-6 px-9 bg-[#22685D] ">
      <div className="flex flex-col gap-y-6 w-full items-center justify-center">
        <h1 className="text-[32px] font-semibold text-white leading-[70px] ">
          Dyslexia Pre-Screener
        </h1>
        <h1 className="text-xl text-white text-center leading-[50px] ">
          Maive Brain is a one-on-one brain training center that uses over
          decades
        </h1>
      </div>

      <Button
        text="Get Started Now"
        styles={{
          backgroundColor: "#FF6D6A",
        }}
        action={action}
      />
    </div>
  );
};

export default GetStarted;
