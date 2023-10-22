import React from "react";
import { JoinImage } from "./Assets";

interface Props {
  setActiveCard: React.Dispatch<React.SetStateAction<string>>;
}

const RotatedBoxes: React.FC<Props> = ({ setActiveCard }) => {
  return (
    <div className="w-full flex flex-col relative gap-y-40 px-[6px] ">
      <div
        onMouseOver={() => setActiveCard("first")}
        className="w-[599px] z-40 px-8 py-12 rounded-[10px] bg-primaryGreen"
      >
        <h1 className="text-[26px] font-semibold text-white ">
          Assessment and Personalisation Plan
        </h1>
      </div>
      <div className="absolute w-full z-10 h-full top-0 right-0 bottom-0 left-0 flex justify-center pl-10 pt-10 items-center">
        <JoinImage />
      </div>
      <div
        onMouseOver={() => setActiveCard("last")}
        className="w-[599px] z-40 px-8 py-12 rounded-[10px] bg-primaryGreen"
      >
        <h1 className="text-[26px] font-semibold text-white ">
          One - on - One Training
        </h1>
      </div>
    </div>
  );
};

export default RotatedBoxes;
