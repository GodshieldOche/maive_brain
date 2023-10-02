import React from "react";
import RotatedBoxes from "./Common/RotatedBoxes";
import { FourDots } from "./Common/Assets";
import ContentBox from "./Common/ContentBox";

const HowItWorks = () => {
  return (
    <div className="bg-mhowitworks-svg lg:bg-howitworks-svg bg-no-repeat py-10 lg:py-56 bg-auto how_it_works">
      <div className="contain hidden lg:grid grid-cols-2 gap-x-60 items-center">
        <RotatedBoxes />
        <div className="w-full">
          <FourDots />
          <h1 className="big_text max-w-sm">
            Maive Brain is a one-on-one brain training center that uses over
            decades of
          </h1>
        </div>
      </div>
      <div className="contain lg:hidden flex flex-col justify-center gap-y-12 items-center">
        <div className="w-full flex flex-col items-center gap-y-4 ">
          <FourDots />
          <h1 className="large_text">How Brain Training Works</h1>
        </div>

        <div className="w-full flex flex-col gap-y-6 ">
          <ContentBox />
          <ContentBox />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
