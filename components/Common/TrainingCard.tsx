import React from "react";
import Button from "./Button";

const TrainingCard = () => {
  return (
    <div className="w-full max-w-[970px] bg-primaryOrange rounded-[15px] p-4 md:p-6 ">
      <div className="h-[211px] rounded-[10px] bg-training-svg "></div>
      <div className="flex flex-col mt-1">
        <h1 className="text-white second_large ">Cognitive Training</h1>
        <h3 className="text-white text-base lgd:text-xl leading-[40px] lg:leading-[50px] ">
          Maive Brain is a one-on-one brain training center that uses over
          decades of research to Maive Brain is a one-on-one brain training
          center that uses over decades of research to
        </h3>
      </div>
      <div className="mt-6">
        <Button
          text="Take Free Online Test"
          styles={{
            backgroundColor: "#fff",
            color: "#FF8D6B",
          }}
        />
      </div>
    </div>
  );
};

export default TrainingCard;
