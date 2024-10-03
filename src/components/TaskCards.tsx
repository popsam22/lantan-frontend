import { TaskCardProps } from "../types";

const TaskCards = ({ title, subTitle, button }: TaskCardProps) => {
  return (
    <div className="mb-2 flex justify-between border-b-2 last:border-b-0 p-1">
      <div>
        <h1 className="text-[#3D3D3D] text-sm leading-6 mt-1">{title}</h1>
        <p className="text-xs text-[#A3A3A3] leading-4">{subTitle}</p>
      </div>
      {button && (
        <button className="bg-[#FCFCFC] rounded-lg border px-5 mb-1 max-w-[74px] max-lg:max-w-[34px] justify-center items-center flex text-sm hover:cursor-pointer">
          View
        </button>
      )}
    </div>
  );
};

export default TaskCards;
