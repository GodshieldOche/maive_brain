import React from "react";
import { FourDots } from "./Common/Assets";
import TestimonialCard from "./Common/TestimonialCard";

const Testimonial = () => {
  return (
    <div className=" bg-mtestimonialBg-svg lg:bg-testimonialbg-svg  bg-no-repeat">
      <div className="contain w-full flex flex-col gap-y-20 lg:gap-y-32  py-14 ">
        <div className="w-full flex  flex-col justify-center items-center space-y-4 ">
          <FourDots />
          <h1 className="large_text">Testimonial</h1>
          <h3 className="medium_text text-center !mt-2">
            Still not Convinced?? Hear from our previous students
          </h3>
        </div>
        <div className="w-full grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-16 gap-8 ">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
