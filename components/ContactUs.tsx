"use client";
import React from "react";
import { FourDots } from "./Common/Assets";
import { Icon } from "@iconify/react";

const contactArray = [
  {
    icon: "fluent:building-retail-more-20-filled",
    title: "Office Address",
    details: "Maive Brain is a one-on-one brain",
  },
  {
    icon: "carbon:phone-filled",
    title: "Phone Number",
    details: "0456 234 2456",
  },
  {
    icon: "dashicons:email-alt",
    title: "Email Address",
    details: "Example@gmail.com",
  },
];

const ContactUs = () => {
  return (
    <div className="bg-mcontact-us-bg-svg lg:bg-contact-us-bg-svg  bg-no-repeat bg-cover lg:bg-contain pt-8 pb-16 w-full ">
      <div className="contain flex flex-col gap-y-10 lg:gap-y-14">
        <div className="w-full flex  flex-col justify-center items-center space-y-4 ">
          <FourDots />
          <h1 className="large_text text-center max-w-[490px]">
            Want To Know More? Reach Us Here
          </h1>
        </div>
        <div className="w-full grid lg:grid-cols-3 gap-6 lg:gap-x-[70px]">
          {contactArray.map((item, index) => (
            <div
              key={index}
              className="w-full py-4 px-5 gap-y-4 bg-primaryRed rounded-[15px] flex flex-col items-center "
            >
              <Icon
                icon={item.icon}
                className=" w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white"
              />
              <h1 className="font-semibold text-base md:text-lg lg:text-xl text-white ">
                {item.title}
              </h1>
              <h1 className="text-base md:text-lg lg:text-xl text-white font-SpaceG ">
                {item.details}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
