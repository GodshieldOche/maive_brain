import React from "react";
import Accordion from "./Common/Accordion";
import { FourDots } from "./Common/Assets";

const items = [
  {
    title: "Hello World",
    content:
      "Answer of question Answer of question Answer of question Answer of question Answer of question Answer of question Answer of question Answer of question Answer of question Answer of",
  },
  {
    title: "Hello World",
    content:
      "Answer of question Answer of question Answer of question Answer of question Answer of question Answer of question Answer of question Answer of question Answer of question Answer of",
  },
  {
    title: "Hello World",
    content:
      "Answer of question Answer of question Answer of question Answer of question Answer of question Answer of question Answer of question Answer of question Answer of question Answer of",
  },
  {
    title: "Hello World",
    content:
      "Answer of question Answer of question Answer of question Answer of question Answer of question Answer of question Answer of question Answer of question Answer of question Answer of",
  },
];

const Faq = () => {
  return (
    <div className="w-full  lg:min-h-[682px] py-16 mb-6 lg:py-[104px] flex flex-col items-center justify-center bg-mfaq-bg-svg lg:bg-faq-svg bg-no-repeat bg-cover ">
      <div className="contain grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center">
        <div className="lg:col-span-5 flex flex-col gap-y-4">
          <FourDots />
          <div className="max-w-[300px] flex flex-col gap-y-4 lg:max-w-[335px]">
            <h1 className="large_text !leading-normal">
              Frequently Asked Questions
            </h1>
            <h3 className="medium_text !leading-[50px]">
              Maive Brain is a one-on-one brain training center brain training
              center
            </h3>
          </div>
        </div>
        <div className="lg:col-span-7">
          <Accordion items={items} />
        </div>
      </div>
    </div>
  );
};

export default Faq;
