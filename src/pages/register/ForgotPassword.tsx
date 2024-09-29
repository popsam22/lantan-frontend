import Lantan from "../../assets/Lantan.svg";
import bg from "../../assets/Frame 484.png";
import email from "../../assets/mail.png";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
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
              Forgot Password
            </h1>
            <p className="text-[#5C5C5C] text-sm">
              A link to reset password will be sent to entered email
            </p>
          </div>
          <div className="flex flex-col w-full max-w-[488px] bg-white p-8 justify-center items-center rounded-3xl drop-shadow-sm">
            <div className="flex flex-col mb-12 w-full">
              <label
                htmlFor="email-address"
                className="text-sm text-[#344054] mb-2"
              >
                Email Address
              </label>
              <div className="flex border p-3 rounded-lg justify-between">
                <img
                  src={email}
                  alt="email"
                  width={24}
                  height={24}
                  className="mr-4"
                />
                <input
                  type="text"
                  placeholder="enter your email address"
                  className="flex flex-1 outline-none"
                />
              </div>
            </div>
            <div className="flex w-full mb-7">
              <button
                className="w-full text-white rounded-xl p-4 mb-2 bg-[#075AAA] hover:cursor-pointer"
                onClick={() => navigate("/set-password")}
              >
                Next
              </button>
            </div>
            <div className="flex items-center w-full max-w-[358px] justify-center">
              <p
                className="text-sm text-[#404040] hover:cursor-pointer hover:text-[#075AAA]"
                onClick={() => navigate("/register")}
              >
                Go back
              </p>
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

export default ForgotPassword;
