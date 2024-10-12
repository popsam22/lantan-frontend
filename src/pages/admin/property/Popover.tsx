import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import trash from "../../../assets/trash-2.svg";
import line from "../../../assets/more-vertical.svg";
import clsx from "clsx";

export const ConfirmationPopover = ({
  onConfirm,
  onCancel,
  title,
  leftText,
  rightText,
  review = false,
}: any) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <img
          src={review === true ? line : trash}
          alt="delete"
          className="w-4 h-4 cursor-pointer"
        />
      </PopoverTrigger>
      <PopoverContent
        className="w-60 bg-[#FCFCFC] rounded-lg shadow-lg p-0 m-1"
        align="center"
        sideOffset={-25}
        side="left"
      >
        <div className="grid">
          <div className=" bg-[#F5F5F5] p-2 rounded-t-lg">
            <h1 className="text-[#5C5C5C] text-sm text-center font-light">
              {title}
            </h1>
          </div>
          <div className="grid grid-cols-2 divide-x-2 bg-white p-3 rounded-b-lg">
            <p
              className={clsx(
                "text-center text-sm font-medium cursor-pointer",
                leftText == "Resolved" ? "text-[#075AAA]" : "text-[#344054]"
              )}
              onClick={onCancel}
            >
              {leftText}
            </p>
            <p
              className="text-[#EB5757] text-center text-sm font-medium pl-2 cursor-pointer"
              onClick={onConfirm}
            >
              {rightText}
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
