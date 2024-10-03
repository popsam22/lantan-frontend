import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const OverviewSkeleton = () => {
  return (
    <div className="p-3 overflow-hidden bg-[#FCFCFD] border min-h-screen rounded-3xl">
      <Skeleton width={300} height={20} className="mb-2" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        {Array(4)
          .fill()
          .map((_, index) => (
            <div key={index} className="p-3 border rounded-lg">
              <Skeleton height={20} className="mb-2" />
              <Skeleton width="60%" height={30} />
            </div>
          ))}
      </div>
      <div className="flex gap-3 p-1 mb-4">
        <div className="flex flex-col p-3 border bg-[#FCFCFD] rounded-lg w-full h-[290px]">
          <Skeleton width="40%" height={20} className="mb-2" />
          <Skeleton height={240} />
        </div>
        <div className="p-3 flex flex-col bg-[#FCFCFD] border rounded-lg w-full container h-[290px]">
          <Skeleton width="40%" height={20} className="mb-2" />
          <div className="rounded-lg border bg-white p-2 h-[240px]">
            {Array(3)
              .fill()
              .map((_, index) => (
                <div key={index} className="mb-2">
                  <Skeleton height={20} className="mb-1" />
                  <Skeleton width="80%" height={15} />
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="flex gap-4 p-1">
        <div className="flex flex-col p-2 border bg-[#FCFCFD] rounded-lg w-full">
          <Skeleton width="50%" height={20} className="mb-3" />
          <Skeleton height={200} />
        </div>
        <div className="flex flex-col p-2 border bg-[#FCFCFD] rounded-lg w-full max-w-[404px]">
          <Skeleton width="50%" height={20} className="mb-2" />
          {Array(3)
            .fill()
            .map((_, index) => (
              <div key={index} className="mb-2">
                <Skeleton
                  circle={true}
                  height={40}
                  width={40}
                  className="mr-2"
                />
                <Skeleton width="70%" height={20} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewSkeleton;
