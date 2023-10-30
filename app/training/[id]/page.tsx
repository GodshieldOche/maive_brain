"use client";
import Complete from "@/components/TrainingDetails/Complete";
import GetStarted from "@/components/TrainingDetails/GetStarted";
import PersonalDetails from "@/components/TrainingDetails/PersonalDetails";
import TestOne from "@/components/TrainingDetails/TestOne";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const TrainingDetails = () => {
  const [data, setData] = useState({
    full_name: "",
    email: "",
    phone_no: "",
    for: "",
    relationship: "",
  });

  const [answers, setAnswers] = useState<string[]>([]);

  const searchParams = useSearchParams();

  const step = Number(searchParams.get("step")) || 0;

  const renderer: any = () => {
    if (step === 0) {
      return <GetStarted />;
    } else if (step === 1) {
      return <PersonalDetails data={data} setData={setData} />;
    } else if (step === 2) {
      return <TestOne setAnswers={setAnswers} answers={answers} />;
    } else {
      return <Complete answers={answers} data={data} />;
    }
  };

  return (
    <div className="bg-tdetails-svg bg-fixed w-full pt-36 pb-10 flex items-center justify-center min-h-screen">
      {renderer()}
    </div>
  );
};

export default TrainingDetails;
