import CustomButton from "@/components/CustomButton";
import avatar from "@/assets/Ellipse 29.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { createColumnHelper } from "@tanstack/react-table";
import {
  ColumnFilter,
  CustomerTransactionHistory,
  SelectedItem,
} from "@/types";
import { toast } from "react-toastify";
import show from "@/assets/Show.svg";
import cloud from "@/assets/download-cloud-line.svg";
import blue_cloud from "@/assets/download-cloud-line 2.svg";
import Button from "@mui/material/Button";
import { useState } from "react";
import date from "@/assets/time-line.svg";
import dropdown from "@/assets/arrow-down-s-line.svg";
import flag from "@/assets/flag-line.svg";
import search from "@/assets/search.svg";
import Tanstack from "@/components/Tanstack";
import { customerTransactionHistory } from "@/constants/customers";
import clsx from "clsx";
import LantanModal from "@/components/Modal";

const ViewCustomer = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);
  const [columnFilters, setColumnFilters] = useState<ColumnFilter[]>([]);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    dateJoined,
    fullName,
    emailAddress,
    verificationStatus,
    walletBalance,
    phoneNumber,
  } = location.state;

  const filterPaymentHandler = (tab: number) => {
    setActiveTab(tab);
    if (tab === 0) {
      setColumnFilters([]);
    } else if (tab === 1) {
      setColumnFilters([{ id: "status", value: "Success" }]);
    } else if (tab === 2) {
      setColumnFilters([{ id: "status", value: "Failed" }]);
    }
  };
  //look into mapping over the column headers to create grid
  const columnHelper = createColumnHelper<CustomerTransactionHistory>();
  const columns = [
    columnHelper.accessor("check", {
      header: ({ table }) => (
        <input
          type="checkbox"
          onChange={(e) => {
            const checked = e.target.checked;
            table.getRowModel().rows.forEach((row) => {
              row.getToggleSelectedHandler()(checked);
            });
          }}
        />
      ),
      cell: ({ row }) => (
        <input
          type="checkbox"
          {...{
            checked: row.getIsSelected(),
            onChange: row.getToggleSelectedHandler(),
          }}
        />
      ),
      size: 59,
    }),
    columnHelper.accessor("dateCreated", {
      header: "Date Created",
      cell: (info) => info.getValue(),
      size: 183,
    }),
    columnHelper.accessor("transactionID", {
      header: "Transaction ID",
      cell: (info) => info.getValue(),
      size: 231,
    }),
    columnHelper.accessor("transactionType", {
      header: "Transaction Type",
      cell: (info) => info.getValue(),
      size: 207,
    }),
    columnHelper.accessor("amount", {
      header: "Amount",
      cell: (info) => info.getValue(),
      size: 198,
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => (
        <span
          className={clsx(
            "text-xs px-2 py-0.5 rounded-lg ",
            info.getValue() === "Success"
              ? "bg-[#ECFDF3] text-[#027A48] w-[66px]"
              : "bg-[#FEF3F2] text-[#B42318] w-[51px]"
          )}
        >
          {info.getValue()}
        </span>
      ),
      size: 160,
    }),
    columnHelper.accessor("actions", {
      header: "Actions",
      cell: (info) => (
        <div className="flex gap-4 items-center">
          <img
            onClick={() => {
              setIsOpen(true);
              setSelectedItem(info.row.original);
            }}
            src={show}
            alt="show details"
            className="w-5 h-5 cursor-pointer"
          />
          <img
            onClick={() =>
              toast.success("Your File has been downloaded successfully")
            }
            src={cloud}
            alt="cloud"
            className="w-6 h-5 cursor-pointer"
          />
        </div>
      ),
      size: 116,
    }),
  ];
  return (
    <div className="rounded-3xl border p-3 overflow-hidden min-h-screen">
      <LantanModal
        title={"Transaction Details"}
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        children={
          <div>
            <div className="flex justify-between gap-4 mb-8">
              <div className="w-1/3">
                <p className="text-xs text-[#7A7A7A]">Date Created</p>
                <p className="font-medium text-lg text-[#2E2E2E]">
                  75yuwet9r237112
                </p>
              </div>
              <div className="w-1/3">
                <p className="text-xs text-[#7A7A7A]">Transaction ID</p>
                <p className="font-medium text-lg text-[#2E2E2E]">
                  75yuwet9r237112
                </p>
              </div>
              <div className="w-1/3">
                <p className="text-xs text-[#7A7A7A]">Customer</p>
                <p className="font-medium text-lg text-[#2E2E2E]">
                  Owolu Opeyemi
                </p>
              </div>
            </div>
            <div className="flex justify-between gap-4 mb-8">
              <div className="w-1/3">
                <p className="text-xs text-[#7A7A7A]">Amount</p>
                <p className="font-medium text-lg text-[#2E2E2E]">
                  N500,000.00
                </p>
              </div>
              <div className="w-1/3">
                <p className="text-xs text-[#7A7A7A]">Description</p>
                <p className="font-medium text-lg text-[#2E2E2E]">
                  Returns/March 31/Bradford
                </p>
              </div>
              <div className="w-1/3">
                <p className="text-xs text-[#7A7A7A]">Payment Status</p>
                <p
                  className="font-medium text-base text-[#2E2E2E] mt-2 text-center w-fit px-2 py-1 rounded-2xl"
                  style={{
                    backgroundColor:
                      selectedItem?.status === "Success"
                        ? "#ECFDF3"
                        : "#FEF3F2",
                    color:
                      selectedItem?.status === "Success"
                        ? "#027A48"
                        : "#B42318",
                  }}
                >
                  {selectedItem?.status}
                </p>
              </div>
            </div>
            <div className="flex justify-between gap-4 mb-8">
              <div className="w-1/3">
                <p className="text-xs text-[#7A7A7A]">Recipient Bank</p>
                <p className="font-medium text-lg text-[#2E2E2E]">
                  Access Bank
                </p>
              </div>
              <div className="w-1/3">
                <p className="text-xs text-[#7A7A7A]">
                  Recipient Account Number
                </p>
                <p className="font-medium text-lg text-[#2E2E2E]">
                  09548765498
                </p>
              </div>
              <div className="w-1/3"></div>
            </div>
            <div
              className="flex items-center justify-end "
              onClick={() =>
                toast.success("Your File has been downloaded successfully")
              }
            >
              <Button
                className="!border-2 !border-[#F0F2F4] !rounded-lg h-[38px] "
                variant="outlined"
                sx={{
                  backgroundColor: "#F1F6FE",
                }}
                startIcon={
                  <img
                    src={blue_cloud}
                    alt="icon"
                    style={{ width: "20px", height: "20px" }}
                  />
                }
              >
                <p className="text-[#206AB2] px-2 py-2 normal-case">
                  Export as CSV
                </p>
              </Button>
            </div>
          </div>
        }
        className={"max-w-[850px]"}
      />
      <div className="rounded-lg border p-3">
        <div className="flex justify-between items-center">
          <p className="text-[#5C5C5C] text-sm">Personal Information</p>
          <div className="flex gap-3">
            <CustomButton
              label="Update Details"
              bgColor="#075AAA"
              onClick={() => navigate("/admin/customers/update")}
            />
            <CustomButton
              label="Reset Password"
              bgColor="#F1F6FE"
              textColor="#206AB2"
            />
          </div>
        </div>
        <div className="flex mt-3 w-full mb-10">
          <img
            src={avatar}
            alt="avatar"
            width={60}
            height={60}
            className="object-contain mr-5"
          />
          <div className="grid grid-cols-4 w-full">
            <div>
              <h1 className="text-[#475467] text-sm">Full Name</h1>
              <p className="text-[#2E2E2E] font-medium mb-7">{fullName}</p>
            </div>
            <div>
              <h1 className="text-[#475467] text-sm">Phone Number</h1>
              <p className="text-[#2E2E2E] font-medium">{phoneNumber}</p>
            </div>
            <div>
              <h1 className="text-[#475467] text-sm">Email Address</h1>
              <p className="text-[#2E2E2E] font-medium">{emailAddress}</p>
            </div>
            <div className="">
              <h1 className="text-[#475467] text-sm">Verification Status</h1>
              <p
                className={clsx(
                  "rounded-2xl font-medium whitespace-nowrap text-sm",
                  verificationStatus === "Verified"
                    ? "text-[#14AE5C] bg-[#ECFDF3] w-[77px] py-0.5 px-2"
                    : "text-[#206AB2] w-[150px] cursor-pointer"
                )}
              >
                {verificationStatus === "Verified"
                  ? verificationStatus
                  : "Approve Verification"}
              </p>
            </div>
            <div>
              <h1 className="text-[#475467] text-sm">Wallet Balance (N)</h1>
              <p className="text-[#2E2E2E] font-medium">{walletBalance}</p>
            </div>
            <div>
              <h1 className="text-[#475467] text-sm">Date Joined</h1>
              <p className="text-[#2E2E2E] font-medium">{dateJoined}</p>
            </div>
            <div>
              <h1 className="text-[#475467] text-sm">Date of Birth</h1>
              <p className="text-[#2E2E2E] font-medium">12/08/24</p>
            </div>
          </div>
        </div>
        <div className="mt-4 flex">
          <div className="w-1/2">
            <p className="text-[#5C5C5C] text-sm mb-4">Other Information</p>
            <div className="grid grid-cols-3">
              <div>
                <h1 className="text-[#7A7A7A] text-sm">BVN Number</h1>
                <p>22014875644</p>
              </div>
              <div>
                <h1 className="text-[#7A7A7A] text-sm">ID Number</h1>
                <p>22014875644</p>
              </div>
              <div>
                <h1 className="text-[#7A7A7A] text-sm">
                  ID Verification Upload
                </h1>
                <p className="text-[#2E2E2E]">
                  Img21.jpg <span className="text-xs text-[#075AAA]">View</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <p className="text-[#5C5C5C] text-sm mb-4">Payment Information</p>
            <div className="grid grid-cols-3">
              <div>
                <h1 className="text-[#7A7A7A] text-sm">Bank Name</h1>
                <p>First Bank</p>
              </div>
              <div>
                <h1 className="text-[#7A7A7A] text-sm">Account Number</h1>
                <p>0778452475</p>
              </div>
              <div>
                <h1 className="text-[#7A7A7A] text-sm">Account Name</h1>
                <p className="text-[#2E2E2E]">{fullName}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg border p-2 mt-4">
        <div className="pt-3 px-3">
          <div className="flex bg-white justify-between">
            <p className="text-[#1F1F1F] text-lg font-medium items-center justify-start mb-6">
              Transaction History
            </p>
            <div className="space-x-4">
              <Button
                className="!border-2 !border-[#F0F2F4] !rounded-lg h-[38px]"
                variant="outlined"
                startIcon={
                  <img
                    src={cloud}
                    alt="icon"
                    style={{ width: "20px", height: "20px" }}
                  />
                }
              >
                <p
                  className="text-[#3D3D3D] px-2 py-2 capitalize"
                  onClick={() =>
                    toast.success("Your File has been downloaded successfully")
                  }
                >
                  Export
                </p>
              </Button>
            </div>
          </div>
          <div className="flex mb-4 cursor-pointer w-fit">
            <p
              onClick={() => filterPaymentHandler(0)}
              className={`text-sm mr-4 cursor-pointer ${
                activeTab === 0
                  ? "text-[#075AAA] border-b-2 border-[#075AAA]"
                  : "text-[#5C5C5C]"
              }`}
            >
              All Payments
            </p>
            <p
              onClick={() => filterPaymentHandler(1)}
              className={`text-sm mr-4 cursor-pointer ${
                activeTab === 1
                  ? "text-[#075AAA] border-b-2 border-[#075AAA]"
                  : "text-[#5C5C5C] "
              }`}
            >
              Success
            </p>
            <p
              onClick={() => filterPaymentHandler(2)}
              className={`text-sm cursor-pointer ${
                activeTab === 2
                  ? "text-[#075AAA] border-b-2 border-[#075AAA]"
                  : "text-[#5C5C5C]"
              }`}
            >
              Failed
            </p>
          </div>
          <div className="flex gap-4 justify-between items-center">
            <div className="flex gap-4">
              <Button
                className="mr-2 h-[40px] !border !border-[#F0F2F4] !rounded-lg"
                variant="outlined"
                startIcon={
                  <img
                    src={date}
                    alt="icon"
                    style={{ width: "16px", height: "16px" }}
                  />
                }
                endIcon={
                  <img
                    src={dropdown}
                    alt="icon"
                    style={{ width: "16px", height: "16px" }}
                  />
                }
              >
                <p className="text-[#1F1F1F] capitalize">Date range</p>
              </Button>
              <Button
                className="h-[40px] !border !border-[#F0F2F4] !rounded-lg"
                variant="outlined"
                startIcon={
                  <img
                    src={flag}
                    alt="icon"
                    style={{ width: "16px", height: "16px" }}
                  />
                }
                endIcon={
                  <img
                    src={dropdown}
                    alt="icon"
                    style={{ width: "16px", height: "16px" }}
                  />
                }
              >
                <p className="text-[#1F1F1F] capitalize">Status</p>
              </Button>
            </div>
            <div className="relative flex h-[45px]">
              <img
                src={search}
                alt="search icon"
                className="absolute top-[13px] left-[15px]"
              />
              <input
                type="text"
                placeholder="Search by amount, payment method..."
                className="pl-12 w-[400px] bg-[#FBFBFB] placeholder:text-xs placeholder:font-extralight"
              />
            </div>
          </div>
        </div>
        <Tanstack
          rows={customerTransactionHistory}
          columns={columns}
          setColumnFilters={setColumnFilters}
          columnFilters={columnFilters}
        />
      </div>
    </div>
  );
};

export default ViewCustomer;
