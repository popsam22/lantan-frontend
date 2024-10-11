import Tanstack from "@/components/Tanstack";
import { Reviews } from "@/types";
import { createColumnHelper } from "@tanstack/react-table";
import clsx from "clsx";
import { rows } from "@/constants/review";
import { ConfirmationPopover } from "./property/Popover";

const Review = () => {
  const columnHelper = createColumnHelper<Reviews>();
  const columns = [
    columnHelper.accessor("created", {
      header: "Created",
      cell: (info) => info.getValue(),
      size: 203,
    }),
    columnHelper.accessor("description", {
      header: "Description",
      cell: (info) => info.getValue(),
      size: 457,
    }),
    columnHelper.accessor("from", {
      header: "From",
      cell: (info) => info.getValue(),
      size: 290,
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => (
        <span
          className={clsx(
            "text-xs font-medium px-2 py-0.5 rounded-2xl",
            info.getValue() === "Solved"
              ? "text-[#027A48] bg-[#ECFDF3]"
              : "text-[#B42318] bg-[#FEF3F2]"
          )}
        >
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.accessor("actions", {
      header: "Actions",
      cell: (info) => (
        <div>
          <ConfirmationPopover
            title="Action"
            leftText="Resolved"
            rightText="Cancel"
            review={true}
          />
          <p>{info.getValue()}</p>
        </div>
      ),
      size: 82,
    }),
  ];
  return (
    <div className="rounded-3xl border p-3 min-h-screen overflow-hidden">
      <div className="rounded-lg border">
        <Tanstack rows={rows} columns={columns} />
      </div>
    </div>
  );
};

export default Review;
