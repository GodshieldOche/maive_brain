import { TrainingProps } from "@/interface";
import React, { useEffect } from "react";
import Input from "../Common/Input";
import Button from "../Common/Button";
import { useRouter } from "next/navigation";

const PersonalDetails: React.FC<TrainingProps> = ({ data, setData }) => {
  const router = useRouter();

  const unloadListerner = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = "";

    const message =
      "Are you sure you want to leave? Your changes may not be saved.";

    e.returnValue = message;
    return message;
  };

  // Prevent window reload reload or exit
  useEffect(() => {
    window.addEventListener("beforeunload", unloadListerner);

    return () => {
      window.removeEventListener("beforeunload", unloadListerner);
    };
  }, []);

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

    router.push("?step=2");
  };

  return (
    <div className="lg:min-h-[45vh] w-[90vw] lg:w-[50vw] rounded-[15px] gap-y-6 md:gap-y-8 flex flex-col items-center py-6 px-4 md:px-9 bg-[#22685D] ">
      <h1 className="text-xl lg:text-[28px] font-semibold text-white md:leading-[70px] ">
        Enter Personal Details
      </h1>
      <div className="w-full flex flex-col gap-y-4 md:gap-y-6">
        <Input
          name="full_name"
          placeholder="Enter Full Name"
          label="Full Name"
          value={data.full_name}
          handelChange={handleChange}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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
