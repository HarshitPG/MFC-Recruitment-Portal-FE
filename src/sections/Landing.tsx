import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BoundingBox from "../components/BoundingBox";
import Button from "../components/Button";
import Input from "../components/Input";
import { useTabStore } from "../store";
const Landing = () => {
  const { tabIndex, setTabIndex } = useTabStore();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  console.log(error);
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };
    try {
      const response = await axios.post(
        "https://mfc-recruitment-portal-be.onrender.com/auth/login",
        formData
      );
      if (response.data.token) {
        document.cookie = "jwtToken=" + response.data.token;
        toast.success("OK", {
          className: "custom-bg",
          autoClose: 3000,
          theme: "dark",
        });
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("name", response.data.username);
        localStorage.setItem("email", response.data.email);
        fetchUserDetails(response.data.id);
        console.log("response.data.id", response.data.id);
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

  const fetchUserDetails = async (userId: string) => {
    try {
      const id = localStorage.getItem("id");

      if (!id) {
        throw new Error("User id not found in localStorage");
      }
      const token = Cookies.get("jwtToken");
      const response = await axios.get(
        `https://mfc-recruitment-portal-be.onrender.com/user/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ` + `${token}`,
          },
        }
      );
      console.log(response.data);
      localStorage.setItem("userDetails", JSON.stringify(response.data));
      const userDetailsString = localStorage.getItem("userDetails");
      if (userDetailsString) {
        const userDetails = JSON.parse(userDetailsString);
        const isProfileDone = userDetails.isProfileDone;
        console.log("Is Profile Done:", isProfileDone);
        if (isProfileDone) {
          setTabIndex(1);
        } else {
          setTabIndex(0);
          console.log("tabIndex", tabIndex);
        }
        navigate("/dashboard");
      } else {
        console.error("User details not found in localStorage");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex-grow h-[100vh] md:h-full relative flex justify-center items-center text-dark  p-4 md:p-12">
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
              <Link className="nes-btn" to="/dashboard">
                Go to Dashboard &rarr;
              </Link>
            </div>
          </div>
          <div className="flex-grow h-full p-4 md:p-8 mt-4 md:mt-0">
            <form
              className="flex flex-col gap-3 md:gap-6 w-full md:w-[60%] mx-auto"
              onSubmit={handleLogin}
            >
              <Input
                label={"email"}
                placeholder="Vit-Email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label={"password"}
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button submit={true}>Sign In</Button>
            </form>
            <section className="text-center mt-6 md:mt-12 text-light bg-dark py-2 md:py-4 w-full md:w-[60%] mx-auto relative">
              <p className="mb-8 md:mb-12 text-xs md:text-base">
                Don't have an account?
              </p>
              <div className="text-black text-sm md:text-lg cursor-pointer w-full bg-prime absolute bottom-0 py-1">
                <div>
                  <NavLink to="/signup" className="text-black  ">
                    Sign Up
                  </NavLink>
                </div>
                <NavLink to="/forgotpassword" className="text-black  ">
                  Forgot Password??
                </NavLink>
              </div>
            </section>
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

export default Landing;
