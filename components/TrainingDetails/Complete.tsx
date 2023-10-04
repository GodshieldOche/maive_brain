import React from "react";

const Complete = () => {
  return (
    <div className="h-[45vh] w-[41vw] rounded-[15px] gap-y-12 flex flex-col justify-center items-center py-6 px-9 bg-[#22685D] ">
      <div className="flex flex-col gap-y-6 w-full items-center justify-center">
        <h1 className="text-[32px] text-center font-semibold text-white leading-[70px] ">
          Dyslexia Pre-Screener Completed
        </h1>
        <h1 className="text-xl text-white text-center leading-[50px] ">
          Congratulations!! you have completed this assessment, we will review
          and be in touch shortly
        </h1>
      </div>
    </div>
  );
};

export default Complete;
