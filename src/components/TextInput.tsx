import { useState } from "react";
import { InputProps } from "../types";
import clsx from "clsx";

//pick the last child and split the label with ( then color it #397BBB)

const TextInput = ({
  label,
  placeholder,
  bottomText,
  value,
  className,
}: InputProps) => {
  const [change, setChange] = useState(value);
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChange(e.target.value);
  };

  return (
    <div className="flex flex-col mb-1">
      <label className="text-sm text-[#3D3D3D] font-medium mb-2 ">
        {label}
      </label>
      <div
        className={clsx(
          "flex items-center w-full border p-3 rounded-lg mb-3",
          className && `${className}`
        )}
      >
        <input
          type="text"
          placeholder={placeholder}
          value={change}
          onChange={inputChangeHandler}
          className="flex flex-1 outline-none w-full bg-inherit text-sm text-[#1F1F1F] placeholder:text-[#A3A3A3] placeholder:font-light"
        />
      </div>
      <p className="text-[#A3A3A3] text-xs font-light">{bottomText}</p>
    </div>
  );
};

export default TextInput;
