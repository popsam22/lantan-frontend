import { CheckboxInputProps } from "../types";

const CheckboxInput = ({ label }: CheckboxInputProps) => {
  return (
    <div className="flex mb-2.5">
      <input
        type="checkbox"
        value={label}
        name={label}
        className="mr-1 pr-2 "
      />
      <label
        htmlFor={label}
        className="text-[#5C5C5C] text-xs whitespace-nowrap"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckboxInput;
