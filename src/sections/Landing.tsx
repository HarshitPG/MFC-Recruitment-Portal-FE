import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import { toast } from "react-toastify";
import BoundingBox from "../components/BoundingBox";
import Button from "../components/Button";
import CustomToast, { ToastContent } from "../components/CustomToast";
import Input from "../components/Input";
import PlayBtn from "../components/PlayBtn";
import Scene3d from "../components/Scene3d";
import { useCharacterAnimations } from "../context/CharAnimation";
import { useTabStore } from "../store";

const Landing = () => {
  const [openToast, setOpenToast] = useState(false);
  const [toastContent, setToastContent] = useState<ToastContent>({});
  const { isPlayButton } = useCharacterAnimations();
  const { tabIndex, setTabIndex } = useTabStore();
  const [showComponents, setShowComponents] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  // console.log(error);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isPlayButton) {
      timeout = setTimeout(() => {
        setShowComponents(true);
      }, 3500);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isPlayButton]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    // console.log("Trimmed Email:", trimmedEmail);
    // console.log("Trimmed Password:", trimmedPassword);
    const formData = {
      email,
      password,
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/login`,
        formData
      );
      if (response.data.token) {
        document.cookie = "jwtToken=" + response.data.token;
        setOpenToast(true);
        setToastContent({ message: "OK" });
        toast.success("OK", {
          // className: "custom-bg",
          autoClose: 3000,
          theme: "dark",
        });
        secureLocalStorage.setItem("id", response.data.id);
        secureLocalStorage.setItem("name", response.data.username);
        secureLocalStorage.setItem("email", response.data.email);
        fetchUserDetails(response.data.id);
        // console.log("response.data.id", response.data.id);
      }
      if (response.data.error) {
        setToastContent({
          message: `${response.data.error}`,
          type: "error",
        });
      }

      setError(false);
    } catch (error) {
      // console.log(error);
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

  const fetchUserDetails = async (userId: string) => {
    try {
      const id = secureLocalStorage.getItem("id");

      if (!id) {
        throw new Error("User id not found in secureLocalStorage");
      }
      const token = Cookies.get("jwtToken");
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/user/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response.data);
      secureLocalStorage.setItem("userDetails", JSON.stringify(response.data));
      const userDetailsString = secureLocalStorage.getItem("userDetails");
      if (typeof userDetailsString === "string") {
        const userDetails = JSON.parse(userDetailsString);
        const isProfileDone = userDetails.isProfileDone;
        // console.log("Is Profile Done:", isProfileDone);
        if (isProfileDone) {
          setTabIndex(1);
        } else {
          setTabIndex(0);
          // console.log("tabIndex", tabIndex);
        }
        navigate("/dashboard");
      } else {
        console.error("User details not found in secureLocalStorage");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex-grow h-[100vh] md:h-full relative flex justify-center items-center text-dark  p-4 md:p-12">
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
        <div className="w-full h-full  relative z-[100] flex justify-between flex-col lg:flex-row">
          {/* <img
  src="/sky_muchbetter.png"
  alt=""
  className="hidden md:block absolute top-[-25%] left-1/2 transform -translate-x-1/2 w-full h-full object-contain z-50"
  style={{
    filter: "invert(50%) brightness(50%)",
    maxWidth: "80vw", // Adjust the maximum width based on viewport width
    maxHeight: "80vh", // Adjust the maximum height based on viewport height
  }}
/> */}
          <div className="heading text-center md:text-left z-[100]">
            <h1 className="text-[2rem] md:text-[2.6rem] text-prime">
              MOZILLA FIREFOX
            </h1>
            <span className="text-light text-base md:text-2xl z-[100]">
              IS RECRUITING
            </span>
            <div className="hidden lg:block">
              <div
                className={
                  isPlayButton
                    ? "animate-fadeOut opacity-0"
                    : " text-prime text-base lg:text-2xl mt-10 opacity-100"
                }
              >
                Wanna play with Mr.Fox Jr??
              </div>
              <div className="mt-0 text-xs md:text-base">
                {showComponents && isPlayButton && (
                  <>
                    <div className="h-[55vh] pb-[15vh] w-[100%]">
                      <Scene3d />
                    </div>
                    <PlayBtn />
                  </>
                )}
                <PlayBtn />
              </div>
            </div>
          </div>
          <div className="flex-grow h-full p-4 lg:p-8 mt-4 md:mt-0 z-[100]">
            <form
              className="form-container flex flex-col mt-12 lg:mt-0 gap-3 md:gap-6 w-full lg:w-[60%] mx-auto"
              onSubmit={handleLogin}
            >
              <Input
                label={"email"}
                placeholder="Vit-Email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value.trim().toLowerCase())}
              />
              <Input
                label={"password"}
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value.trim())}
              />
              <Button submit={true}>Sign In</Button>
              <NavLink
                to="/forgotpassword"
                className="text-center text-orange text-sm md:text-base"
              >
                Forgot Password??
              </NavLink>
            </form>

            <section className="text-center mt-6 md:mt-4 text-light bg-dark py-0.4 md:py-0.5  lg:w-[60%] mx-auto relative flex flex-col w-[85%]">
              <p className="text-xs md:text-base mt-2">
                Don't have an account?
              </p>
              <div className="text-black text-sm md:text-lg cursor-pointer w-full bg-prime py-1">
                <div>
                  <NavLink to="/signup" className="text-black  ">
                    Sign Up
                  </NavLink>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="hidden md:hidden h-[40vh] w-full absolute bottom-0 left-0  flex-col gap-4 ">
          <div
            className={
              isPlayButton
                ? "animate-fadeOut opacity-0"
                : " text-prime text-base md:text-2xl md:mt-10 opacity-100 text-center"
            }
          >
            Wanna play with Mr.Fox Jr??
          </div>
          <div className="mt-6 text-xs md:text-base w-full">
            {showComponents && isPlayButton && (
              <>
                <div className=" w-[100%]">
                  <Scene3d />
                </div>
                <PlayBtn />
              </>
            )}
            <PlayBtn />
          </div>
        </div>
        <div
          className={`hidden md:block ${
            isPlayButton ? "animate-fadeOut opacity-0" : "opacity-100"
          }`}
        >
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
        </div>
      </BoundingBox>
    </div>
  );
};

export default Landing;
