import Image from "next/image";
import React from "react";
import Button from "./Button";

interface Props {
  image: string;
  title: string;
  description: string;
}

const TestBox: React.FC<Props> = ({ image, title, description }) => {
  return (
    <div className="w-full h-[400px] rounded-[10px] z-40 relative">
      <Image
        src={image}
        fill
        className="rounded-[10px] bg-contain w-full h-full"
        alt="Test Image"
      />
      <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full flex flex-col justify-end gap-y-6 px-[14px] py-6 md:p-6 opa_bg ">
        <div className="space-y-1">
          <h1 className="text-white second_large ">{title}</h1>
          <h3 className="text-white second_small ">{description}</h3>
        </div>

        <Button text="Take Free Online Test" />
      </div>
    </div>
  );
};

export default TestBox;