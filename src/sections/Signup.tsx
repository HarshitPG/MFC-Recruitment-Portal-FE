import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import secureLocalStorage from "react-secure-storage";
import BoundingBox from "../components/BoundingBox";
import Button from "../components/Button";
import CustomToast, { ToastContent } from "../components/CustomToast";
import Input from "../components/Input";

interface SignupFormValues {
  name: string;
  registerNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup: React.FC = () => {
  const [openToast, setOpenToast] = useState(false);
  const [toastContent, setToastContent] = useState<ToastContent>({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [regno, setRegno] = useState("");
  const [error, setError] = useState(false);
  const [formErrors, setFormErrors] = useState<Partial<SignupFormValues>>({});
  const [mutex, setMutex] = useState(false);
  const navigate = useNavigate();
  function validateData() {
    const errors: Partial<SignupFormValues> = {};
    let isError = false;
    if (username.length < 3) {
      errors.name = "Name is required";
      isError = true;
    } else {
      errors.name = "";
      isError = false;
    }

    const registerNumberRegex = /^(21|22|23)[a-zA-Z]{3}\d{4}$/;
    if (!regno) {
      errors.registerNumber = "Register number is required";
      isError = true;
    } else if (!registerNumberRegex.test(regno)) {
      errors.registerNumber = "Invalid register number format";
      isError = true;
    } else {
      errors.registerNumber = "";
      isError = false;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@vitstudent\.ac\.in$/;
    // const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!email) {
      errors.email = "Email is required";
      isError = true;
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email address. Must end with @vitstudent.ac.in";
      isError = true;
    }
    if (!password) {
      errors.password = "Password is required";
      isError = true;
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
      isError = true;
    }
    if (!confirmpassword) {
      errors.confirmPassword = "Confirm Password is required";
      isError = true;
    } else if (password !== confirmpassword) {
      errors.confirmPassword = "Passwords must match";
      isError = true;
    }
    // Update the formErrors state with the new errors
    setFormErrors(errors);
    return isError;
  }
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isErrorValidation = validateData();

    const formData = {
      username,
      email,
      regno,
      password,
      confirmpassword,
    };
    if (!isErrorValidation) {
      try {
        setMutex(true);
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/auth/signup`,
          formData
        );
        if (response.data.token) {
          document.cookie = "jwtToken=" + response.data.token;
          setOpenToast(true);
          setToastContent({
            message: "OTP SENT",
            // type: "error",
          });

          // toast.success("OTP SENT", {
          //   className: "custom-bg",
          //   autoClose: 3000,
          //   theme: "dark",
          // });
          secureLocalStorage.setItem("id", response.data.id);
          secureLocalStorage.setItem("name", response.data.username);
          secureLocalStorage.setItem("email", response.data.email);
          navigate("/verifyotp");
          setMutex(false);
        }
        if (response.data.error) {
          setOpenToast(true);
          setToastContent({
            message: `${response.data.error}`,
            type: "error",
          });
          setMutex(false);
        }

        setError(false);
        console.error(error);
        // TODO: Set the appropriate error message here
      } catch (error) {
        console.log(error);
        setMutex(false);
        // setOpenToast(true);
        // setToastContent({
        //   message: "Error while signup",
        //   type: "error",
        // });
        // toast.error("Invalid Username or Password", {
        //   className: "custom-bg-error",
        //   autoClose: 3000,
        //   theme: "dark",
        // });
        setError(true);
      }
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
        <div className="w-full h-full relative z-[100] flex justify-between flex-col md:flex-row">
          <div className="heading text-center md:text-left">
            <h1 className="text-[2rem] md:text-[2.6rem] text-prime">
              MOZILLA FIREFOX
            </h1>
            <span className="text-light text-base md:text-2xl">
              IS RECRUITING
            </span>
            <div className="mt-6 text-xs md:text-base">
              <div className="text-white -mb-4">Have An Account ??</div>
            </div>
            <div className="mt-6 text-xs md:text-base">
              <NavLink className="nes-btn" to="/">
                Login In &rarr;
              </NavLink>
            </div>
            <section className="icon-list flex gap-8 mt-8 w-full justify-center md:justify-start">
              <a href="https://www.instagram.com/mfc_vit">
                <i className="nes-icon instagram  md:is-medium">/</i>
              </a>
              <a href="mailto:mozillafirefox@vit.ac.in">
                <i className="nes-icon gmail md:is-medium"></i>
              </a>
              <a href="https://www.linkedin.com/company/mfcvit?originalSubdomain=in">
                <i className="nes-icon linkedin md:is-medium"></i>
              </a>
            </section>
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
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                required={true}
              />
              {formErrors.name && (
                <div className="text-xs -mt-4 text-prime">
                  {formErrors.name}
                </div>
              )}
              <Input
                label={"email"}
                placeholder="Vit-Email"
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value.trim().toLowerCase());
                }}
                required={true}
              />
              {formErrors.email && (
                <div className="text-xs -mt-4 text-prime">
                  {formErrors.email}
                </div>
              )}
              <Input
                label={"regno"}
                placeholder="Registration Number"
                type="text"
                value={regno}
                onChange={(e) => {
                  setRegno(e.target.value.toUpperCase());
                }}
                required={true}
              />
              {formErrors.registerNumber && (
                <div className="text-xs -mt-4 text-prime">
                  {formErrors.registerNumber}
                </div>
              )}
              <Input
                label={"password"}
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value.trim())}
                required={true}
              />
              {formErrors.password && (
                <div className="text-xs -mt-4 text-prime">
                  {formErrors.password}
                </div>
              )}
              <Input
                label={"confirm password"}
                placeholder="Confirm Password"
                type="password"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value.trim())}
                required={true}
              />
              {formErrors.confirmPassword && (
                <div className="text-xs -mt-4 text-prime">
                  {formErrors.confirmPassword}
                </div>
              )}
              <Button submit={true} disabled={mutex}>
                {mutex === true ? (
                  <div className="flex items-center justify-center gap-4">
                    <span>Loading</span>
                    <img
                      src="/loader.png"
                      alt="loading..."
                      className="w-6 invert animation-spin"
                    />
                  </div>
                ) : (
                  "Sign Up"
                )}
              </Button>
            </form>
          </div>
        </div>
        {/* <img
          src="/background.png"
          alt=""
          className="hidden md:block absolute bottom-0 invert brightness-[50%] left-0 scale-95"
        /> */}
        <div className="fixed bottom-0 w-full md:hidden opacity-75">
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
