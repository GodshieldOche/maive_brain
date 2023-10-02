import Image from "next/image";
import React from "react";

const TestimonialCard = () => {
  return (
    <div className="bg-primaryGreen relative rounded-[15px] py-6 px-4 bg-testimonial-svg bg-bottom bg-no-repeat bg-contain pt-14 flex flex-col gap-y-10 justify-end ">
      <h3 className="text-white text-base md:text-xl font-SpaceG leading-[39px] ">
        Maive Brain is a one-on-one brain training center brain training center
        center brain training center brain training center
      </h3>
      <h1 className="text-lg lg:text-xl font-semibold">Homer Simpson</h1>
      <div className="absolute -top-[13%] lg:-top-[17%] left-0 right-0 w-full flex justify-center">
        <div className="relative w-[72px] h-[72px] lg:w-[96px] lg:h-[96px] ">
          <Image
            src="https://res.cloudinary.com/dk6uhtgvo/image/upload/v1694356790/SmartAfri/testimonee_htscgq.png"
            fill
            className="w-full h-full"
            alt="testimonee_img"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
