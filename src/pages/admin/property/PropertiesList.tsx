import search from "../../../assets/Search_Magnifying_Glasssearch.png";
import { createColumnHelper } from "@tanstack/react-table";
import show from "../../../assets/_Button baseshow.png";
import edit from "../../../assets/edit-2.png";
import { rows } from "../../../constants/property";
import Tanstack from "../../../components/Tanstack";
import { Property } from "../../../types";
import clsx from "clsx";
import { DeleteConfirmationPopover } from "./DeletePropertyConfirmation";
import { useNavigate } from "react-router-dom";

const PropertiesList = () => {
  const navigate = useNavigate();
  const handleDeleteConfirm = () => {
    console.log("Delete confirmed");
  };

  const handleDeleteCancel = () => {
    console.log("Delete cancelled");
  };
  const columnHelper = createColumnHelper<Property>();
  const columns = [
    columnHelper.accessor("dateAdded", {
      header: "Date Added",
      cell: (info) => info.getValue(),
      size: 125,
    }),
    columnHelper.accessor("propertyName", {
      header: "Property Name",
      cell: (info) => info.getValue(),
      size: 207,
    }),
    columnHelper.accessor("address", {
      header: "Address",
      cell: (info) => info.getValue(),
      size: 217,
    }),
    columnHelper.accessor("unitsLeft", {
      header: "Units Left",
      cell: (info) => info.getValue(),
      size: 107,
    }),
    columnHelper.accessor("propertyType", {
      header: "Property Type",
      cell: (info) => (
        <span
          className={clsx(
            "rounded-2xl p-1 whitespace-nowrap text-xs",
            info.getValue() === "Property Purchase"
              ? "text-[#075AAA] bg-[#FAFCFF]"
              : " text-[#363F72] bg-[#F8F9FC]"
          )}
        >
          {info.getValue()}
        </span>
      ),
      size: 221,
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => (
        <span
          className={clsx(
            "px-2 py-1 rounded-2xl text-xs whitespace-nowrap flex items-center",
            info.getValue() === "Still Selling"
              ? "text-[#027A48] bg-[#ECFDF3]"
              : "text-[#B42318] bg-[#FEF3F2]"
          )}
        >
          <div
            className={clsx(
              "w-2 h-2 rounded-full border mr-2",
              info.getValue() === "Still Selling"
                ? "bg-[#12B76A]"
                : "bg-[#F04438] mr-1"
            )}
          />
          {info.getValue()}
        </span>
      ),
      size: 120,
    }),
    columnHelper.accessor("actions", {
      header: "Actions",
      cell: () => (
        <div className="flex gap-1 justify-center items-center">
          <img
            src={show}
            alt="show"
            className="w-9 h-9"
            onClick={() => navigate("/admin/property/view")}
          />
          <DeleteConfirmationPopover
            onConfirm={handleDeleteConfirm}
            onCancel={handleDeleteCancel}
          />
          <img src={edit} alt="edit" className="w-5 h-5" />
        </div>
      ),
    }),
  ];

  return (
    <div className="p-2 overflow-auto bg-[#FCFCFD] border rounded-3xl">
      <div className="border m-1 rounded-xl pt-3">
        <div className="flex px-4 justify-between bg-white">
          <div className="flex items-center">
            <h1 className="text-[#1F1F1F] text-lg mr-2">Properties</h1>
            <p className="text-[#075AAA] text-center rounded-2xl bg-[#F1F6FE] text-xs p-2">
              100 properties
            </p>
          </div>
          <div className="flex items-center w-[411px] border-lg border p-1">
            <img
              src={search}
              alt="search"
              width={20}
              height={20}
              className="object-contain mr-2"
            />
            <input
              className="w-full placeholder:text-sm placeholder:font-light placeholder:text-[#A3A3A3] placeholder:whitespace-nowrap outline-none p-1"
              placeholder="Search by property name ......."
            />
          </div>
        </div>
        <Tanstack columns={columns} rows={rows} />
      </div>
    </div>
  );
};

export default PropertiesList;
