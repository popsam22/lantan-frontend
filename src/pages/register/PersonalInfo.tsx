import Lantan from "../../assets/Lantan.svg";
import bg from "../../assets/Frame 484.png";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";

const PersonalInfo = () => {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  return (
    <section>
      <div className="flex justify-between flex-1 overflow-hidden min-h-screen bg-[#FCFCFD]">
        <div className="flex flex-1 flex-col m-20 pl-5 justify-center w-full relative lg:left-5">
          <div className="mb-16">
            <img
              src={Lantan}
              alt="lantan logo"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <div className="mb-10">
            <h1 className="text-2xl text-[#00142E] tracking-wider mb-2">
              Personal Information
            </h1>
            <p className="text-[#3D3D3D] text-sm">
              Please enter correct information
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-full max-w-[488px] p-5 mb-10 rounded-3xl drop-shadow-sm h-[321px]">
            <div className="flex flex-col mb-4 w-full">
              <label
                htmlFor="first-name"
                className="text-sm text-[#3D3D3D] mb-2"
              >
                First name
              </label>
              <div className="flex border p-3 rounded-lg justify-between">
                <input
                  type="text"
                  placeholder="enter first name"
                  className="flex flex-1 outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col mb-4 w-full">
              <label
                htmlFor="last-name"
                className="text-sm text-[#3D3D3D] mb-2"
              >
                Last name
              </label>
              <div className="flex border p-2 rounded-lg justify-between">
                <input
                  type="text"
                  placeholder="enter last name"
                  className="flex flex-1 outline-none"
                />
              </div>
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
                }}
                placeholder="9081688842"
              />
            </div>
            <div className="flex justify-between gap-6 w-full mt-10">
              <button
                className="w-full text-[#206AB2] rounded-xl p-4  bg-[#F1F6FE] hover:cursor-pointer"
                onClick={() => navigate("/register")}
              >
                Go Back
              </button>
              <button
                className="w-full text-white rounded-xl p-4  bg-[#075AAA] hover:cursor-pointer"
                onClick={() => navigate("/verify")}
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="h-screen">
          <img
            src={bg}
            alt="background image"
            width={700}
            className="h-screen w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
