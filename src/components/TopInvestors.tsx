import { TopInvestorsProps } from "../types";

const TopInvestors = ({
  name,
  amount,
  title,
  slots,
  imgUrl,
}: TopInvestorsProps) => {
  return (
    <div className="flex justify-between items-center border-b last:border-b-0 p-3 border-[#F5F5F5] max-w-[388px]">
      <div className="flex gap-1">
        <img
          src={imgUrl}
          alt="avatar"
          width={32}
          height={32}
          className="object-contain"
        />
        <div className="flex flex-col">
          <p className="text-[#3D3D3D] text-xs">{name}</p>
          <p className="text-xs text-[#A3A3A3]">{amount}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-[#A3A3A3] text-xs">{title}</p>
        <p className="text-[#3D3D3D] text-xs">{slots}</p>
      </div>
    </div>
  );
};

export default TopInvestors;
