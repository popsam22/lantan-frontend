import clsx from "clsx";
import { useState } from "react";
import avatar from "@/assets/Ellipse 29.svg";
import TextInput from "@/components/TextInput";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import CustomButton from "@/components/CustomButton";
import password from "@/assets/password.png";
import padlock from "@/assets/padlock.svg";
import change from "@/assets/edit.svg";
import search from "@/assets/search.svg";
import add from "@/assets/add.svg";
import { createColumnHelper } from "@tanstack/react-table";
import { Setting } from "@/types";
import Tanstack from "@/components/Tanstack";
import { rows } from "@/constants/settings";
import LantanModal from "@/components/Modal";
import success from "@/assets/Featured icon.svg";
import { ConfirmationPopover } from "./property/Popover";

const Settings = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [phone, setPhone] = useState("");
  const [edit, setEdit] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [createSuccess, setCreateSuccess] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const columnHelper = createColumnHelper<Setting>();
  const columns = [
    columnHelper.accessor("dateAdded", {
      header: "Date Added",
      cell: (info) => info.getValue(),
      size: 171,
    }),
    columnHelper.accessor("fullName", {
      header: "Full Name",
      cell: (info) => info.getValue(),
      size: 246,
    }),
    columnHelper.accessor("emailAddress", {
      header: "Email Address",
      cell: (info) => info.getValue(),
      size: 275,
    }),
    columnHelper.accessor("role", {
      header: "Role",
      cell: (info) => info.getValue(),
      size: 251,
    }),
    columnHelper.accessor("actions", {
      header: "Actions",
      cell: () => (
        <div className="flex gap-5 items-center justify-start">
          <ConfirmationPopover
            title="Confirm Delete"
            leftText="Delete"
            rightText="Cancel"
          />
          <img
            src={change}
            alt="edit"
            className="w-4 h-4 object-contain cursor-pointer"
            onClick={() => setOpenUpdate(true)}
          />
        </div>
      ),
      size: 116,
    }),
  ];

  return (
    <div className="border rounded-3xl overflow-hidden p-3 min-h-screen">
      <div className="flex mb-3 border-b">
        <div className="flex gap-5 items-center mb-2">
          <p
            className={clsx(
              "text-sm whitespace-nowrap cursor-pointer",
              activeTab === 0
                ? "text-[#075AAA] border-b-2 border-[#075AAA] font-semibold"
                : "text-[#5C5C5C]"
            )}
            onClick={() => setActiveTab(0)}
          >
            General
          </p>
          <p
            className={clsx(
              "text-sm whitespace-nowrap cursor-pointer",
              activeTab === 1
                ? "text-[#075AAA] border-b-2 border-[#075AAA] font-semibold"
                : "text-[#5C5C5C]"
            )}
            onClick={() => setActiveTab(1)}
          >
            Security
          </p>
          <p
            className={clsx(
              "text-sm whitespace-nowrap cursor-pointer",
              activeTab === 2
                ? "text-[#075AAA] border-b-2 border-[#075AAA] font-semibold"
                : "text-[#5C5C5C]"
            )}
            onClick={() => setActiveTab(2)}
          >
            Admins
          </p>
        </div>
      </div>
      {activeTab === 0 ? (
        <div className="p-6 ml-14">
          <div className="flex border-b">
            <div className="w-1/3">
              <div className="flex gap-2 mb-2">
                <div className="bg-[#075AAA] px-0.5 w-0.5" />
                <p className=" text-[#2E2E2E]">Your Photo</p>
              </div>
              <p className="text-[#7A7A7A] text-xs font-light ml-3">
                This will be displayed on your profile
              </p>
            </div>
            <div className="flex gap-3 items-center mb-4">
              <img
                src={avatar}
                alt="avatar"
                width={64}
                height={64}
                className="object-contain border border-[#E8E8E8] rounded-full mr-3"
              />
              <p className="text-[#5C5C5C] text-sm cursor-pointer font-semibold">
                Delete
              </p>
              <p className="text-[#075AAA] text-sm font-semibold cursor-pointer">
                Update
              </p>
            </div>
          </div>
          <div className="py-6 flex">
            <div className="w-1/3">
              <div className="flex gap-2 mb-2">
                <div className="bg-[#075AAA] px-0.5 w-0.5" />
                <p className="text-[#2E2E2E]">Personal Information</p>
              </div>
              <p className="text-[#7A7A7A] text-xs font-light ml-3">
                This will be displayed on your profile
              </p>
            </div>
            <div className="w-full max-w-[402px]">
              <TextInput
                label="Email address"
                placeholder="admin@peaktower.com"
                className="border-[#9CBDDD]"
              />
              <TextInput label="First Name" placeholder="Owolu" />
              <TextInput label="Last name" placeholder="Opeyemi" />
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
              <div className="flex gap-5">
                {edit ? (
                  <div className="flex items-center gap-3">
                    <CustomButton
                      label="Cancel"
                      bgColor="#F1F6FE"
                      textColor="#206AB2"
                      // width="155px"
                      onClick={() => setEdit(false)}
                    />
                    <CustomButton
                      label="Save Changes"
                      bgColor="#075AAA"
                      // width="155px"
                      onClick={() => setEdit(true)}
                    />
                  </div>
                ) : (
                  <CustomButton
                    label="Edit details"
                    bgColor="#075AAA"
                    // width="155px"
                    onClick={() => setEdit(true)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      ) : activeTab === 1 ? (
        <div className="p-6 flex ml-14">
          <div className="w-1/3">
            <div className="flex gap-2 mb-2">
              <div className="bg-[#075AAA] px-0.5 w-0.5" />
              <p className="text-[#2E2E2E]">Password</p>
            </div>
            <p className="text-[#7A7A7A] text-xs font-light ml-3">
              Change your account password
            </p>
          </div>
          <div className="w-full max-w-[402px]">
            <div className="border-b">
              <label
                htmlFor="password"
                className="text-sm text-[#3D3D3D] mb-2 flex"
              >
                Current Password
              </label>
              <div className="flex border p-3 rounded-lg justify-between mb-7">
                <input
                  type="password"
                  placeholder="**********"
                  className="flex flex-1 outline-none text-sm text-[#1F1F1F] bg-inherit placeholder:text-[#A3A3A3] placeholder:font-light"
                />
                <img
                  src={padlock}
                  alt="password"
                  width={15}
                  height={15}
                  className="hover:cursor-pointer ml-2.5"
                />
              </div>
            </div>
            <label
              htmlFor="confirm password"
              className="text-sm text-[#3D3D3D] mb-2 flex mt-7"
            >
              Enter New Password
            </label>
            <div className="flex border p-3 rounded-lg justify-between mb-7">
              <input
                type="password"
                placeholder="Enter new password"
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
            <label
              htmlFor="confirm password"
              className="text-sm text-[#3D3D3D] mb-2 flex"
            >
              Confirm New Password
            </label>
            <div className="flex border p-3 rounded-lg justify-between mb-7">
              <input
                type="password"
                placeholder="Confirm new password"
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
            <div className="flex gap-5">
              <CustomButton
                label="Cancel"
                bgColor="#F1F6FE"
                textColor="#206AB2"
                // width="155px"
              />
              <CustomButton label="Update Password" bgColor="#075AAA" />
            </div>
          </div>
        </div>
      ) : (
        <div className="p-6 !pr-2 ml-14">
          <LantanModal
            title="Add New Admin"
            open={openCreate}
            onClose={() => setOpenCreate(false)}
            className="max-w-[538px]"
            children={
              <div>
                <TextInput label="Full Name" placeholder="Enter full name" />
                <TextInput
                  label="Email address"
                  placeholder="Enter email address"
                />
                <label
                  htmlFor="role"
                  className="text-sm text-[#3D3D3D] font-medium"
                >
                  Role
                </label>
                <select
                  name="role"
                  id="role"
                  className="w-full p-3 outline-none border border-[#E8E8E8] rounded-lg mt-2 font-light text-[#A3A3A3] text-sm"
                >
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="Secretary">Secretary</option>
                </select>
                <label
                  htmlFor="enter password"
                  className="text-sm text-[#3D3D3D] mb-2 mt-4 flex"
                >
                  Enter Password
                </label>
                <div className="flex border p-3 rounded-lg justify-between mb-2">
                  <input
                    type="password"
                    placeholder="Enter your password"
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
                <label
                  htmlFor="confirm password"
                  className="text-sm text-[#3D3D3D] mb-2 mt-4 flex"
                >
                  Confirm Password
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
                <div className="flex gap-3">
                  <CustomButton
                    label="Create Admin"
                    bgColor="#075AAA"
                    onClick={() => {
                      setCreateSuccess(true);
                      setOpenCreate(false);
                    }}
                  />
                  <CustomButton
                    label="Cancel"
                    bgColor="#F1F6FE"
                    textColor="#206AB2"
                    onClick={() => setOpenCreate(false)}
                  />
                </div>
              </div>
            }
          />
          <LantanModal
            title=""
            open={createSuccess}
            onClose={() => setCreateSuccess(false)}
            className="max-w-[538px]"
            children={
              <div className="flex flex-col items-center mb-3">
                <img
                  src={success}
                  alt="success"
                  width={120}
                  height={120}
                  className="object-contain mb-5"
                />
                <h1 className="text-[#1F1F1F] text-2xl font-medium mb-3 whitespace-nowrap">
                  Account Created Successfully
                </h1>
                <p className="text-[#5C5C5C] text-xs font-light whitespace-nowrap">
                  Check email address for login details
                </p>
              </div>
            }
          />
          <LantanModal
            title="Update Admin Details"
            open={openUpdate}
            onClose={() => setOpenUpdate(false)}
            className="max-w-[538px]"
            children={
              <div>
                <TextInput label="Full Name" placeholder="Enter full name" />
                <TextInput
                  label="Email address"
                  placeholder="Enter email address"
                />
                <label
                  htmlFor="role"
                  className="text-sm text-[#3D3D3D] font-medium"
                >
                  Role
                </label>
                <select
                  name="role"
                  id="role"
                  className="w-full p-3 outline-none border border-[#E8E8E8] rounded-lg mt-2 font-light text-[#A3A3A3] text-sm"
                >
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="Secretary">Secretary</option>
                </select>
                <label
                  htmlFor="enter password"
                  className="text-sm text-[#3D3D3D] mb-2 mt-4 flex"
                >
                  Enter Password
                </label>
                <div className="flex border p-3 rounded-lg justify-between mb-2">
                  <input
                    type="password"
                    placeholder="Enter your password"
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
                <label
                  htmlFor="confirm password"
                  className="text-sm text-[#3D3D3D] mb-2 mt-4 flex"
                >
                  Confirm Password
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
                <div className="flex gap-3">
                  <CustomButton
                    label="Save Details"
                    bgColor="#075AAA"
                    onClick={() => {
                      setUpdateSuccess(true);
                      setOpenUpdate(false);
                    }}
                  />
                  <CustomButton
                    label="Cancel"
                    bgColor="#F1F6FE"
                    textColor="#206AB2"
                    onClick={() => setOpenUpdate(false)}
                  />
                </div>
              </div>
            }
          />
          <LantanModal
            title=""
            open={updateSuccess}
            onClose={() => setUpdateSuccess(false)}
            className="max-w-[538px]"
            children={
              <div className="flex flex-col items-center mb-3">
                <img
                  src={success}
                  alt="success"
                  width={120}
                  height={120}
                  className="object-contain mb-4"
                />
                <h1 className="text-[#1F1F1F] text-2xl font-medium mb-2">
                  Account Updated Successfully
                </h1>
              </div>
            }
          />
          <div className="w-1/3 mb-3">
            <div className="flex gap-2 mb-2">
              <div className="bg-[#075AAA] px-0.5 w-0.5" />
              <p className="text-[#2E2E2E]">
                Admins <span>(3)</span>
              </p>
            </div>
            <p className="text-[#7A7A7A] text-xs font-light ml-3">
              Manage admins on the dashboard
            </p>
          </div>
          <div className="flex justify-between mb-4">
            <div className="flex items-center w-[411px] rounded-lg p-1 cursor-pointer bg-[#FCFCFC]">
              <img
                src={search}
                alt="search"
                width={18}
                height={18}
                className="object-contain mr-2"
              />
              <input
                className="w-full bg-[#FCFCFC] placeholder:text-sm placeholder:font-light placeholder:text-[#A3A3A3] placeholder:whitespace-nowrap outline-none p-1"
                placeholder="Search by name or email"
              />
            </div>
            <button
              className="flex gap-1 border cursor-pointer p-2 rounded-lg items-center border-[#E7E6EA] shadow-sm"
              onClick={() => setOpenCreate(true)}
            >
              <img src={add} alt="add admin" className="w-4 h-4" />
              <p className="text-[#3D3D3D] text-sm">Create Admin</p>
            </button>
          </div>
          <div className="border rounded-lg p-0 m-0">
            <Tanstack rows={rows} columns={columns} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
