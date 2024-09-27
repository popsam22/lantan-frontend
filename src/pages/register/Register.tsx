import bg from "../../assets/Frame 484.png";
import Lantan from "../../assets/Lantan.svg";
import email from "../../assets/mail.png";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="flex justify-between flex-1 overflow-hidden h-screen bg-[#FCFCFD]">
        <div className="flex flex-1 flex-col m-20 pl-5 justify-center w-full relative left-10">
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
          <div className="flex flex-col mb-8">
            <label htmlFor="" className="text-sm text-[#344054] mb-2">
              Email
            </label>
            <div className="flex items-center overflow-hidden w-full border p-3 rounded-lg max-w-[343px] mb-5">
              <img
                src={email}
                alt="email"
                width={20}
                height={20}
                className="mr-4"
              />
              <input
                type="text"
                placeholder="enter your email address"
                className="flex flex-1 outline-none"
              />
            </div>
          </div>
          <div className="flex mb-7">
            <button className="w-[342px] text-white rounded-xl p-4 mb-2 bg-[#075AAA] hover:cursor-pointer">
              Continue
            </button>
          </div>
          <div className="flex justify-between w-full max-w-[350px]">
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
              Forgot Password
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

export default Register;
