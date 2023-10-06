import React from "react";
import { JoinImage } from "./Assets";

const RotatedBoxes = () => {
  return (
    <div className="w-full flex flex-col relative gap-y-40 px-[6px] ">
      <div className="w-[599px] hover:animate-bounce hover:delay-500 z-40 px-8 py-12 rotate-[13.9deg] rounded-[10px] bg-primaryGreen">
        <h1 className="text-[26px] font-semibold text-white ">
          Assessment and Personalisation Plan
        </h1>
      </div>
      <div className="absolute w-full z-10 h-full top-0 right-0 bottom-0 left-0 flex justify-center pl-10 pt-10 items-center">
        <JoinImage />
      </div>
      <div className="w-[599px] z-40 ml-[53px] px-8 py-12 rotate-[-10.6deg] rounded-[10px] bg-primaryGreen">
        <h1 className="text-[26px] font-semibold text-white ">
          One - on - One Training
        </h1>
      </div>
    </div>
  );
};

export default RotatedBoxes;
