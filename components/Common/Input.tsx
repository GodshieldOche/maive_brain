import React from "react";

interface Props {
  name: string;
  label: string;
  value: string;
  placeholder: string;
  handelChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: React.HTMLInputTypeAttribute;
}

const Input: React.FC<Props> = ({
  name,
  label,
  value,
  placeholder,
  handelChange,
  type = "text",
}) => {
  return (
    <div className="flex flex-col gap-y-3 w-full">
      <h1 className="small_text text-white">{label}</h1>
      <input
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={handelChange}
        name={name}
        className="py-4 outline-none px-4 text-base  !text-white font-SpaceG placeholder:font-SpaceG rounded-[15px] bg-primaryGreen "
      />
    </div>
  );
};

export default Input;
