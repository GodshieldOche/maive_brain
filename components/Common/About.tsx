import React from "react";
import { FourDots } from "./Assets";

const About = () => {
  return (
    <section
      data-aos="fade-up"
      className="w-full flex flex-col items-center gap-y-2 md:gap-y-6 max-w-[961px] mx-auto "
    >
      <FourDots />
      <h1 className="large_text">About Maive Brain</h1>
      <h2 className="big_text text-center  ">
        Our mission is for everyone to be a successful learner through our
        comprehensive testing and training programs to ensure that necessary
        intellectual learning abilities are well-developed and in place.
      </h2>
    </section>
  );
};

export default About;
