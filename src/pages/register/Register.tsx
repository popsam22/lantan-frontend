import bg from "../../assets/Frame 484.png";
import Lantan from "../../assets/Lantan.svg";
import email from "../../assets/mail.png";
import { useNavigate } from "react-router-dom";

const Register = () => {
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
          <div className="flex flex-col mb-12">
            <h1 className="text-3xl text-[#00142E] tracking-wider mb-2">
              Register an account
            </h1>
            <p className="text-[#5C5C5C] text-sm">
              Create an account to allow you login
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-full max-w-[450px] p-6 mb-10 rounded-3xl drop-shadow-sm">
            <div className="flex flex-col mb-10 w-full">
              <label
                htmlFor="new-password"
                className="text-sm text-[#3D3D3D] mb-2"
              >
                Email
              </label>
              <div className="flex border p-3 rounded-lg justify-between">
                <img
                  src={email}
                  alt="email"
                  width={20}
                  height={20}
                  className="hover:cursor-pointer"
                />
                <input
                  type="text"
                  placeholder="enter your email address"
                  className="flex flex-1 outline-none ml-2"
                />
              </div>
            </div>
            <div className="flex w-full">
              <button
                className="w-full text-white rounded-xl p-4 mb-2 bg-[#075AAA] hover:cursor-pointer"
                onClick={() => navigate("/biodata")}
              >
                Continue
              </button>
            </div>
          </div>

          <div className="flex justify-between w-full max-w-[450px]">
            <p className="text-sm text-[#404040] text-center max-w-[176px]">
              Already Registered?
              <span
                className="hover:cursor-pointer pl-1 text-[#075AAA]"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </p>
            <p
              className="text-sm text-[#404040] text-center hover:cursor-pointer hover:text-[#075AAA]"
              onClick={() => navigate("/reset-password")}
            >
              Forgot Password?
            </p>
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

export default Register;
