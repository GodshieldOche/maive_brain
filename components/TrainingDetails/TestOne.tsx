import React, { useState } from "react";
import Button from "../Common/Button";
import { TrainingProps } from "@/interface";

const options = [
  {
    id: "a",
    text: "Maive Brain is a one-on-one brain training center",
  },
  {
    id: "b",
    text: "Maive Brain is a one-on-one brain training center",
  },
  {
    id: "c",
    text: "Maive Brain is a one-on-one brain training center",
  },
];

interface Props extends TrainingProps {
  handlePrev: () => void;
}

const TestOne: React.FC<Props> = ({ action, handlePrev }) => {
  const [selected, setSelected] = useState("");
  return (
    <div className="min-h-[45vh] relative w-[90vw] lg:w-[50vw] rounded-[15px] gap-y-10 flex flex-col items-center py-6 px-4 md:px-9 bg-[#22685D] ">
      <div className="flex flex-col gap-y-3 w-full items-center justify-center">
        <h1 className="text-xl lg:text-[28px] font-semibold text-white  ">
          Letter Sounds
        </h1>
        <h1 className="text-lg lg:text-xl text-white text-center">
          Has Difficulty
        </h1>
      </div>
      <div className="w-full flex flex-col gap-y-8 ">
        {options.map((option) => (
          <div
            key={option.id}
            className=" flex w-full cursor-pointer items-center py-3 md:py-4 px-3 md:px-5 border-[3px] border-transparent gap-x-4 md:gap-x-10 rounded-[15px] bg-primaryGreen "
            style={{
              borderColor: selected === option.id ? "#FF6D6A" : "",
            }}
            onClick={() => {
              setSelected(option.id);
            }}
          >
            <h1 className="text-base md:text-xl text-[26px] text-white font-bold capitalize ">
              {option.id}
            </h1>
            <h1 className="text-white font-SpaceG text-sm md:text-base lg:text-xl ">
              {option.text}
            </h1>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center gap-6 md:gap-10">
        <Button
          text="Previous"
          styles={{
            backgroundColor: "#fff",
            color: "#FF6D6A",
            width: "100%",
          }}
          action={handlePrev}
        />
        <Button
          text="Next"
          styles={{
            backgroundColor: "#FF6D6A",
            width: "100%",
          }}
          action={action}
        />
      </div>

      <div className="hidden md:flex absolute w-16 h-16 lg:w-20 lg:h-20 bg-primaryRed items-center justify-center rounded-full -left-6 -top-8 lg:-left-10 lg:-top-10 ">
        <h1 className="text-[28px] text-white font-bold">01</h1>
      </div>
    </div>
  );
};

export default TestOne;
