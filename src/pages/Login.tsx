import Lantan from "../assets/Lantan.svg";
import email from "../assets/mail.png";
import password from "../assets/password.png";
import bg from "../assets/Frame 484.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
              Login to Dashboard
            </h1>
            <p className="text-[#3D3D3D] text-sm">
              Don't have an account?{" "}
              <span
                className="text-[#075AAA] hover:cursor-pointer text-sm"
                onClick={() => navigate("/register")}
              >
                Register
              </span>
            </p>
          </div>
          <div className="flex flex-col">
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
            <div className="flex flex-col mb-10">
              <label htmlFor="" className="text-sm text-[#3D3D3D] mb-2">
                Password
              </label>
              <div className="flex border p-3 rounded-lg justify-between w-[343px]">
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
                  className="hover:cursor-pointer ml-2.5"
                />
              </div>
            </div>
            <div className="flex">
              <button
                className="w-[342px] text-white rounded-lg p-4 mb-2 bg-[#075AAA] hover:cursor-pointer"
                onClick={() => navigate("/admin/overview")}
              >
                Log in
              </button>
            </div>
            <div className="flex items-center justify-center w-[342px]">
              <span
                className="text-[#075AAA] hover:cursor-pointer"
                onClick={() => navigate("/reset-password")}
              >
                Forgot Password?
              </span>
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

export default Login;
