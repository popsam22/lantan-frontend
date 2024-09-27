import password from "../../assets/password.png";
import Lantan from "../../assets/Lantan.svg";
import bg from "../../assets/Frame 484.png";
import { useNavigate } from "react-router-dom";

const SetPassword = () => {
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
              Set New Password
            </h1>
            <p className="text-[#3D3D3D] text-sm">
              Enter new password to access your account
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-full max-w-[488px] p-5 mb-10 rounded-3xl drop-shadow-sm">
            <div className="flex flex-col mb-10 w-full">
              <label
                htmlFor="new-password"
                className="text-sm text-[#3D3D3D] mb-2"
              >
                Enter New Password
              </label>
              <div className="flex border p-3 rounded-lg justify-between">
                <input
                  type="text"
                  placeholder="enter your password"
                  className="flex flex-1 outline-none"
                />
                <img
                  src={password}
                  alt="password"
                  width={24}
                  height={24}
                  className="hover:cursor-pointer ml-2"
                />
              </div>
            </div>
            <div className="flex flex-col mb-10 w-full">
              <label
                htmlFor="confirm-password"
                className="text-sm text-[#3D3D3D] mb-2"
              >
                Confirm New Password
              </label>
              <div className="flex border p-3 rounded-lg justify-between">
                <input
                  type="text"
                  placeholder="enter your password"
                  className="flex flex-1 outline-none"
                />
                <img
                  src={password}
                  alt="password"
                  width={24}
                  height={24}
                  className="hover:cursor-pointer ml-2"
                />
              </div>
            </div>
            <div className="flex w-full">
              <button
                className="w-full text-white rounded-xl p-4  bg-[#075AAA] hover:cursor-pointer"
                onClick={() => navigate("/success")}
              >
                Reset Password
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center relative -left-5">
            <p
              className="text-sm text-[#404040] hover:cursor-pointer hover:text-[#075AAA]"
              onClick={() => navigate("/login")}
            >
              Back to Login
            </p>
          </div>
        </div>
        <div>
          <img
            src={bg}
            alt="background image"
            width={672}
            height={900}
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default SetPassword;
