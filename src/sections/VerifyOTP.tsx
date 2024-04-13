import Button from "../components/Button";
import BoundingBox from "../components/BoundingBox";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import Cookies from "js-cookie";

const VerifyOTP: React.FC = () => {
  const [otp, setOTP] = useState("");
  const [error, setError] = useState(false);

  const handleVerifyOTP = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const id = localStorage.getItem("id");

      if (!id) {
        throw new Error("User id not found in localStorage");
      }
      const token = Cookies.get("jwtToken");
      const response = await axios.post(
        `https://mfc-recruitment-portal-be.onrender.com/auth/verifyotp/${id}`,
        { otp },
        {
          headers: {
            Authorization: `Bearer ` + `${token}`,
          },
        }
      );
      if (response.data.message) {
        toast.success(`${response.data.message}`);
      }

      setError(false);
    } catch (error) {
      console.log(error);
      toast.error("Invalid Username or Password", {
        className: "custom-bg-error",
        autoClose: 3000,
        theme: "dark",
      });
      setError(true);
    }
  };

  const handleResendClick = async () => {
    console.log("Resend button clicked");
    try {
      {
        const token = Cookies.get("jwtToken");
        const userId = localStorage.getItem("id");
        const email = localStorage.getItem("email");
        console.log("userId:", userId);
        console.log("email:", email);

        const response = await axios.post(
          `https://mfc-recruitment-portal-be.onrender.com/auth/resendotp/${userId}`,
          { email },
          {
            headers: {
              Authorization: `Bearer ` + `${token}`,
            },
          }
        );
        if (response.data.message) {
          toast.success(`${response.data.message}`);
        }
      }
    } catch (error) {
      console.error("Error while resending OTP:", error);
      toast.error("Failed to resend OTP", {
        className: "custom-bg-error",
        autoClose: 3000,
        theme: "dark",
      });
    }
  };

  return (
    <div className="w-full flex-grow h-[100vh] md:h-full relative flex justify-center items-center text-dark">
      <BoundingBox>
        <div className="w-full h-full relative z-[100] flex justify-between flex-col md:flex-row">
          <div className="heading text-center md:text-left">
            <h1 className="text-[2rem] md:text-[2.6rem] text-prime">
              MOZILLA FIREFOX
            </h1>
            <span className="text-light text-base md:text-2xl">
              IS RECRUITING
            </span>
            <div className="mt-6 text-xs md:text-base">
              <div className="nes-btn">Have An Account ??</div>
            </div>
            <div className="mt-6 text-xs md:text-base">
              <NavLink className="nes-btn" to="/">
                Login In &rarr;
              </NavLink>
            </div>
          </div>
          <div className="flex-grow h-full p-4 md:p-8 mt-4 md:mt-0">
            <form
              className="flex flex-col gap-3 md:gap-6 w-full md:w-[60%]  pt-[15%] mx-auto"
              onSubmit={handleVerifyOTP}
            >
              <OTPInput
                className="flex justify-center"
                value={otp}
                onChange={setOTP}
                autoFocus
                OTPLength={6}
                otpType="number"
                disabled={false}
                secure
              />
              <ResendOTP onResendClick={handleResendClick} />

              <Button submit={true}>Verify</Button>
            </form>
          </div>
        </div>
        <img
          src="/background.png"
          alt=""
          className="hidden md:block absolute bottom-0 invert brightness-[50%] left-0 scale-95"
        />
        <div className="absolute bottom-0 w-full md:hidden">
          <img
            src="/empty-bg.png"
            alt=""
            className="w-[85%] mx-auto invert brightness-50 absolute bottom-8"
          />
          <img
            src="/Dino.png"
            alt=""
            className="invert w-20 absolute bottom-10"
          />
          <img
            src="/cacti.png"
            alt=""
            className="invert w-20 bottom-10 absolute right-20"
          />
          <img
            src="/cacti.png"
            alt=""
            className="invert w-10 bottom-10 absolute right-16"
          />
        </div>
      </BoundingBox>
    </div>
  );
};

export default VerifyOTP;
