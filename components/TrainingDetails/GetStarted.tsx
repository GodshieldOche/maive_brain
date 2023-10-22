import React from "react";
import Button from "../Common/Button";
import { useParams, useRouter } from "next/navigation";

const GetStarted: React.FC = () => {
  const router = useRouter();
  const { id } = useParams();
  return (
    <div className="w-[90vw] lg:min-h-[45vh] lg:w-[45vw] rounded-[15px] gap-y-12 flex flex-col items-center py-6 px-9 bg-[#22685D] ">
      <div className="flex flex-col gap-y-6 w-full items-center justify-center">
        <h1 className=" text-xl lg:text-[32px] capitalize font-semibold text-white leading-[70px] ">
          {id} Pre-Screener
        </h1>
        <h1 className=" text-base lg:text-xl text-white text-center leading-[40px] lg:leading-[50px] ">
          Maive Brain is a one-on-one brain training center that uses over
          decades
        </h1>
      </div>

      <Button
        text="Get Started Now"
        styles={{
          backgroundColor: "#FF6D6A",
        }}
        action={() => router.push("?step=1")}
      />
    </div>
  );
};

export default GetStarted;
