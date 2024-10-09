import CustomButton from "@/components/CustomButton";
import previous from "../../../assets/arrow-left.png";
import propertyImg from "../../../assets/Frame 518.png";
import location from "../../../assets/Icon.png";
import home from "../../../assets/tabler_smart-home.svg";
import security from "../../../assets/hugeicons_security-lock.svg";
import light from "../../../assets/healthicons_electricity-outline.svg";
import gym from "../../../assets/iconoir_gym.svg";
import brush from "../../../assets/bx_brush.svg";
import cctv from "../../../assets/tabler_device-cctv.svg";
import solar from "../../../assets/ic_outline-solar-power.svg";
import bathroom from "../../../assets/iconoir_bathroom.svg";
import arrow from "../../../assets/Chevron_Left.svg";
import doc from "../../../assets/File_Document.svg";
import { useNavigate } from "react-router-dom";

const ViewProperty = () => {
  const navigate = useNavigate();
  return (
    <div className="rounded-lg border bg-[#FCFCFD] min-h-screen p-4 ">
      <div className="flex items-center justify-between mb-2">
        <button
          className="flex items-center text-[#3D3D3D]"
          onClick={() => navigate("/admin/property/properties")}
        >
          <img
            src={previous}
            alt="go back"
            width={20}
            height={20}
            className="mr-1 object-contain"
          />
          Back
        </button>
        <div className="flex gap-3">
          <CustomButton label="Edit Property" bgColor="#075AAA" />
          <CustomButton
            label="Archive Property"
            bgColor="#FAFAFA"
            textColor="#5C5C5C"
          />
        </div>
      </div>
      <div className="flex gap-3 w-full">
        <img
          src={propertyImg}
          alt="property image"
          className="h-[408px] w-[568px] rounded-lg"
        />
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-2 gap-2 mb-2">
            <img
              src={propertyImg}
              alt="property image"
              className="h-[215px] w-[274px] object-cover rounded-lg"
            />
            <img
              src={propertyImg}
              alt="property image"
              className="h-[215px] w-[274px] object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <img
              src={propertyImg}
              alt="property image"
              className="h-[182px] w-[177px] object-cover rounded-lg"
            />
            <img
              src={propertyImg}
              alt="property image"
              className="h-[182px] w-[177px] object-cover rounded-lg"
            />
            <img
              src={propertyImg}
              alt="property image"
              className="h-[182px] w-[177px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4 flex-1">
        <div className="">
          <div className="border-b-2 py-4">
            <p className="text-[#075AAA] text-center rounded-2xl bg-[#F1F6FE] text-xs p-2 w-[141px]">
              Property Purchase
            </p>
            <h1 className="text-[#2E2E2E] text-3xl font-medium tracking-wide my-2.5">
              Bradford Apartment
            </h1>
            <p className="text-[#5C5C5C] text-sm font-light flex items-center mb-3">
              <img
                src={location}
                alt="location"
                width={20}
                height={20}
                className="object-contain mr-2"
              />
              32, Herbert, Yaba, Lagos
            </p>
          </div>

          <div className="border-b-2 py-5">
            <h1 className="text-[#5C5C5C] text-sm font-light uppercase mb-4">
              Property Facilities
            </h1>
            <div className="grid grid-cols-4 gap-5">
              <p className="flex text-[#5C5C5C] text-xs items-center whitespace-nowrap font-light">
                <img
                  src={home}
                  alt="home"
                  width={24}
                  height={24}
                  className="object-contain mr-1"
                />
                Smart Home
              </p>
              <p className="flex text-[#5C5C5C] text-xs items-center whitespace-nowrap font-light">
                <img
                  src={security}
                  alt="security"
                  width={24}
                  height={24}
                  className="object-contain mr-1"
                />
                24hr Security
              </p>
              <p className="flex text-[#5C5C5C] text-xs items-center whitespace-nowrap font-light">
                <img
                  src={light}
                  alt="electricity"
                  width={24}
                  height={24}
                  className="object-contain mr-1"
                />
                24 Electricity
              </p>
              <p className="flex text-[#5C5C5C] text-xs items-center whitespace-nowrap font-light">
                <img
                  src={gym}
                  alt="gym"
                  width={24}
                  height={24}
                  className="object-contain mr-1"
                />
                Gym
              </p>
              <p className="flex text-[#5C5C5C] text-xs items-center whitespace-nowrap font-light">
                <img
                  src={brush}
                  alt="brush"
                  width={24}
                  height={24}
                  className="object-contain mr-1"
                />
                POP Ceiling
              </p>
              <p className="flex text-[#5C5C5C] text-xs items-center whitespace-nowrap font-light">
                <img
                  src={cctv}
                  alt="cctv"
                  width={24}
                  height={24}
                  className="object-contain mr-1"
                />
                CCTV
              </p>
              <p className="flex text-[#5C5C5C] text-xs items-center whitespace-nowrap font-light">
                <img
                  src={solar}
                  alt="solar"
                  width={24}
                  height={24}
                  className="object-contain mr-1"
                />
                Solar Power
              </p>
              <p className="flex text-[#5C5C5C] text-xs items-center whitespace-nowrap font-light">
                <img
                  src={bathroom}
                  alt="bath"
                  width={24}
                  height={24}
                  className="object-contain mr-1"
                />
                En-suite bath
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-lg border w-full max-w-[488px] h-[253px] p-3 bg-[#FCFCFD]">
          <p className="text-[#5C5C5C] uppercase font-light mb-3">
            Property price
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h1 className="text-[#5C5C5C] font-light text-sm mb-2">
                Studio Apartment
              </h1>
              <p className="text-[#2E2E2E] text-2xl font-semibold mb-5">
                N28,000,000.00
              </p>
            </div>
            <div>
              <h1 className="text-[#5C5C5C] font-light text-sm mb-2">
                Initial Deposit
              </h1>
              <p className="text-[#2E2E2E] text-2xl font-semibold mb-5">
                N10,000,000.00
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h1 className="text-[#5C5C5C] font-light text-sm mb-2">
                One Bedroom Apartment
              </h1>
              <p className="text-[#2E2E2E] text-2xl font-semibold mb-5">
                N48,000,000.00
              </p>
            </div>
            <div>
              <h1 className="text-[#5C5C5C] font-light text-sm mb-2">
                Initial Deposit
              </h1>
              <p className="text-[#2E2E2E] text-2xl font-semibold mb-5">
                N10,000,000.00
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full my-4">
        <h1 className="uppercase text-[#5C5C5C] font-light text-sm py-2">
          Property documents
        </h1>
        <div className="flex gap-3 ">
          <p className="items-center flex text-[#2E2E2E] text-sm bg-white p-2 rounded-lg">
            <img
              src={doc}
              alt="doc"
              width={20}
              height={20}
              className="object-contain mx-2"
            />
            C of O - for bradford apartment
            <span className="text-[#D6D6D6] text-xs mx-3 font-light">PDF</span>
            <img src={arrow} alt="arrow-right" />
          </p>
          <p className="items-center flex text-[#2E2E2E] text-sm rounded-lg">
            <img
              src={doc}
              alt="doc"
              className="object-contain mx-2"
              width={20}
              height={20}
            />
            Bradford apartment_brochure
            <span className="text-[#D6D6D6] text-xs mx-3 font-light">PDF</span>
            <img src={arrow} alt="arrow-right" width={20} height={20} />
          </p>
          <p className="items-center flex text-[#2E2E2E] text-sm rounded-lg">
            <img
              src={doc}
              alt="doc"
              className="object-contain mx-2"
              width={20}
              height={20}
            />
            Land document bradford
            <span className="text-[#D6D6D6] text-xs mx-3 font-light">PDF</span>
            <img src={arrow} alt="arrow-right" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewProperty;
