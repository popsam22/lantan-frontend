import latana from "../assets/Vectorlatana.png";
import logout from "../assets/Iconlogout.png";
import overview from "../assets/bar-chart-2overview.png";
import property from "../assets/Apartment_Home_Icon_UIAproperty.png";
import customer from "../assets/userscustomer.png";
import payment from "../assets/card-tickpayments.png";
import investment from "../assets/chart-squareinestments.png";
import review from "../assets/Iconreview.png";
import settings from "../assets/settingssettings.png";
import avatar from "../assets/Avatarope.png";
import actions from "../assets/Actions.png";
import { Link } from "react-router-dom";
import { SidebarProp } from "../types";
import clsx from "clsx";

const Sidebar = ({ setItem, select }: SidebarProp) => {
  const handleClick = (value: string) => {
    setItem(value);
  };

  return (
    <div>
      <div className="w-[200px] flex flex-col justify-between m-3 pb-5">
        <div className="px-3 pb-20">
          <img
            src={latana}
            alt="latana logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
        <div className=" h-[540px]">
          <Link to="/admin/overview" onClick={() => handleClick("Overview")}>
            <div
              className={clsx(
                "flex gap-4 mb-4 items-center p-2 rounded",
                select === "Overview" && "bg-[#FAFCFF]"
              )}
            >
              <img src={overview} alt="overview" width={20} height={20} />
              <p className="text-xs text-[#7A7A7A]">Overview</p>
            </div>
          </Link>

          <div
            className={clsx(
              "flex gap-4 mb-4 items-center p-2 rounded",
              select === "Property" && "bg-[#FAFCFF]"
            )}
          >
            <img src={property} alt="propertycustomer" width={20} height={20} />
            <div className="flex items-center w-full justify-between">
              <p className="text-xs text-[#7A7A7A]">Property</p>
              <img src={actions} alt="arrow-down" width={20} height={20} />
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full pl-9 py-2">
            <Link
              to="/admin/property/add-property"
              onClick={() => handleClick("Property")}
            >
              <p className="text-xs text-[#7A7A7A] mb-2">Add Property</p>
            </Link>
            <Link
              to="/admin/property/properties"
              onClick={() => handleClick("Property")}
            >
              <p className="text-xs text-[#7A7A7A] mb-4">Properties</p>
            </Link>
          </div>
          <Link to="/admin/customers" onClick={() => handleClick("Customers")}>
            <div
              className={clsx(
                "flex gap-4 mb-4 items-center p-2 rounded",
                select === "Customers" && "bg-[#FAFCFF]"
              )}
            >
              <img src={customer} alt="customer" width={20} height={20} />
              <p className="text-xs text-[#7A7A7A]">Customer</p>
            </div>
          </Link>
          <Link to="/admin/payments">
            <div
              className={clsx(
                "flex gap-4 mb-4 items-center p-2 rounded",
                select === "Payments" && "bg-[#FAFCFF]"
              )}
              onClick={() => handleClick("Payments")}
            >
              <img src={payment} alt="payment" width={20} height={20} />
              <p className="text-xs text-[#7A7A7A]">Payments</p>
            </div>
          </Link>
          <Link to="/admin/investments">
            <div
              className={clsx(
                "flex gap-4 mb-4 items-center p-2 rounded",
                select === "Investments" && "bg-[#FAFCFF]"
              )}
              onClick={() => handleClick("Investments")}
            >
              <img src={investment} alt="investment" width={20} height={20} />
              <p className="text-xs text-[#7A7A7A]">Investments</p>
            </div>
          </Link>
          <div className="flex gap-4 mb-4 items-center w-full">
            <img src={review} alt="review" width={20} height={20} />
            <div className="flex justify-between items-center w-full">
              <p className="text-xs text-[#7A7A7A] justify-center items-center">
                Review
              </p>
              <p className="text-white bg-[#075AAA] p-1 rounded-full text-xs">
                10
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" ">
        <div className="flex gap-4 mb-5 pl-2 items-center">
          <img src={settings} alt="settings" width={20} height={20} />
          <p className="text-xs text-[#7A7A7A]">Settings</p>
        </div>
        <div className="border w-[200px]"></div>
        <div className="flex w-[32px] mt-3">
          <img src={avatar} alt="ope" className="object-contain pr-1" />
          <div className="flex flex-col ml-1">
            <p className="justify-center items-center text-xs text-[#344054]">
              Owolu Opeyemi
            </p>
            <p className="justify-center items-center text-xs text-[#7A7A7A]">
              admin@peaktower.com
            </p>
          </div>
          <img src={logout} alt="logout" className="flex top-1 right-1" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
