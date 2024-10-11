import Button from "@mui/material/Button";
import search from "../../assets/Search_Magnifying_Glasssearch.png";
import date from "../../assets/time-line.svg";
import cloud from "../../assets/download-cloud-line.svg";
import flag from "../../assets/flag-line.svg";
import dropdown from "../../assets/arrow-down-s-line.svg";
import { Payment, PaymentsColumnFilter } from "../../types";
import { createColumnHelper } from "@tanstack/react-table";
import { rows } from "../../constants/payments";
import { useState } from "react";
import show from "../../assets/_Button baseshow.png";
import LantanModal from "../../components/Modal";
import { toast } from "react-toastify";
import { SelectedItem } from "../../types";
import Tanstack from "@/components/Tanstack";
import clsx from "clsx";

const Payments = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);
  const [columnFilters, setColumnFilters] = useState<PaymentsColumnFilter[]>(
    []
  );

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

  const columnHelper = createColumnHelper<Payment>();
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
      header: "Date Added",
      cell: (info) => info.getValue(),
      size: 183,
    }),
    columnHelper.accessor("transactionId", {
      header: "Transaction ID",
      cell: (info) => info.getValue(),
      size: 231,
    }),
    columnHelper.accessor("customer", {
      header: "Customer",
      cell: (info) => info.getValue(),
      size: 150,
    }),
    columnHelper.accessor("amount", {
      header: "Amount",
      cell: (info) => info.getValue(),
      size: 150,
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => (
        <span
          className={clsx(
            "rounded-2xl px-2 py-0.5 whitespace-nowrap text-xs",
            info.getValue() === "Success"
              ? "text-[#027A48] bg-[#ECFDF3]"
              : "text-[#B42318] bg-[#FEF3F2]"
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
        <div className="flex gap-1 items-center">
          <img
            onClick={() => {
              setIsOpen(true);
              setSelectedItem(info.row.original);
            }}
            src={show}
            alt="show details"
            className="w-10 h-10 cursor-pointer"
          />
          <img
            onClick={() =>
              toast.success("Your File has been downloaded successfully")
            }
            src={cloud}
            alt="cloud"
            className="w-5 h-5 cursor-pointer"
          />
        </div>
      ),
      size: 116,
    }),
  ];

  return (
    <div className="p-2 overflow-auto bg-[#FCFCFD] border rounded-3xl">
      <div className="rounded-xl m-1 bg-[#FFFFFF] border">
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
                  <p className="text-xs text-[#7A7A7A]">Amount Paid</p>
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
                      src={cloud}
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
        <div className="pt-6 px-6">
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
          columns={columns}
          rows={rows}
          columnFilters={columnFilters}
          setColumnFilters={setColumnFilters}
        />
      </div>
    </div>
  );
};

export default Payments;
