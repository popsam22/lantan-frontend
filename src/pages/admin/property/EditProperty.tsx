import CheckboxInput from "@/components/CheckboxInput";
import FileInput from "@/components/FileInput";
import ImageInput from "@/components/ImageInput";
import LatanaModal from "@/components/Modal";
import TextInput from "@/components/TextInput";
import success from "../../../assets/Featured icon.png";
import Button from "../../../components/Button";
import CustomButton from "@/components/CustomButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditProperty = () => {
  const [unitSale, setUnitSale] = useState(false);
  const [coownership, setCoownership] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleCheckBox = (selected: string) => {
    if (selected === "Unit Sale") {
      setUnitSale(!unitSale);
    } else if (selected === "Co-ownership") {
      setCoownership(!coownership);
    }
  };
  return (
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
              Property Updated Successfully
            </h1>
            <p className="text-[#7A7A7A] font-light whitespace-nowrap text-sm mb-4">
              Bradford Apartment has been successfully updated
            </p>
          </div>
        }
        className={"max-w-[526px]"}
      />
      <div className="flex items-center justify-between border-b-2 ">
        <p className="text-[#2E2E2E] text-2xl tracking-wide">
          Update Property Details
        </p>
        <div className="flex justify-between gap-4">
          <CustomButton
            label="Save Details"
            bgColor="#075AAA"
            onClick={() => setIsOpen(true)}
          />
          <CustomButton
            label="Cancel"
            bgColor="#F1F6FE"
            textColor="#206AB2"
            onClick={() => navigate("/admin/property/properties")}
          />
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
                value="Bradford Apartment"
              />
              <TextInput
                label="Property Address"
                placeholder="Enter property address"
                value="32, Herbert Macaulay, Yaba, Lagos"
              />
              <div className="flex justify-between w-full gap-5">
                <div className="w-1/2">
                  <TextInput
                    label="Property Price (Studio Apartment)"
                    placeholder="Enter property price (N)"
                    value="28,000,000"
                  />
                </div>
                <div className="w-1/2">
                  <TextInput
                    label="Property Price (1 Bedroom Apartment)"
                    placeholder="Enter property price (N)"
                    value="45,000,000"
                  />
                </div>
              </div>
              <div className="flex justify-between w-full gap-5">
                <div className="w-1/2">
                  <TextInput
                    label="Initial Deposit (Studio Apartment)"
                    placeholder="Enter property price (N)"
                    value="10,000,000"
                  />
                </div>
                <div className="w-1/2">
                  <TextInput
                    label="Initial Deposit (1 Bedroom Apartment)"
                    placeholder="Enter property price (N)"
                    value="15,000,000"
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
                    value="3,000,000"
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
              <CheckboxInput label="Laundry Room" checked={true} />
              <CheckboxInput label="Smart home" checked={true} />
              <CheckboxInput label="Gym" checked={true} />
              <CheckboxInput label="POP Ceiling" checked={true} />
              <CheckboxInput label="24hr Electricity" checked={true} />
              <CheckboxInput label="24hr Security" checked={true} />
              <CheckboxInput label="CCTV" checked={true} />
              <CheckboxInput label="Concierge" />
              <CheckboxInput label="Air Conditioning" checked={true} />
              <CheckboxInput label="Ensuite Bathroom" checked={true} />
              <CheckboxInput label="Solar Power" checked={true} />
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
                onChange={handleCheckBox}
                checked={true}
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
                    value="30"
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
              <ImageInput full={true} previewImg={true} />
              <div className="grid grid-cols-2">
                <ImageInput previewImg={true} />
                <ImageInput previewImg={true} />
                <ImageInput previewImg={true} />
                <ImageInput previewImg={true} />
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
                value="Bradford C of O"
              />
              <FileInput label="Upload Document" placeholder="doc7812.pdf" />
            </div>
            <div className="h-[187px] w-full border rounded-lg p-2">
              <TextInput
                label="Document Title"
                placeholder="Enter document title here"
                value="Lease Title"
              />
              <FileInput label="Upload Document" placeholder="doc7812.pdf" />
            </div>
            <div className="mt-7 flex justify-end">
              <Button label="Add more document" bgColor={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProperty;

// {
//     "Swimming Pool" : false,
//     "Fully Furnished": false,
//     "Wi-fi": false,
//     "Elevator": false,
//     "Laundry Room": true,
//     "Smart home": true,
//     "Gym": true,
//     "POP Ceiling": true,
//     "24hr Electricity": true,
//     "24hr Security": true,
//     "CCTV": true,
//     "Concierge": false,
//     "Air Condition": true,
//     "EnSuite Bathroom": true,
//     "Solar Power": true
//   }
