import Tanstack from "@/components/Tanstack";
import search from "../../../assets/search.svg";
import show from "../../../assets/Show.svg";
import edit from "../../../assets/edit.svg";
import trash from "../../../assets/trash-2.svg";
import add from "../../../assets/download-cloud-line.svg";
import { rows } from "@/constants/customers";
import { createColumnHelper } from "@tanstack/react-table";
import { Customer } from "@/types";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

const Customers = () => {
  const navigate = useNavigate();
  const columnHelper = createColumnHelper<Customer>();
  const columns = [
    columnHelper.accessor("dateJoined", {
      header: "Date Joined",
      cell: (info) => info.getValue(),
      size: 159,
    }),
    columnHelper.accessor("fullName", {
      header: "Full Name",
      cell: (info) => info.getValue(),
      size: 207,
    }),
    columnHelper.accessor("emailAddress", {
      header: "Email Address",
      cell: (info) => info.getValue(),
      size: 183,
    }),
    columnHelper.accessor("phoneNumber", {
      header: "Phone Number",
      cell: (info) => info.getValue(),
      size: 135,
    }),
    columnHelper.accessor("verificationStatus", {
      header: "Verification Status",
      cell: (info) => (
        <span
          className={clsx(
            "px-2 py-1 rounded-2xl text-xs whitespace-nowrap flex items-center",
            info.getValue() === "Pending"
              ? "bg-[#FFFAEB] text-[#B54708] w-[78px]"
              : info.getValue() === "Verified"
              ? "bg-[#ECFDF3] text-[#027A48] w-[76px]"
              : "bg-[#F2F4F7] text-[#344054] w-[98px]"
          )}
        >
          <div
            className={clsx(
              "w-1.5 h-1.5 rounded-full mr-2",
              info.getValue() === "Pending"
                ? "bg-[#B54708]"
                : info.getValue() === "Verified"
                ? "bg-[#027A48]"
                : "bg-[#344054]"
            )}
          />
          {info.getValue()}
        </span>
      ),
      size: 160,
    }),
    columnHelper.accessor("walletBalance", {
      header: "Wallet Balance (N)",
      cell: (info) => info.getValue(),
      size: 154,
    }),
    columnHelper.accessor("actions", {
      header: "Actions",
      cell: (info) => (
        <div className="flex gap-5 items-center justify-start">
          <img
            src={show}
            alt="view"
            className="w-4 h-4 object-contain cursor-pointer"
            onClick={() => info.getValue()}
          />
          <img
            src={trash}
            alt="delete"
            className="w-4 h-4 object-contain cursor-pointer"
          />
          <img
            src={edit}
            alt="edit"
            className="w-4 h-4 object-contain cursor-pointer"
          />
        </div>
      ),
      size: 160,
    }),
  ];
  return (
    <div className="rounded-3xl border overflow-hidden p-3">
      <div className="flex flex-col p-1 border rounded-xl">
        <div className="flex justify-between w-full px-3 pt-3 bg-white">
          <div className="flex items-center">
            <p className="text-[#1F1F1F] text-lg font-medium mr-2">Customers</p>
            <p className="text-[#075AAA] text-xs bg-[#F1F6FE] px-2 py-0.5 rounded-2xl">
              100 customers
            </p>
          </div>
          <div className="flex gap-4">
            <button className="flex gap-1 border cursor-pointer p-2 rounded-lg items-center border-[#E7E6EA]">
              <img src={add} alt="add payment" className="w-4 h-4" />
              <p
                className="text-[#3D3D3D] text-sm"
                onClick={() => navigate("/admin/customers/new")}
              >
                New Customer
              </p>
            </button>
            <div className="flex items-center w-[411px] rounded-lg p-1 cursor-pointer bg-[#FCFCFC]">
              <img
                src={search}
                alt="search"
                width={20}
                height={20}
                className="object-contain mr-2"
              />
              <input
                className="w-full bg-[#FCFCFC] placeholder:text-sm placeholder:font-light placeholder:text-[#A3A3A3] placeholder:whitespace-nowrap outline-none p-1"
                placeholder="Search by name, phone number ......."
              />
            </div>
          </div>
        </div>
        <Tanstack rows={rows} columns={columns} />
      </div>
    </div>
  );
};

export default Customers;
