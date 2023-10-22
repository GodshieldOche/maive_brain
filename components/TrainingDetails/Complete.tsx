import Image from "next/image";
import React, { useEffect } from "react";
import SuccessGif from "../../public/success.gif";
import { useParams, useRouter } from "next/navigation";

const Complete: React.FC<{ answers: string[] }> = ({ answers }) => {
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    if (!answers.length) {
      return router.push("?step=0");
    }
  }, [answers]);
  return (
    <div className="w-[90vw] lg:w-[41vw] rounded-[15px] flex flex-col justify-center items-center py-6 pb-12 px-9 bg-[#22685D] ">
      <Image src={SuccessGif} alt="Success gif" />
      <div className="flex flex-col gap-y-6 w-full items-center justify-center">
        <h1 className="text-xl lg:text-[32px] capitalize text-center font-semibold text-white leading-[50px] lg:leading-[70px] ">
          {id} Pre-Screener Completed
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
