import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import trash from "../../../assets/trash-2.png";

export const DeleteConfirmationPopover = ({ onConfirm, onCancel }: any) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <img src={trash} alt="delete" className="w-5 h-5 cursor-pointer mr-2" />
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
              Delete property
            </h1>
          </div>
          <div className="grid grid-cols-2 divide-x-2 bg-white p-3 rounded-b-lg">
            <p
              className="text-[#344054] text-center text-sm font-medium cursor-pointer"
              onClick={onCancel}
            >
              No, Cancel
            </p>
            <p
              className="text-[#EB5757] text-center text-sm font-medium pl-2 cursor-pointer"
              onClick={onConfirm}
            >
              Yes, Continue
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
