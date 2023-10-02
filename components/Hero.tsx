import React from "react";
import { FourDots, HeroImage } from "./Common/Assets";

const Hero = () => {
  return (
    <div className="contain w-full flex items-center h-[calc(100vh-64px)] lg:h-[calc(100vh-80px)]">
      <section className="grid grid-cols-1 w-full items-center gap-y-20 lg:gap-4 lg:grid-cols-2">
        <article className="flex flex-col gap-y-4">
          <FourDots />
          <h1 className="large_text">
            em ipsum dolor sit amet, consectetur adipiscing el
          </h1>
        </article>
        <figure className="w-full h-fit flex justify-center lg:justify-end order-first lg:order-last">
          <div className="w-[300px] h-[280px] md:w-fit md:h-fit ">
            <HeroImage />
          </div>
        </figure>
      </section>
    </div>
  );
};

export default Hero;