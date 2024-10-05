import { ButtonProps } from "../types";
import clsx from "clsx";

const Button = ({ label, bgColor }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "w-[146px] h-[34px] text-[#206AB2] font-semibold text-xs whitespace-nowrap rounded-lg bg-[#075AAA] hover:cursor-pointer",
        bgColor && "text-[#206AB2] bg-[#F1F6FE]"
      )}
    >
      {label}
    </button>
  );
};

export default Button;
