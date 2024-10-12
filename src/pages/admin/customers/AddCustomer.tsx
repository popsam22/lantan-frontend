import CustomButton from "@/components/CustomButton";
import TextInput from "@/components/TextInput";

const AddCustomer = () => {
  return (
    <div className="rounded-3xl border overflow-hidden p-3">
      <div className="border rounded-lg p-5 w-full">
        <div className="flex">
          <div className="w-1/3">
            <div className="flex gap-2 mb-2">
              <div className="bg-[#075AAA] px-0.5 w-0.5" />
              <h1 className="text-lg text-[#2E2E2E]">Login Details</h1>
            </div>
            <p className="text-xs text-[#A3A3A3] font-light">
              This will be the customer's login info
            </p>
          </div>
          <div className="w-1/3">
            <TextInput label="Email" placeholder="Enter email address" />
            <TextInput label="Password" placeholder="Enter your password" />
            <TextInput
              label="Re-enter Password"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3">
            <div className="flex gap-2 mb-2">
              <div className="bg-[#075AAA] px-0.5 w-0.5" />
              <p className="text-lg text-[#2E2E2E]">Personal Information</p>
            </div>
            <p className="text-xs text-[#A3A3A3] font-light">
              Enter Correct Customer Details
            </p>
          </div>
          <div className="w-1/3">
            <TextInput
              label="Full Name (as seen on customer's ID)"
              placeholder="Enter full name"
            />
            <TextInput label="Phone Number" />
            <TextInput label="Date of Birth" />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3">
            <div className="flex gap-2 mb-2">
              <div className="bg-[#075AAA] px-0.5 w-0.5" />
              <p className="text-lg text-[#2E2E2E]">Payment Information</p>
            </div>
            <p className="text-xs text-[#A3A3A3] font-light">
              Enter Correct Customer Details
            </p>
          </div>
          <div className="w-1/3">
            <TextInput
              label="Account Number"
              placeholder="Enter account number"
            />
            <TextInput label="Select Bank" placeholder="Select Bank" />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3">
            <div className="flex gap-2 mb-2">
              <div className="bg-[#075AAA] px-0.5 w-0.5" />
              <p className="text-lg text-[#2E2E2E]">ID Verification</p>
            </div>
            <p className="text-xs text-[#A3A3A3] font-light">
              Enter Correct Customer Details
            </p>
          </div>
          <div className="w-1/3">
            <TextInput label="ID Number" placeholder="Enter ID Number" />
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-end mt-3 items-center">
        <CustomButton label="Save" bgColor="#075AAA" />
        <CustomButton label="Cancel" bgColor="#F1F6FE" textColor="#206AB2" />
      </div>
    </div>
  );
};

export default AddCustomer;
