import Button from "../components/Button";
import BoundingBox from "../components/BoundingBox";
// import { NavLink } from "react-router-dom";
import axios from "axios";
// import { toast } from "react-toastify";
import { useState } from "react";
import OtpInput from "react-otp-input";
// import OTPInput, { ResendOTP } from "otp-input-react";
import Cookies from "js-cookie";
import CustomToast from "../components/CustomToast";
import { ToastContent } from "../components/CustomToast";
import { NavLink, useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

const VerifyOTP: React.FC = () => {
  const navigate = useNavigate();
  const [openToast, setOpenToast] = useState(false);
  const [toastContent, setToastContent] = useState<ToastContent>({});
  const [otp, setOTP] = useState("");
  const [error, setError] = useState(false);
  const [mutex, setMutex] = useState(false);

  const handleVerifyOTP = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const id = secureLocalStorage.getItem("id");

      if (!id) {
        throw new Error("User id not found in secureLocalStorage");
      }
      const token = Cookies.get("jwtToken");
      setMutex(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/verifyotp/${id}`,
        { otp },
        {
          headers: {
            Authorization: `Bearer ` + `${token}`,
          },
        }
      );
      if (response.data.message === "verified") {
        setOpenToast(true);
        setToastContent({
          message: `${response.data.message}`,
          // type: "error",
        });

        // toast.success(`${response.data.message}`);
        setTimeout(() => {
          navigate("/");
          setMutex(false);
        }, 1000);
      }
      if (response.data.message !== "verified") {
        setOpenToast(true);
        setToastContent({
          message: `${response.data.message}`,
          type: "error",
        });
        setMutex(false);
        // toast.success(`${response.data.message}`);
      }

      setError(false);
    } catch (error) {
      setMutex(false);
      console.log(error);
      setOpenToast(true);
      setToastContent({
        message: "Invalid Username or Password",
        type: "error",
      });
      // toast.error("Invalid Username or Password", {
      //   className: "custom-bg-error",
      //   autoClose: 3000,
      //   theme: "dark",
      // });
      setError(true);
    }
  };

  const handleResendClick = async () => {
    // console.log("Resend button clicked");
    try {
      {
        const token = Cookies.get("jwtToken");
        const id = secureLocalStorage.getItem("id");
        const email = secureLocalStorage.getItem("email");
        // console.log("userId:", userId);
        // console.log("email:", email);

        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/auth/resendotp/${id}`,
          { email },
          {
            headers: {
              Authorization: `Bearer ` + `${token}`,
            },
          }
        );
        if (response.data.message) {
          setOpenToast(true);
          setToastContent({
            message: `${response.data.message}`,
            // type: "error",
          });
          // toast.success(`${response.data.message}`);
        }
      }
    } catch (error) {
      console.error("Error while resending OTP:", error);
      setOpenToast(true);
      setToastContent({
        message: "Failed to resend OTP",
        type: "error",
      });
      // toast.error("Failed to resend OTP", {
      //   className: "custom-bg-error",
      //   autoClose: 3000,
      //   theme: "dark",
      // });
    }
  };

  return (
    <div className="w-full flex-grow h-[100vh] md:h-full relative flex justify-center items-center text-dark p-4 md:p-12">
      {openToast && (
        <CustomToast
          setToast={setOpenToast}
          setToastContent={setToastContent}
          message={toastContent.message}
          type={toastContent.type}
          customStyle={toastContent.customStyle}
          duration={toastContent.duration}
        />
      )}
      <BoundingBox>
        <div className="w-full h-full relative z-[100] flex justify-between flex-col md:flex-row">
          <div className="heading text-center md:text-left">
            <h1 className="text-[2rem] md:text-[2.6rem] text-prime">
              MOZILLA FIREFOX
            </h1>

            <div className="mt-6 text-xs md:text-base">
              <div className="text-white -mb-4">Have An Account ??</div>
            </div>
            <div className="mt-6 text-xs md:text-base">
              <NavLink className="nes-btn" to="/">
                LogIn &rarr;
              </NavLink>
            </div>
          </div>
          <div className="flex-grow h-full p-4 md:p-8 mt-4 md:mt-0">
            {/* {error && <p className="text-red-500">Some Error Occured!</p>} */}
            <form
              className="flex flex-col gap-3 md:gap-6 w-full md:w-fit pt-[15%] mx-auto"
              onSubmit={handleVerifyOTP}
            >
              <OtpInput
                value={otp}
                onChange={setOTP}
                numInputs={6}
                renderSeparator={<span className="hidden md:block">-</span>}
                renderInput={(props) => (
                  <input
                    {...props}
                    className="otp aspect-square nes-input is-dark text-white"
                    style={{ color: "#ffffff" }}
                  />
                )}
              />
              {/* <OTPInput
                className="flex justify-center"
                value={otp}
                onChange={setOTP}
                autoFocus
                OTPLength={6}
                otpType="number"
                disabled={false}
                secure
              />
              <ResendOTP onResendClick={handleResendClick} /> */}
              <button
                onClick={handleResendClick}
                className="nes-btn text-xs"
                type="button"
              >
                Resend OTP
              </button>
              <Button submit={true} disabled={mutex}>
                {mutex === true ? (
                  <div className="flex items-center justify-center gap-4">
                    <span>Verifying</span>
                    <img
                      src="/loader.png"
                      alt="loading..."
                      className="w-6 invert animation-spin"
                    />
                  </div>
                ) : (
                  "Verify"
                )}
              </Button>
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
