import { Box, Button } from "@mui/material";
import cloud from "../../assets/download-cloud-linecloud.png";
import InvestmentCard from "../../components/InvestmentCard";
import flag from "../../assets/flag-lineflag.png";
import dropdown from "../../assets/arrow-down-s-linedropdown.png";
import search from "../../assets/Search_Magnifying_Glasssearch.png";
import date from "../../assets/time-linedate.png";
import Table from "../../components/Table";
import { investmentColumns, investmentRow } from "../../constants/investment";

const Investments = () => {
  return (
    <div className="bg-white rounded-xl p-6 m-3 h-[96vh]">
      <div className="flex mb-2">
        <Box sx={{ display: "flex", gap: "16px" }}>
          <InvestmentCard
            title="Total Property Purchase"
            amount="N300,000,000.00"
            profit={true}
          />
          <InvestmentCard
            title="Total Co-Ownership"
            amount="N60,000,000.00"
            profit={false}
          />
          <InvestmentCard
            title="Total Cash Investment"
            amount="N60,000,000.00"
            profit={false}
          />
        </Box>
      </div>
      <div>
        <div className="flex bg-white justify-between">
          <p className="text-[#1F1F1F] text-lg font-medium items-center justify-start">
            Investment History
          </p>
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
        <div className="flex mb-4">
          <p className="mr-4 text-sm text-[#5C5C5C]">All</p>
          <p className="mr-4 text-sm text-[#5C5C5C]">Co-Ownership</p>
          <p className="text-sm text-[#075AAA] underline mr-4">
            Property Purchase
          </p>
          <p className="text-sm text-[#5C5C5C]">Cash Investment</p>
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
      </div>
      <Table rows={investmentRow} columns={investmentColumns} />
    </div>
  );
};

export default Investments;
