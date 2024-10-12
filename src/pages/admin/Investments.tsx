import { Button } from "@mui/material";
import { useState } from "react";
import cloud from "../../assets/download-cloud-line.svg";
import blue_cloud from "../../assets/download-cloud-line 2.svg";
import InvestmentCard from "../../components/InvestmentCard";
import flag from "../../assets/flag-line.svg";
import dropdown from "../../assets/arrow-down-s-line.svg";
import search from "../../assets/search.svg";
import date from "../../assets/time-line.svg";
import show from "../../assets/Show.svg";
import { investmentRow } from "../../constants/investment";
import Tanstack from "@/components/Tanstack";
import {
  createColumnHelper,
  AccessorKeyColumnDef,
} from "@tanstack/react-table";
import { Investment, ColumnFilter, SelectedItem } from "@/types";
import clsx from "clsx";
import { toast } from "react-toastify";
import LantanModal from "@/components/Modal";

const Investments = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [columnFilters, setColumnFilters] = useState<ColumnFilter[]>([]);

  const filterPaymentHandler = (tab: number) => {
    setActiveTab(tab);
    if (tab === 0) {
      setColumnFilters([]);
    } else if (tab === 1) {
      setColumnFilters([{ id: "investmentType", value: "Co-ownership" }]);
    } else if (tab === 2) {
      setColumnFilters([{ id: "investmentType", value: "Property Purchase" }]);
    }
  };

  const columnHelper = createColumnHelper<Investment>();
  const columns: AccessorKeyColumnDef<Investment, any>[] = [
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
    columnHelper.accessor("propertyInvested", {
      header: "Property Invested",
      cell: (info) => info.getValue(),
      size: 183,
    }),
    columnHelper.accessor("customer", {
      header: "Customer",
      cell: (info) => info.getValue(),
      size: 183,
    }),
    columnHelper.accessor("amount", {
      header: "Amount",
      cell: (info) => info.getValue(),
      size: 183,
    }),
    columnHelper.accessor("investmentType", {
      header: "Investment Type",
      cell: (info) => (
        <span
          className={clsx(
            "rounded-2xl px-2 py-0.5 whitespace-nowrap text-xs",
            info.getValue() === "Property Purchase"
              ? "text-[#075AAA] bg-[#FAFCFF]"
              : "text-[#363F72] bg-[#F8F9FC]"
          )}
        >
          {info.getValue()}
        </span>
      ),
      size: 183,
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
      size: 183,
    }),
  ];

  return (
    <div className="bg-[#FCFCFD] border rounded-3xl m-3 p-3 overflow-hidden">
      <LantanModal
        title={"Investment Details"}
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
                <p className="text-xs text-[#7A7A7A]">Customer</p>
                <p className="font-medium text-lg text-[#2E2E2E]">
                  Owolu Opeyemi
                </p>
              </div>
              <div className="w-1/3">
                <p className="text-xs text-[#7A7A7A]">Property Invested</p>
                <p className="font-medium text-lg text-[#2E2E2E]">
                  Bradford Apartment
                </p>
              </div>
            </div>
            <div className="flex justify-between gap-4 mb-8">
              <div className="w-1/3">
                <p className="text-xs text-[#7A7A7A]">Property Type</p>
                <p
                  className="font-medium text-sm text-[#2E2E2E] mt-2 text-center w-fit px-1.5 py-0.5 rounded-2xl"
                  style={{
                    backgroundColor:
                      selectedItem?.investmentType === "Property Purchase"
                        ? "#FAFCFF"
                        : "#F8F9FC",
                    color:
                      selectedItem?.investmentType === "Property Purchase"
                        ? "#075AAA"
                        : "#363F72",
                  }}
                >
                  {selectedItem?.investmentType}
                </p>
              </div>
              <div className="w-1/3">
                <p className="text-xs text-[#7A7A7A]">Amount Paid</p>
                <p className="font-medium text-lg text-[#2E2E2E]">
                  N10,000,000.00
                </p>
              </div>
              <div className="w-1/3">
                <p className="text-xs text-[#7A7A7A]">Outstanding</p>
                <p className="text-[#F04438] text-lg font-medium">
                  N15,000,000.00
                </p>
              </div>
            </div>
            <div className="flex justify-between gap-4 mb-8">
              <div className="w-1/3">
                <p className="text-xs text-[#7A7A7A]">Transaction ID</p>
                <p className="font-medium text-lg text-[#2E2E2E]">
                  75yuwet9r237112
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
              <div className="w-1/3">
                <p className="text-xs text-[#7A7A7A]">Payment Method</p>
                <p className="font-medium text-lg text-[#2E2E2E]">
                  Card Payment
                </p>
              </div>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        <InvestmentCard
          title="Total Property Purchase"
          amount="N300,000,000.00"
          profit={true}
          icon="wallet"
        />
        <InvestmentCard
          title="Total Co-Ownership"
          amount="N60,000,000.00"
          profit={false}
          icon="wallet"
        />
        <InvestmentCard
          title="Total Cash Investment "
          amount="60,000,000.00"
          profit={false}
          icon="wallet"
        />
      </div>
      <div className="border rounded-2xl p-3 bg-white">
        <div className="flex justify-between mb-2">
          <p className="text-[#1F1F1F] text-lg font-medium items-center justify-start">
            Investment History
          </p>
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
              className="text-[#3D3D3D] px-2 py-2 normal-case"
              onClick={() =>
                toast.success("Your File has been downloaded successfully")
              }
            >
              Export
            </p>
          </Button>
        </div>
        <div className="flex mb-4">
          <p
            onClick={() => filterPaymentHandler(0)}
            className={`text-sm mr-4 cursor-pointer ${
              activeTab === 0
                ? "text-[#075AAA] border-b-2 border-[#075AAA]"
                : "text-[#5C5C5C]"
            }`}
          >
            All
          </p>
          <p
            onClick={() => filterPaymentHandler(1)}
            className={`text-sm mr-4 cursor-pointer ${
              activeTab === 1
                ? "text-[#075AAA] border-b-2 border-[#075AAA]"
                : "text-[#5C5C5C]"
            }`}
          >
            Co-Ownership
          </p>
          <p
            onClick={() => filterPaymentHandler(2)}
            className={`text-sm mr-4 cursor-pointer ${
              activeTab === 2
                ? "text-[#075AAA] border-b-2 border-[#075AAA]"
                : "text-[#5C5C5C]"
            }`}
          >
            Property Purchase
          </p>
        </div>
        <div className="flex justify-between">
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
              className="mr-2 h-[40px] !border !border-[#F0F2F4] !rounded-lg"
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
              <p className="text-[#1F1F1F] capitalize">Type</p>
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
        <Tanstack
          rows={investmentRow}
          columns={columns}
          columnFilters={columnFilters}
          setColumnFilters={setColumnFilters}
        />
      </div>
    </div>
  );
};

export default Investments;
