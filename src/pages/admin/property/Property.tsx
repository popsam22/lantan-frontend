import Button from "../../../components/Button";
import CheckboxInput from "../../../components/CheckboxInput";
import FileInput from "../../../components/FileInput";
import ImageInput from "../../../components/ImageInput";
import TextInput from "../../../components/TextInput";
import { useState } from "react";
import LatanaModal from "../../../components/Modal";
import success from "../../../assets/Featured icon.png";
import { useNavigate } from "react-router-dom";

const Property = () => {
  const [unitSale, setUnitSale] = useState(false);
  const [coownership, setcoownership] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleCheckBox = (selected: string) => {
    if (selected === "Unit Sale") {
      setUnitSale(!unitSale);
    } else if (selected === "Co-ownership") {
      setcoownership(!coownership);
    }
  };

  return (
    <div>
      <div className="p-3 overflow-auto bg-[#FCFCFD] border rounded-3xl">
        <LatanaModal
          title={""}
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
          children={
            <div className="flex flex-col items-center justify-center">
              <img
                src={success}
                alt="success"
                width={120}
                height={120}
                className="m-2"
              />
              <h1 className="text-[#1F1F1F] text-2xl font-medium whitespace-nowrap mb-1">
                Property Added Successfully
              </h1>
              <p className="text-[#7A7A7A] font-light whitespace-nowrap text-sm mb-4">
                Bradford Apartment has been successfully added
              </p>
              <button
                onClick={() => navigate("/admin/property/properties")}
                className="w-[300px] h-[54px] text-[#206AB2] font-semibold text-sm rounded-lg p-4 mb-2 bg-[#F1F6FE] hover:cursor-pointer"
              >
                View Property
              </button>
            </div>
          }
          className={"max-w-[526px]"}
        />
        <div className="flex items-center justify-between border-b-2 ">
          <p className="text-[#2E2E2E] text-2xl tracking-wide">
            Fill the Information below to Add New Property
          </p>
          <div className="flex justify-between gap-4">
            <button
              onClick={() => setIsOpen(true)}
              className="w-[158px] text-white font-semibold text-sm rounded-lg p-4 mb-2 bg-[#075AAA] hover:cursor-pointer"
            >
              Add Property
            </button>
            <button className="w-[158px] text-[#206AB2] font-semibold text-sm rounded-lg p-4 mb-2 bg-[#F1F6FE] hover:cursor-pointer">
              Cancel
            </button>
          </div>
        </div>
        <div className="flex rounded-lg py-3 gap-3">
          <div className="flex flex-col w-full max-w-[620px]">
            <div className="h-[520px] rounded-lg border p-2 mb-3">
              <p className="text-[#A3A3A3] font-light uppercase mb-1 text-sm">
                Basic Information
              </p>
              <div className="p-3">
                <TextInput
                  label="Property Name"
                  placeholder="Enter property name here"
                />
                <TextInput
                  label="Property Address"
                  placeholder="Enter property address"
                />
                <div className="flex justify-between w-full gap-5">
                  <div className="w-1/2">
                    <TextInput
                      label="Property Price (Studio Apartment)"
                      placeholder="Enter property price (N)"
                    />
                  </div>
                  <div className="w-1/2">
                    <TextInput
                      label="Property Price (1 Bedroom Apartment)"
                      placeholder="Enter property price (N)"
                    />
                  </div>
                </div>
                <div className="flex justify-between w-full gap-5">
                  <div className="w-1/2">
                    <TextInput
                      label="Initial Deposit (Studio Apartment)"
                      placeholder="Enter property price (N)"
                    />
                  </div>
                  <div className="w-1/2">
                    <TextInput
                      label="Initial Deposit (1 Bedroom Apartment)"
                      placeholder="Enter property price (N)"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-between w-1/2">
                  <label className="text-sm text-[#3D3D3D] font-medium mb-2">
                    Slot Prices{" "}
                    <span className="text-xs text-[#397BBB]">
                      (Applies to co-ownership properties)
                    </span>
                  </label>
                  <div className="flex items-center w-full border p-3 rounded-lg mb-3">
                    <input
                      type="text"
                      placeholder="Enter property price (N)"
                      className="flex flex-1 outline-none text-sm placeholder:text-[#A3A3A3] placeholder:font-light"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[209px] rounded-lg border p-2 mb-3">
              <h1 className="text-sm text-[#A3A3A3] font-light uppercase my-3">
                Property Features
              </h1>
              <p className="text-sm text-[#3D3D3D] font-medium my-4">
                Select features that applies to property
              </p>
              <div className="p-1 grid grid-cols-5 gap-4">
                <CheckboxInput label="Swimming Pool" />
                <CheckboxInput label="Fully Furnished" />
                <CheckboxInput label="Wi-Fi" />
                <CheckboxInput label="Elevator" />
                <CheckboxInput label="Laundry Room" />
                <CheckboxInput label="Smart home" />
                <CheckboxInput label="Gym" />
                <CheckboxInput label="POP Ceiling" />
                <CheckboxInput label="24hr Electricity" />
                <CheckboxInput label="24hr Security" />
                <CheckboxInput label="CCTV" />
                <CheckboxInput label="Concierge" />
                <CheckboxInput label="Air Conditioning" />
                <CheckboxInput label="Ensuite Bathroom" />
                <CheckboxInput label="Solar Power" />
              </div>
            </div>
            <div className="h-[267px] rounded-lg border p-2 mb-3">
              <h1 className="uppercase text-[#A3A3A3] text-sm font-light my-3">
                Listing Type
              </h1>
              <p className="text-[#3D3D3D] text-sm mt-3 mb-5">
                Select all that applies to property
              </p>
              <div className="flex gap-6">
                <CheckboxInput
                  label="Unit Sale"
                  onChange={() => handleCheckBox("Unit Sale")}
                />
                <CheckboxInput
                  label="Co-ownership"
                  onChange={() => handleCheckBox("Co-ownership")}
                />
              </div>
              <div className="flex gap-3">
                {unitSale && (
                  <div className="border rounded-lg p-2 mt-2 w-1/2">
                    <TextInput
                      label="Enter number of Units Available"
                      placeholder="Enter no of units"
                      bottomText="This is the number of units available for sale"
                    />
                  </div>
                )}
                {coownership && (
                  <div className="border rounded-lg p-2 mt-2 w-1/2">
                    <TextInput
                      label="Enter number of Slots Available"
                      placeholder="Enter no of slots"
                      bottomText="This is the number of slots investors can buy"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="w-full h-[456px] rounded-xl border p-2 mb-3 ">
              <p className="uppercase text-[#A3A3A3] text-sm font-light mb-3 p-2">
                Property Image (At least 5 images)
              </p>
              <div>
                <ImageInput full={true} />
                <div className="grid grid-cols-2">
                  <ImageInput />
                  <ImageInput />
                  <ImageInput />
                  <ImageInput />
                </div>
              </div>
            </div>
            <div className="h-[503px] border rounded-lg p-3">
              <p className="uppercase text-[#A3A3A3] mb-3 font-light text-sm">
                Property Document
              </p>
              <div className="h-[187px] w-full border rounded-lg p-2 mb-3">
                <TextInput
                  label="Document Title"
                  placeholder="Enter document title here"
                />
                <FileInput label="Upload Document" />
              </div>
              <div className="h-[187px] w-full border rounded-lg p-2">
                <TextInput
                  label="Document Title"
                  placeholder="Enter document title here"
                />
                <FileInput label="Upload Document" />
              </div>
              <div className="mt-7 flex justify-end">
                <Button label="Add more document" bgColor={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
