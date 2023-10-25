"use client";
import React, { useState } from "react";
import RotatedBoxes from "./Common/RotatedBoxes";
import { FourDots } from "./Common/Assets";
import ContentBox from "./Common/ContentBox";

const HowItWorks = () => {
  const [activeCard, setActiveCard] = useState("first");
  return (
    <div
      id="hello"
      className="bg-mhowitworks-svg lg:bg-howitworks-svg bg-no-repeat py-10 lg:py-56 bg-auto how_it_works"
    >
      <div className="contain hidden lg:grid grid-cols-2 gap-x-28 items-center">
        <RotatedBoxes setActiveCard={setActiveCard} />
        <div className="w-full min-h-[524px] space-y-2  ">
          <FourDots />
          <h1 className="large_text max-w-[350px]">How Brain Training Works</h1>
          {activeCard === "first" && (
            <h1 className="big_text max-w-sm" data-aos="fade-up">
              Assessments are available for grades kindergarten to adult. We
              discover what areas are already strong, and which may be causing
              learning difficulties.
            </h1>
          )}
          {activeCard === "last" && (
            <h1 className="big_text max-w-sm" data-aos="fade-up">
              Every training session is monitored and evaluated to ensure
              maximum benefit Available via Online Training and In Person
              Training
            </h1>
          )}
        </div>
      </div>
      <div className="contain lg:hidden flex flex-col justify-center gap-y-12 items-center">
        <div className="w-full flex flex-col items-center gap-y-4 ">
          <FourDots />
          <h1 className="large_text">How Brain Training Works</h1>
        </div>

        <div className="w-full flex flex-col gap-y-6 ">
          <ContentBox
            title="Assessment and Personalisation Plan"
            description="Assessments are available for grades kindergarten to adult. We discover what areas are already strong, and which may be causing learning difficulties."
          />
          <ContentBox
            title="One - on - One Training"
            description="Every training session is monitored and evaluated to ensure maximum benefit Available via Online Training and
            In Person Training"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
