import React from "react";
import { EmailIcon, FourDots, LinkedInIcon } from "./Common/Assets";
import Prossentional1 from "@/public/professional.png";
import Image from "next/image";

const Team = () => {
  return (
    <div className=" bg-mteam-bg-svg lg:bg-team-bg-svg bg-no-repeat bg-contain bg-right-bottom py-14 bg-[#06748D] ">
      <div className="contain w-full items-center grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        <div className="col-span-1 flex flex-col md:justify-center md:items-center lg:items-start gap-y-4">
          <FourDots />
          <h1 className="large_text md:text-center lg:text-start text-white max-w-[300px]">
            Meet Our Trained Professionals
          </h1>
        </div>
        <div className="col-span-2 flex w-full flex-col lg:flex-row gap-10">
          <div className="flex flex-col justify-center items-center lg:items-start gap-y-5 ">
            <div className="w-[343px] h-[343px] md:w-[348px] md:h-[353px] ">
              <Image
                src={Prossentional1}
                className="w-full h-full"
                alt="professional One"
              />
            </div>
            <h1 className="medium_text w-full md:w-fit text-white ">
              Evasolace Ele-Ojo Akoh
            </h1>
            <div className="flex w-full md:w-fit">
              <LinkedInIcon />
              <EmailIcon />
            </div>
          </div>
          <div>
            <h1 className="medium_text !text-white !leading-[50px]">
              Maive Brain is a one-on-one brain training center brain training
              center Maive Brain is a one-on-one brain training center brain
              training center Maive Brain is a one-on-one brain training center
              brain training center enter brain training center enter brain
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
