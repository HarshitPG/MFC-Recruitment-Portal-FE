import Input from "../components/Input";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useLayoutEffect, useState } from "react";
// import { toast } from "react-toastify";
import CustomToast, { ToastContent } from "../components/CustomToast";
import { useTabStore } from "../store";
import secureLocalStorage from "react-secure-storage";

const Profile = () => {
  const { setTabIndex } = useTabStore();
  const [openToast, setOpenToast] = useState(false);
  const [toastContent, setToastContent] = useState<ToastContent>({});
  const [mobile, setMobileno] = useState("");
  const [emailpersonal, setEmailPersonal] = useState("");
  const [participatedEvent, setParticipated] = useState("");
  const [volunteeredEvent, setVolunteered] = useState("");
  const [domain, setDomain] = useState<string[]>([]);
  const [error, setError] = useState("false");
  const [isProfile, setIsProfile] = useState();
  const [isNextPage, setIsNextpage] = useState(false);
  // const navigate = useNavigate();

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setDomain((prevDomains) => [...prevDomains, value]);
    } else {
      setDomain((prevDomains) =>
        prevDomains.filter((domain) => domain !== value)
      );
    }
  };

  const handleProfileUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (domain.length === 0) {
      setError("Please select at least one domain.");
      return;
    }

    if (volunteeredEvent.length > 100) {
      setError("Volunteering event details should be within 100 characters.");
      return;
    }
    if (participatedEvent.length > 100) {
      setError("Participation event details should be within 100 characters.");
      return;
    }

    if (mobile.length !== 10 || !/^\d{10}$/.test(mobile)) {
      setError(
        "Mobile number should be 10 digits long and in the correct format."
      );
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(emailpersonal)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");

    const formData = {
      mobile,
      emailpersonal,
      domain,
      participatedEvent,
      volunteeredEvent,
    };
    try {
      const id = secureLocalStorage.getItem("id");

      if (!id) {
        throw new Error("User id not found in secureLocalStorage");
      }
      const token = Cookies.get("jwtToken");
      const response = await axios.put(
        `${import.meta.env.VITE_BASE_URL}/user/updateuser/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ` + `${token}`,
          },
        }
      );
      if (response.data) {
        fetchUserDetails();
      }
      if (response.data.message) {
        setOpenToast(true);
        setToastContent({
          message: `${response.data.message}`,
        });
        // let userDetails = secureLocalStorage.getItem("userDetails");
        // const userDetailsStr = secureLocalStorage.getItem("userDetails");
        // if (userDetailsStr) {
        //   const userDetails: UserDetails = JSON.parse(userDetailsStr);
        //   userDetails.isProfileDone = true;
        //   userDetails.domain = formData.domain;
        //   secureLocalStorage.setItem("userDetails", JSON.stringify(userDetails));
        // }
        // setTabIndex(1);
        // fetchUserDetails();
      }

      setError("false");
      console.error(error);
    } catch (error) {
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
      setError("true");
    }
  };

  const fetchUserDetails = async () => {
    try {
      const id = secureLocalStorage.getItem("id");

      if (!id) {
        throw new Error("User id not found in secureLocalStorage");
      }
      const token = Cookies.get("jwtToken");
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/user/user/${id}`,
        {
          headers: {
            Authorization: `Bearer ` + `${token}`,
          },
        }
      );
      // console.log(response.data);

      secureLocalStorage.setItem("userDetails", JSON.stringify(response.data));

      // console.log(response.data);

      // console.log("ProfileIsDone", response.data.isProfileDone);
      setIsNextpage(true);
      setIsProfile(response.data.isProfileDone);
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    const userDetailsstore = secureLocalStorage.getItem(
      "userDetails"
    ) as string;
    if (userDetailsstore) {
      const userDetails = JSON.parse(userDetailsstore);
      setIsProfile(userDetails.isProfileDone);
    }
  }, []);

  // console.log("isProfile", isProfile);
  useEffect(() => {
    if (isProfile === true && isNextPage === true) {
      setTabIndex(1);
      setIsNextpage(false);
    }
  }, [isProfile]);

  // if (isProfile) {
  //   // const userDetails = JSON.parse(userDetailsStr);
  //   // userDetails.isProfileDone = true;
  //   return (
  //     <div className="min-h-[75vh] w-[90%] md:w-[70%] text-center text-white mx-auto text-sm md:text-xl flex items-center justify-center">
  //       You've already completed your profile!
  //       <br />
  //       <br />
  //       If you want to update your domains, go to the profile section
  //     </div>
  //   );
  // }

  return (
    <div className="w-full profile py-6 flex gap-4 flex-col lg:flex-row">
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

      {isProfile ? (
        <div className="min-h-[75vh] w-[90%] lg:w-[70%] text-center text-white mx-auto text-sm md:text-xl flex items-center justify-center">
          You've already completed your profile!
          <br />
          <br />
          If you want to update your domains, go to the profile section
        </div>
      ) : (
        <>
          {" "}
          <div className="nes-container is-dark with-title w-full lg:w-[30%] dark-nes-container">
            <p className="title dark-nes-container text-sm md:text-base">
              Hello World!
            </p>
            <p className="text-light text-xs md:text-base description">
              Got a sec? We need you to spice up your profile with the right
              deets. Drop your name, contacts, Domains and whatever else floats
              your boat. It helps us help you better! Cheers!
            </p>
          </div>
          <div className="nes-container is-rounded w-full lg:w-[70%] is-dark dark-nes-container overflow-y-scroll">
            <form
              className="flex flex-col gap-8 md:gap-4 w-full"
              onSubmit={handleProfileUpdate}
            >
              <section className="flex items-start text-xs md:text-base lg:items-center flex-col lg:flex-row">
                <label className="w-full lg:w-[40%] text-sm">
                  Mobile Number:
                </label>
                <Input
                  label={"mobile"}
                  placeholder="Your mobile"
                  type="text"
                  value={mobile}
                  onChange={(e) => setMobileno(e.target.value)}
                />
              </section>
              <section className="flex items-start text-xs lg:text-base lg:items-center flex-col lg:flex-row">
                <label className="w-full lg:w-[40%] text-sm">
                  Personal Email:
                </label>
                <Input
                  label={"email"}
                  placeholder="Personal Email"
                  type="text"
                  value={emailpersonal}
                  onChange={(e) => setEmailPersonal(e.target.value)}
                />
              </section>
              <section className="flex items-start text-xs md:text-base lg:items-center flex-col lg:flex-row">
                <p className="w-full lg:w-[40%]">Domains:</p>
                <div className="flex flex-col">
                  <label>
                    <input
                      type="checkbox"
                      className="nes-checkbox is-dark"
                      value="tech"
                      checked={domain.includes("tech")}
                      onChange={handleCheckboxChange}
                    />
                    <span className="text-xs md:text-sm lg:text-base">
                      Technical
                    </span>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      className="nes-checkbox is-dark"
                      value="design"
                      checked={domain.includes("design")}
                      onChange={handleCheckboxChange}
                    />
                    <span className="text-xs md:text-sm lg:text-base">
                      Design
                    </span>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      className="nes-checkbox is-dark"
                      value="management"
                      checked={domain.includes("management")}
                      onChange={handleCheckboxChange}
                    />
                    <span className="text-xs md:text-sm lg:text-base">
                      Management
                    </span>
                  </label>
                </div>
              </section>
              <section className="flex items-start text-xs md:text-base flex-col">
                <label className="w-full text-sm">
                  Have you volunteered in any of the MFC event:
                  <br />
                  If yes, enter event name
                </label>
                <Input
                  label={"volunteer"}
                  placeholder="Enter event details"
                  type="text"
                  value={volunteeredEvent}
                  onChange={(e) => setVolunteered(e.target.value)}
                />
              </section>
              <section className="flex items-start text-xs md:text-base flex-col">
                <label className="w-full text-sm">
                  Have you participated in any of the MFC event:
                  <br />
                  If yes, enter event name
                </label>
                <Input
                  label={"participated"}
                  placeholder="Enter event details"
                  type="text"
                  value={participatedEvent}
                  onChange={(e) => setParticipated(e.target.value)}
                />
              </section>
              <div className="w-full flex justify-end">
                <button
                  type="submit"
                  className="nes-btn is-error w-fit custom-nes-error text-xs md:text-xl"
                >
                  Next &rarr;
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
