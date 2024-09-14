import Button from "@mui/material/Button";
import search from "../../assets/Search_Magnifying_Glasssearch.png";
import date from "../../assets/time-linedate.png";
import add from "../../assets/download-cloud-lineadd.png";
import cloud from "../../assets/download-cloud-linecloud.png";
import flag from "../../assets/flag-lineflag.png";
import dropdown from "../../assets/arrow-down-s-linedropdown.png";
import Table from "../../components/Table";
import { columns, rows } from "../../constants/payments";

const Payments = () => {
  return (
    <div className="bg-white rounded-xl p-6 m-3 h-[96vh]">
      <div className="flex bg-white justify-between">
        <p className="text-[#1F1F1F] text-lg font-medium items-center justify-start">
          Transaction History
        </p>
        <div className="space-x-4">
          <Button
            className="shadow-md"
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
            className="shadow-md"
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
      <div className="flex mb-4">
        <p className="text-sm text-[#075AAA] underline mr-4">All Payments</p>
        <p className="mr-4 text-sm text-[#5C5C5C]">Success</p>
        <p className="text-sm text-[#5C5C5C]">Failed</p>
      </div>
      <div className="flex justify-between">
        <div>
          <Button
            className="mr-2"
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
        <div className="flex py-2 px-2">
          <img src={search} alt="search icon" />
          <input
            type="text"
            placeholder="Search by amount, payment method..."
            width={423}
            height={42}
          />
        </div>
      </div>
      <Table rows={rows} columns={columns} />
    </div>
  );
};

export default Payments;
