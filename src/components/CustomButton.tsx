import { CustomButtonProps } from "@/types";
import clsx from "clsx";

const CustomButton = ({
  label,
  bgColor,
  textColor,
  onClick,
}: CustomButtonProps) => {
  return (
    <div>
      <button
        className={clsx(
          "w-[178px] font-semibold text-sm rounded-lg p-3 mb-2 hover:cursor-pointer",
          `bg-[${bgColor}]`,
          textColor ? `text-[${textColor}]` : "text-[#fff]"
        )}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default CustomButton;
