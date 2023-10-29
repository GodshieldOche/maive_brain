"use client";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

const TrainingCard: React.FC<{ id: string }> = ({ id }) => {
  const router = useRouter();
  return (
    <div
      id={id}
      className="w-full max-w-[970px] bg-primaryOrange rounded-[15px] p-4 md:p-6 "
      style={{
        marginTop: id === "cognitive_two" ? "32px" : "16px",
      }}
    >
      <div className="h-[211px] rounded-[10px] p-3 md:p-5 flex items-end space-x-3  bg-training-svg ">
        <div
          className={`rounded-[15px] text-[13px] lg:text-sm h-fit px-5 py-[10px] ${manrope.className} text-white font-semibold bg-primaryOrange `}
        >
          3 Months
        </div>
        <div
          className={`rounded-[15px] text-[13px] lg:text-sm h-fit px-5 py-[10px] ${manrope.className} text-black font-semibold bg-white `}
        >
          Online/Physical
        </div>
      </div>
      <div className="flex flex-col mt-1">
        <h1 className="text-white second_large ">Cognitive Training</h1>
        <h3 className="text-white text-base lg:text-xl leading-[40px] lg:leading-[50px] ">
          Our comprehensive cognitive training program addressing the 7 core
          cognitive skills that make up IQ. Suitable for learners aged 7 and
          above.
        </h3>
      </div>
      <div className="mt-6">
        <Button
          text="Take Free Online Test"
          styles={{
            backgroundColor: "#fff",
            color: "#FF8D6B",
          }}
          action={() => router.push(`/training/${id}`)}
        />
      </div>
    </div>
  );
};

export default TrainingCard;
