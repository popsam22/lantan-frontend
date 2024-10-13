import { CustomButtonProps } from "@/types";
import clsx from "clsx";

const CustomButton = ({
  label,
  bgColor,
  textColor,
  onClick,
  width,
}: CustomButtonProps) => {
  return (
    <div>
      <button
        className={clsx(
          "font-semibold text-sm rounded-lg p-3 mb-2 hover:cursor-pointer transition-all ease-out duration-300",
          `bg-[${bgColor}]`,
          textColor ? `text-[${textColor}]` : "text-[#fff]",
          width ? `w-[${width}]` : "w-[178px]"
        )}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default CustomButton;
