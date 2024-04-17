import Input from "../components/Input";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
// import { toast } from "react-toastify";
import CustomToast from "../components/CustomToast";
import { ToastContent } from "../components/CustomToast";
const Profile = () => {
  const [openToast, setOpenToast] = useState(false);
  const [toastContent, setToastContent] = useState<ToastContent>({});
  const [mobile, setMobileno] = useState("");
  const [emailpersonal, setEmailPersonal] = useState("");
  const [participatedEvent, setParticipated] = useState("");
  const [volunteeredEvent, setVolunteered] = useState("");
  const [domain, setDomain] = useState<string[]>([]);
  const [error, setError] = useState(false);
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
    const formData = {
      mobile,
      emailpersonal,
      domain,
      participatedEvent,
      volunteeredEvent,
    };
    try {
      const id = localStorage.getItem("id");

      if (!id) {
        throw new Error("User id not found in localStorage");
      }
      const token = Cookies.get("jwtToken");
      const response = await axios.put(
        `https://mfc-recruitment-portal-be.vercel.app/user/updateuser/${id}`,
        formData,
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
        });
      }

      setError(false);
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
      setError(true);
    }
  };
  return (
    <div className="w-full profile py-6 flex gap-4 flex-col md:flex-row">
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
      <div className="nes-container is-dark with-title w-full md:w-[30%] dark-nes-container">
        <p className="title dark-nes-container text-sm md:text-base">
          Hello World!
        </p>
        <p className="text-light text-xs md:text-base description">
          Got a sec? We need you to spice up your profile with the right deets.
          Drop your name, contacts, Domains and whatever else floats your boat.
          It helps us help you better! Cheers!
        </p>
      </div>

      <div className="nes-container is-rounded w-full md:w-[70%] is-dark dark-nes-container overflow-y-scroll">
        <form
          className="flex flex-col gap-8 md:gap-4 w-full"
          onSubmit={handleProfileUpdate}
        >
          <section className="flex items-start text-xs md:text-base md:items-center flex-col md:flex-row">
            <label className="w-full md:w-[40%] text-sm">Mobile Number:</label>
            <Input
              label={"mobile"}
              placeholder="Your mobile"
              type="text"
              value={mobile}
              onChange={(e) => setMobileno(e.target.value)}
            />
          </section>
          <section className="flex items-start text-xs md:text-base md:items-center flex-col md:flex-row">
            <label className="w-full md:w-[40%] text-sm">Personal Email:</label>
            <Input
              label={"email"}
              placeholder="Personal Email"
              type="text"
              value={emailpersonal}
              onChange={(e) => setEmailPersonal(e.target.value)}
            />
          </section>
          <section className="flex items-start text-xs md:text-base md:items-center flex-col md:flex-row">
            <p className="w-full md:w-[40%]">Domains:</p>
            <div className="flex flex-col">
              <label>
                <input
                  type="checkbox"
                  className="nes-checkbox is-dark"
                  value="tech"
                  checked={domain.includes("tech")}
                  onChange={handleCheckboxChange}
                />
                <span className="text-xs md:text-base">Technical</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  className="nes-checkbox is-dark"
                  value="design"
                  checked={domain.includes("design")}
                  onChange={handleCheckboxChange}
                />
                <span className="text-xs md:text-base">Design</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  className="nes-checkbox is-dark"
                  value="management"
                  checked={domain.includes("management")}
                  onChange={handleCheckboxChange}
                />
                <span className="text-xs md:text-base">Management</span>
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
    </div>
  );
};

export default Profile;
