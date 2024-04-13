import Input from "../components/Input";
import Button from "../components/Button";
import BoundingBox from "../components/BoundingBox";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const Signup: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [regno, setRegno] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      username,
      email,
      regno,
      password,
      confirmpassword,
    };
    try {
      const response = await axios.post(
        "https://mfc-recruitment-portal-be.onrender.com/auth/signup",
        formData
      );
      if (response.data.token) {
        document.cookie = "jwtToken=" + response.data.token;
        toast.success("OTP SENT", {
          className: "custom-bg",
          autoClose: 3000,
          theme: "dark",
        });
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("name", response.data.username);
        localStorage.setItem("email", response.data.email);
        navigate("/verifyotp");
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
              className="flex flex-col gap-3 md:gap-6 w-full md:w-[60%] mx-auto"
              onSubmit={handleSignup}
            >
              <Input
                label={"name"}
                placeholder="Name"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                label={"email"}
                placeholder="Vit-Email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label={"regno"}
                placeholder="Registration Number"
                type="text"
                value={regno}
                onChange={(e) => setRegno(e.target.value)}
              />
              <Input
                label={"password"}
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                label={"confirm password"}
                placeholder="Confirm Password"
                type="password"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <Button submit={true}>Sign Up</Button>
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

export default Signup;
