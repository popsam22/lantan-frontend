import { CheckboxInputProps } from "../types";

const CheckboxInput = ({ label, onChange, checked }: CheckboxInputProps) => {
  return (
    <div className="flex mb-2.5">
      <input
        type="checkbox"
        value={label}
        name={label}
        onChange={onChange}
        checked={checked}
        className="mr-1 pr-2 accent-[#00142E]"
      />
      <label
        htmlFor={label}
        className="text-[#5C5C5C] text-xs whitespace-nowrap font-light"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckboxInput;
