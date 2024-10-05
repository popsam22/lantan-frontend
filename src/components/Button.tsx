import { ButtonProps } from "../types";
import clsx from "clsx";
import addDocument from "../assets/Plus.png";

const Button = ({ label, bgColor }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "flex justify-evenly items-center w-[173px] h-[34px] p-2 text-[#206AB2] font-semibold text-xs whitespace-nowrap rounded-lg bg-[#075AAA] hover:cursor-pointer",
        bgColor && "text-[#206AB2] bg-[#F1F6FE]"
      )}
    >
      <img src={addDocument} alt="add document" width={16} height={16} />
      {label}
    </button>
  );
};

export default Button;
