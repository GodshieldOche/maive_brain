import React from "react";

interface Props {
  title: string;
  description: string;
}

const TestText: React.FC<Props> = ({ title, description }) => {
  return (
    <div className="md:py-[18px] p-4 md:px-6 ">
      <h1 className="  second_large ">{title}</h1>
      <h3 className="second_small">{description}</h3>
    </div>
  );
};

export default TestText;
