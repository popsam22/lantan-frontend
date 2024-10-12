import CustomButton from "@/components/CustomButton";
import TextInput from "@/components/TextInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import email from "@/assets/mail.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";

const EditCustomer = () => {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  return (
    <div className="rounded-3xl border overflow-hidden p-3">
      <div className="border rounded-lg p-5 w-full">
        <div className="flex">
          <div className="w-1/3">
            <div className="flex gap-2 mb-2">
              <div className="bg-[#075AAA] px-0.5 w-0.5" />
              <p className="text-lg text-[#2E2E2E]">Personal Information</p>
            </div>
            <p className="text-xs text-[#A3A3A3] font-light ml-3">
              Enter Correct Customer Details
            </p>
          </div>
          <div className="max-w-[402px] w-full">
            <label
              htmlFor="email"
              className="flex text-sm text-[#344054] whitespace-nowrap mb-1"
            >
              Full Name
            </label>
            <div className="flex items-center overflow-hidden border p-3 rounded-lg mb-5">
              <input
                type="text"
                placeholder="Enter your name"
                className="flex flex-1 outline-none text-sm text-[#1F1F1F] bg-inherit placeholder:text-[#A3A3A3] placeholder:font-light"
              />
            </div>
            <label htmlFor="email" className="text-sm text-[#344054] flex mb-2">
              Email
            </label>
            <div className="flex items-center overflow-hidden border p-3 rounded-lg mb-5">
              <img
                src={email}
                alt="email"
                width={20}
                height={20}
                className="mr-4"
              />
              <input
                type="text"
                placeholder="Enter your email address"
                className="flex flex-1 outline-none text-sm text-[#1F1F1F] bg-inherit placeholder:text-[#A3A3A3] placeholder:font-light"
              />
            </div>
            <div className="flex flex-col mb-10 w-full">
              <label
                htmlFor="phone-number"
                className="text-sm text-[#3D3D3D] mb-2"
              >
                Phone number
              </label>
              <PhoneInput
                country="ng"
                value={phone}
                onChange={(phone) => setPhone(phone)}
                containerClass="w-full items-center"
                inputStyle={{
                  width: "100%",
                  padding: "20px",
                  paddingLeft: "70px",
                  border: "1px solid #E8E8E8",
                }}
                buttonStyle={{
                  padding: "0 7px",
                  backgroundColor: "white",
                  fontSize: "14px",
                  fontWeight: "lighter",
                }}
                placeholder="9081688842"
              />
            </div>
            <label
              htmlFor="dob"
              className="flex text-sm text-[#344054] whitespace-nowrap mb-1"
            >
              Date of Birth
            </label>
            <div className="flex items-center border p-3 rounded-lg mb-5">
              <input
                type="date"
                className="flex flex-1 outline-none text-xs text-[#A3A3A3] uppercase bg-inherit"
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3">
            <div className="flex gap-2 mb-2">
              <div className="bg-[#075AAA] px-0.5 w-0.5" />
              <p className="text-lg text-[#2E2E2E]">Payment Information</p>
            </div>
            <p className="text-xs text-[#A3A3A3] font-light ml-3">
              Enter Correct Customer Details
            </p>
          </div>
          <div className="max-w-[402px] w-full">
            <TextInput
              label="Account Number"
              placeholder="Enter account number"
            />
            <label
              htmlFor="banks"
              className="flex text-sm text-[#344054] whitespace-nowrap mb-1"
            >
              Select Bank
            </label>
            <div className="flex items-center border p-3 rounded-lg mb-5">
              <select
                name="banks"
                className="flex flex-1 outline-none text-sm uppercase bg-inherit"
              >
                <option value="uba">UBA</option>
                <option value="access bank">Access Bank</option>
                <option value="first bank">First Bank</option>
                <option value="wema bank">Wema Bank</option>
              </select>
            </div>
            <TextInput label="Account Name" placeholder="Enter account name" />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3">
            <div className="flex gap-2 mb-2">
              <div className="bg-[#075AAA] px-0.5 w-0.5" />
              <p className="text-lg text-[#2E2E2E]">ID Verification</p>
            </div>
            <p className="text-xs text-[#A3A3A3] font-light ml-3">
              Enter Correct Customer Details
            </p>
          </div>
          <div className="max-w-[402px] w-full">
            <TextInput label="ID Number" placeholder="Enter ID Number" />
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-end mt-3 items-center">
        <CustomButton
          label="Save"
          bgColor="#075AAA"
          onClick={() =>
            toast.success("Information has been updated successfully")
          }
        />
        <CustomButton
          label="Cancel"
          bgColor="#F1F6FE"
          textColor="#206AB2"
          onClick={() => navigate("/admin/customers")}
        />
      </div>
    </div>
  );
};

export default EditCustomer;
