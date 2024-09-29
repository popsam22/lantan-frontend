import bg from "../assets/Frame 484.png";
import Lantan from "../assets/Lantan.svg";
import success from "../assets/ep_success-filled.png";
import { useNavigate } from "react-router-dom";
import { ConfirmationPageProps } from "../types";

const ConfirmationPage = ({
  heading,
  placeholder,
  buttonText,
}: ConfirmationPageProps) => {
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
              {heading}
            </h1>
            <p className="text-[#3D3D3D] text-sm">{placeholder}</p>
          </div>
          <div
            className="flex flex-col items-center w-full max-w-[488px] p-7 bg-white 
            drop-shadow-sm rounded-2xl 
          "
          >
            <div className="flex relative">
              <img src={success} alt="success" width={178} height={178} />
            </div>
            <div className="flex w-full">
              <button
                className="w-full text-white rounded-xl p-4  bg-[#075AAA] hover:cursor-pointer"
                onClick={() => navigate("/login")}
              >
                {buttonText}
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

export default ConfirmationPage;
