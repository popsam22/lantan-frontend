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

const Sidebar = () => {
  return (
    <div>
      <div className="w-[200px] flex flex-col justify-between m-3 pb-5">
        <div className="px-3 pb-20">
          <img src={latana} alt="latana logo" width={40} height={40} />
        </div>
        <div className=" h-[338px]">
          <div className="flex gap-4">
            <img src={overview} alt="overview" width={24} height={24} />
            <p className="text-xs">Overview</p>
          </div>
          <div className="flex gap-4">
            <img src={property} alt="propertycustomer" width={24} height={24} />
            <p className="text-xs">Property</p>
          </div>
          <div className="flex gap-4">
            <img src={customer} alt="customer" width={24} height={24} />
            <p className="text-xs">Customer</p>
          </div>
          <div className="flex gap-4">
            <img src={payment} alt="payment" width={24} height={24} />
            <p className="text-xs">Payments</p>
          </div>
          <div className="flex gap-4">
            <img src={investment} alt="investment" width={24} height={24} />
            <p className="font-inter text-xs">Investments</p>
          </div>
          <div className="flex gap-4">
            <img src={review} alt="review" width={24} height={24} />
            <p className="text-xs justify-center items-center">Review</p>
          </div>
        </div>
      </div>
      <div className=" ">
        <div className="flex gap-4 mb-5">
          <img src={settings} alt="" />
          <p className="text-xs">Settings</p>
        </div>
        <div className="border w-[200px]"></div>
        <div className="flex w-[32px]">
          <img src={avatar} alt="ope" className="object-contain pr-1" />
          <div className="flex flex-col ml-1">
            <p className="justify-center items-center text-xs">Owolu Opeyemi</p>
            <p className="justify-center items-center text-xs">
              admin@peaktower.com
            </p>
          </div>
          <img src={logout} alt="logout" className="flex top-1 right-2" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
