import Button from "@mui/material/Button";
import search from "../../assets/Search_Magnifying_Glasssearch.png";
import date from "../../assets/time-linedate.png";
import add from "../../assets/download-cloud-lineadd.png";
import cloud from "../../assets/download-cloud-linecloud.png";
import flag from "../../assets/flag-lineflag.png";
import dropdown from "../../assets/arrow-down-s-linedropdown.png";
import Table from "../../components/Table";
import { rows } from "../../constants/payments";
import { useState } from "react";
import show from "../../assets/_Button baseshow.png";
import { GridColDef } from "@mui/x-data-grid";
import LatanaModal from "../../components/Modal";
import { toast } from "react-toastify";
import { SelectedItem } from "../../types";

const Payments = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);

  const columns: GridColDef[] = [
    {
      field: "dateCreated",
      headerName: "Date Created",
      width: 183,
    },
    {
      field: "transactionId",
      headerName: "Transaction ID",
      width: 231,
    },
    {
      field: "customer",
      headerName: "Customer",
      width: 150,
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      renderCell: (prop) => (
        <button
          style={{
            backgroundColor: prop.value === "Success" ? "#ECFDF3" : "#FEF3F2",
            color: prop.value === "Success" ? "#027A48" : "#B42318",
            borderRadius: "50%",
            width: "65px",
          }}
        >
          {prop.value}
        </button>
      ),
      width: 160,
    },
    {
      field: "actions",
      headerName: "Actions",
      renderCell: (prop) => (
        <div className="flex gap-1 justify-center items-center">
          <img
            onClick={() => {
              setIsOpen(true);
              setSelectedItem(prop?.row);
            }}
            src={show}
            alt="show details"
            className="w-10 h-10"
          />
          <img
            onClick={() =>
              toast.success("Your File has been downloaded successfully")
            }
            src={cloud}
            alt="cloud"
            className="w-5 h-5"
          />
        </div>
      ),
      width: 116,
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 m-3">
      <LatanaModal
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
                <p className="font-medium text-[18px]">75yuwet9r237112</p>
              </div>
              <div className="w-1/3">
                <p className="text-xs text-[#7A7A7A]">Date Created</p>
                <p className="font-medium text-[18px]">75yuwet9r237112</p>
              </div>
              <div className="w-1/3">
                <p className="text-xs text-[#7A7A7A]">Date Created</p>
                <p className="font-medium text-[18px]">75yuwet9r237112</p>
              </div>
            </div>
            <div className="flex justify-between gap-4 mb-8">
              <div className="w-1/3">
                <p className="text-xs text-[#7A7A7A]">Date Created</p>
                <p className="font-medium text-[18px]">75yuwet9r237112</p>
              </div>
              <div className="w-1/3">
                <p className="text-xs text-[#7A7A7A]">Date Created</p>
                <p className="font-medium text-[18px]">75yuwet9r237112</p>
              </div>
              <div className="w-1/3">
                <p className="text-xs text-[#7A7A7A]">Date Created</p>
                <p
                  className="font-medium text-[18px] text-center w-fit px-4 py-1 rounded-2xl"
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
                <p className="text-xs text-[#7A7A7A]">Date Created</p>
                <p className="font-medium text-[18px]">75yuwet9r237112</p>
              </div>
              <div className="w-1/3">
                <p className="text-xs text-[#7A7A7A]">Date Created</p>
                <p className="font-medium text-[18px]">75yuwet9r237112</p>
              </div>
              <div className="w-1/3">
                <p className="text-xs text-[#7A7A7A]">Date Created</p>
                <p className="font-medium text-[18px]">75yuwet9r237112</p>
              </div>
            </div>
          </div>
        }
        className={""}
      />
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
                src={add}
                alt="icon"
                style={{ width: "16px", height: "16px" }}
              />
            }
          >
            <p className="text-[#3D3D3D] px-2 py-2 capitalize">Add Payment</p>
          </Button>
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
            <p className="text-[#3D3D3D] px-2 py-2 capitalize">Export</p>
          </Button>
        </div>
      </div>
      <div className="flex mb-4 cursor-pointer w-fit">
        <p
          onClick={() => setActiveTab(0)}
          className={`text-sm mr-4 text-[#5C5C5C]  cursor-pointer ${
            activeTab === 0 && "text-[#075AAA] border-b-2 border-[#075AAA]"
          }`}
        >
          All Payments
        </p>
        <p
          onClick={() => setActiveTab(1)}
          className={`mr-4 text-sm text-[#5C5C5C] cursor-pointer ${
            activeTab === 1 && "text-[#075AAA] border-b-2 border-[#075AAA]"
          }`}
        >
          Success
        </p>
        <p
          onClick={() => setActiveTab(2)}
          className={`text-sm text-[#5C5C5C] cursor-pointer ${
            activeTab === 2 && "text-[#075AAA] border-b-2 border-[#075AAA]"
          }`}
        >
          Failed
        </p>
      </div>
      <div className="flex gap-4 justify-between items-center mb-6">
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
      <Table rows={rows} columns={columns} />
    </div>
  );
};

export default Payments;
