import React from "react";
import { FourDots } from "./Common/Assets";
import TrainingCard from "./Common/TrainingCard";

const Training = () => {
  return (
    <div className="w-full h-full mt-16 pb-16 bg-mtrainingBg-svg lg:bg-trainingbg-svg bg-no-repeat bg-right ">
      <div className="contain w-full flex flex-col gap-y-10 ">
        <div className="w-full flex  flex-col justify-center items-center space-y-4 ">
          <FourDots />
          <h1 className="large_text">Trainning Programs</h1>
          <h3 className="medium_text text-center !mt-2">
            Maive Brain is a one-on-one brain training center brain training
            center
          </h3>
        </div>
        <div className="w-full flex justify-center">
          <TrainingCard id={"cognitive"} />
        </div>
      </div>
    </div>
  );
};

export default Training;
