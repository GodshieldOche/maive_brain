import React from "react";
import { FourDots } from "./Assets";

const About = () => {
  return (
    <section className="w-full flex flex-col items-center gap-y-2 md:gap-y-6 max-w-[961px] mx-auto ">
      <FourDots />
      <h1 className="large_text">About Maive Brain</h1>
      <h2 className="big_text text-center ">
        Maive Brain is a one-on-one brain training center that uses over decades
        of research to target skills that are important to how you learn and
        perform.
      </h2>
    </section>
  );
};

export default About;
