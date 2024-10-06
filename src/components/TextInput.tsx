import { InputProps } from "../types";

//pick the last child and split the label with ( then color it #397BBB)

const TextInput = ({ label, placeholder, bottomText }: InputProps) => {
  return (
    <div className="flex flex-col mb-1">
      <label className="text-sm text-[#3D3D3D] font-medium mb-2 ">
        {label}
      </label>
      <div className="flex items-center w-full border p-3 rounded-lg mb-3">
        <input
          type="text"
          placeholder={placeholder}
          className="flex flex-1 outline-none w-full text-sm placeholder:text-[#A3A3A3] placeholder:font-light "
        />
      </div>
      <p className="text-[#A3A3A3] text-xs font-light">{bottomText}</p>
    </div>
  );
};

export default TextInput;
