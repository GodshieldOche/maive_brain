import { TrainingProps } from "@/interface";
import React, { useState } from "react";
import Input from "../Common/Input";
import Button from "../Common/Button";

const PersonalDetails: React.FC<TrainingProps> = ({ action }) => {
  const [data, setData] = useState({
    full_name: "",
    email: "",
    phone_no: "",
    for: "",
    relationship: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(
      (prev) =>
        (prev = {
          ...prev,
          [e.target.name]: e.target.value,
        })
    );
  };

  const isEmpty = Object.keys(data).find((key) => !(data as any)[key]);
  const handleSubmit = () => {
    if (isEmpty) {
      return;
    }

    action();
  };

  return (
    <div className="min-h-[45vh] w-[50vw] rounded-[15px] gap-y-8 flex flex-col items-center py-6 px-9 bg-[#22685D] ">
      <h1 className="text-[28px] font-semibold text-white leading-[70px] ">
        Enter Personal Details
      </h1>
      <div className="w-full flex flex-col gap-y-6">
        <Input
          name="full_name"
          placeholder="Enter Full Name"
          label="Full Name"
          value={data.full_name}
          handelChange={handleChange}
        />
        <div className="grid grid-cols-2 gap-6">
          <Input
            name="email"
            placeholder="Enter Email Address"
            label="Email Address"
            value={data.email}
            type="email"
            handelChange={handleChange}
          />
          <Input
            name="phone_no"
            placeholder="Enter Phone Number"
            label="Phone Number"
            value={data.phone_no}
            handelChange={handleChange}
          />
          <Input
            name="for"
            placeholder="Adult"
            label="Who is the assessment for?"
            value={data.for}
            handelChange={handleChange}
          />
          <Input
            name="relationship"
            placeholder="Son"
            label="Relationship to that person"
            value={data.relationship}
            handelChange={handleChange}
          />
        </div>
      </div>
      <Button
        text="Next"
        styles={{
          backgroundColor: "#FF6D6A",
          width: "254px",
        }}
        action={handleSubmit}
      />
    </div>
  );
};

export default PersonalDetails;
