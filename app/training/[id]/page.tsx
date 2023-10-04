"use client";
import Complete from "@/components/TrainingDetails/Complete";
import GetStarted from "@/components/TrainingDetails/GetStarted";
import PersonalDetails from "@/components/TrainingDetails/PersonalDetails";
import TestOne from "@/components/TrainingDetails/TestOne";
import React, { useState } from "react";

const TrainingDetails = () => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const renderer: any = () => {
    if (step === 0) {
      return <GetStarted action={handleNext} />;
    } else if (step === 1) {
      return <PersonalDetails action={handleNext} />;
    } else if (step === 2) {
      return <TestOne handlePrev={handlePrev} action={handleNext} />;
    } else {
      return <Complete />;
    }
  };

  return (
    <div className="bg-tdetails-svg w-full pt-20 flex items-center justify-center h-screen">
      {renderer()}
    </div>
  );
};

export default TrainingDetails;
