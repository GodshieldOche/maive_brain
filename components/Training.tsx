"use client";
import React, { useEffect, useRef } from "react";
import { FourDots } from "./Common/Assets";
import TrainingCard from "./Common/TrainingCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Training = () => {
  const card1Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // stacked cards scrolling effect with gsap scrolltrigger
    const card1 = card1Ref.current;
    if (!card1) {
      return;
    }
  }, []);

  return (
    <div className="w-full h-full mt-16 pb-16 bg-mtrainingBg-svg lg:bg-trainingbg-svg bg-no-repeat bg-right  ">
      <div className="contain w-full flex flex-col gap-y-10 ">
        <div className="w-full flex  flex-col justify-center items-center space-y-4 ">
          <FourDots />
          <h1 className="large_text">Trainning Programs</h1>
          <h3 className="medium_text text-center !mt-2">
            We work with learners who may be struggling academically,{" "}
            <br className="hidden md:block" /> career adults and seniors
          </h3>
        </div>
        <div className="w-full flex justify-center">
          <div id="cards">
            <div className="card" id="card_1">
              <TrainingCard id={"cognitive"} />
            </div>
            <div className="card" id="card_2">
              <TrainingCard id={"cognitive"} />
            </div>
          </div>
        </div>
      </div>
      <a href="mailto:recipient@example.com?subject=Your%20Subject&body=Your%20message%20goes%20here">
        Send Email
      </a>
    </div>
  );
};

export default Training;
