import React, { useEffect, useState } from "react";
import Button from "../Common/Button";
import { cognitive, dyslexia } from "@/data";
import { useParams, useRouter } from "next/navigation";

interface Props {
  setAnswers: React.Dispatch<React.SetStateAction<string[]>>;
  answers: string[];
}

const TestOne: React.FC<Props> = ({ setAnswers, answers }) => {
  const [selected, setSelected] = useState("");
  const [question, setQuestion] = useState(0);

  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    setSelected(answers[question] || "");
  }, [question]);

  const tests = {
    dyslexia,
    cognitive,
  };

  const current = tests[id as keyof typeof tests];
  const number = question + 1;

  const handleNext = () => {
    if (!selected) {
      return;
    }

    if (question === current.length - 1) {
      return router.push("?step=3");
    }

    const cloned = [...answers];
    cloned[question] = selected;

    setAnswers(cloned);
    setQuestion((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (question === 0) {
      return router.push("?step=1");
    }

    setQuestion((prev) => prev - 1);
  };

  return (
    <div className="min-h-[45vh] relative w-[90vw] lg:w-[50vw] rounded-[15px] gap-y-10 flex flex-col items-center py-6 px-4 md:px-9 bg-[#22685D] ">
      <div className="flex flex-col gap-y-3 w-full items-center justify-center">
        <h1 className="text-xl lg:text-[28px] capitalize font-semibold text-white  ">
          {id}
        </h1>
        <h1 className="text-lg lg:text-xl text-white text-center">
          {current[question].title}
        </h1>
      </div>
      <div className="w-full flex flex-col gap-y-8 ">
        {current[question].options.map((option) => (
          <div
            key={option.id}
            className=" flex w-full cursor-pointer items-center py-3 md:py-4 px-3 md:px-5 border-[3px] border-transparent gap-x-4 md:gap-x-10 rounded-[15px] bg-primaryGreen "
            style={{
              borderColor: selected === option.id ? "#FF6D6A" : "",
            }}
            onClick={() => {
              setSelected(option.id);
            }}
          >
            <h1 className="text-base md:text-xl text-[26px] text-white font-bold capitalize ">
              {option.id}
            </h1>
            <h1 className="text-white font-SpaceG text-sm md:text-base lg:text-xl ">
              {option.text}
            </h1>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center gap-6 md:gap-10">
        <Button
          text="Previous"
          styles={{
            backgroundColor: "#fff",
            color: "#FF6D6A",
            width: "100%",
          }}
          action={handlePrev}
        />
        <Button
          text="Next"
          styles={{
            backgroundColor: "#FF6D6A",
            width: "100%",
          }}
          action={handleNext}
        />
      </div>

      <div className="hidden md:flex absolute w-16 h-16 lg:w-20 lg:h-20 bg-primaryRed items-center justify-center rounded-full -left-6 -top-8 lg:-left-10 lg:-top-10 ">
        <h1 className="text-[28px] text-white font-bold">
          {number.toString().length > 1 ? number : "0" + number}
        </h1>
      </div>
    </div>
  );
};

export default TestOne;
