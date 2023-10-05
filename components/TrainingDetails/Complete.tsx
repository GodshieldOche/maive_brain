import React from "react";

const Complete = () => {
  return (
    <div className="w-[90vw] h-[45vh] lg:w-[41vw] rounded-[15px] gap-y-12 flex flex-col justify-center items-center py-6 px-9 bg-[#22685D] ">
      <div className="flex flex-col gap-y-6 w-full items-center justify-center">
        <h1 className="text-xl lg:text-[32px] text-center font-semibold text-white leading-[50px] lg:leading-[70px] ">
          Dyslexia Pre-Screener Completed
        </h1>
        <h1 className="text-base lg:text-xl text-white text-center leading-[50px] ">
          Congratulations!! you have completed this assessment, we will review
          and be in touch shortly
        </h1>
      </div>
    </div>
  );
};

export default Complete;
