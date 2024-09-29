import Lantan from "../../assets/Lantan.svg";
import bg from "../../assets/Frame 484.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import OtpInput from "react-otp-input";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  return (
    <section>
      <div className="flex justify-between flex-1 overflow-hidden h-screen bg-[#FCFCFD]">
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
              Verify OTP
            </h1>
            <p className="text-[#3D3D3D] text-sm mb-2">
              Please enter the 5 digit code sent to (email_address)
            </p>
            <span
              className="text-[#075AAA] hover:cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Change email address entered
            </span>
          </div>
          <div className="flex flex-col">
            <div className="mb-5">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={5}
                renderInput={(props) => (
                  <input
                    {...props}
                    style={{
                      width: "48px",
                      height: "48px",
                      textAlign: "center",
                      fontSize: "16px",
                      backgroundColor: "#F8F8F8",
                      margin: "0 8px",
                    }}
                  />
                )}
              />
            </div>
            <div className="flex">
              <button
                className="w-[342px] text-white rounded-lg p-4 mb-2 bg-[#075AAA] hover:cursor-pointer"
                onClick={() => navigate("/welcome")}
              >
                Continue
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

export default VerifyOTP;
