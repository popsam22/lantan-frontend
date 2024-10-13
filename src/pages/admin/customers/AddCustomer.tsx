import CustomButton from "@/components/CustomButton";
import TextInput from "@/components/TextInput";
import LantanModal from "@/components/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import success from "@/assets/Featured icon.svg";
import email from "@/assets/mail.svg";
import password from "@/assets/password.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const AddCustomer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  return (
    <div className="rounded-3xl border overflow-hidden p-3">
      <LantanModal
        title=""
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="max-w-[538px]"
        children={
          <div className="flex flex-col items-center justify-center">
            <img
              src={success}
              alt="successful"
              width={120}
              height={120}
              className="m-5"
            />
            <h1 className="text-[#1F1F1F] text-2xl font-medium mb-2 whitespace-nowrap">
              Customer Added Successfully
            </h1>
            <p className="text-[#5C5C5C] text-sm font-light whitespace-nowrap mb-5">
              Check email address for login details
            </p>
          </div>
        }
      />
      <div className="border rounded-lg p-5 w-full">
        <div className="flex">
          <div className="w-1/3">
            <div className="flex gap-2 mb-2">
              <div className="bg-[#075AAA] px-0.5 w-0.5" />
              <h1 className="text-lg text-[#2E2E2E]">Login Details</h1>
            </div>
            <p className="text-xs text-[#A3A3A3] font-light ml-3">
              This will be the customer's login info
            </p>
          </div>
          <div className="max-w-[402px] w-full">
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
            <label
              htmlFor="password"
              className="text-sm text-[#3D3D3D] mb-2 flex"
            >
              Password
            </label>
            <div className="flex border p-3 rounded-lg justify-between mb-5">
              <input
                type="password"
                placeholder="Enter your password"
                className="flex flex-1 outline-none text-sm text-[#1F1F1F] bg-inherit placeholder:text-[#A3A3A3] placeholder:font-light"
              />
              <img
                src={password}
                alt="password"
                width={24}
                height={24}
                className="hover:cursor-pointer ml-2.5"
              />
            </div>
            <label
              htmlFor="confirm password"
              className="text-sm text-[#3D3D3D] mb-2 flex"
            >
              Re-enter Password
            </label>
            <div className="flex border p-3 rounded-lg justify-between mb-5">
              <input
                type="password"
                placeholder="Confirm your password"
                className="flex flex-1 outline-none text-sm text-[#1F1F1F bg-inherit placeholder:text-[#A3A3A3] placeholder:font-light"
              />
              <img
                src={password}
                alt="password"
                width={24}
                height={24}
                className="hover:cursor-pointer ml-2.5"
              />
            </div>
          </div>
        </div>
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
              <span className="ml-1 text-[#A3A3A3] font-medium">
                (as it appears on customer's government ID)
              </span>
            </label>
            <div className="flex items-center overflow-hidden border p-3 rounded-lg mb-5">
              <input
                type="text"
                placeholder="Enter your name"
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
          onClick={() => setIsOpen(true)}
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

export default AddCustomer;
