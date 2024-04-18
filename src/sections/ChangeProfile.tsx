import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
const ChangeProfile = () => {
  const [domains, setDomains] = useState<string[]>([""]);
  interface data {
    domain: string[];
  }
  useEffect(() => {
    const localData = localStorage.getItem("userDetails");
    const data: data = localData && JSON.parse(localData);
    console.log(data.domain);
    setDomains(data.domain);
  }, []);
  return (
    <div className="w-full h-full bg-black p-12 flex flex-grow">
      <Navbar />
      <div
        className="border-8 border-dashed border-prime h-full flex-grow p-4 text-white flex flex-col gap-4 items-center justify-center"
        style={{ background: "rgba(0,0,0,0)" }}
      >
        <div className="nes-container is-rounded is-dark">
          <h1 className="text-xl md:text-2xl lg:text-3xl">
            Update Your Profile
          </h1>
          <hr className="h-1 bg-white" />
          <section className="flex items-start text-xs md:text-base lg:items-center flex-col lg:flex-row mt-8">
            <p className="w-full text-xl">Update Domains:</p>
            <div className="flex flex-col w-full">
              <label>
                <input
                  type="checkbox"
                  className="nes-checkbox is-dark"
                  value="tech"
                  checked={domains && domains.includes("tech")}
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
                  checked={domains && domains.includes("design")}
                />
                <span className="text-xs md:text-sm lg:text-base">Design</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  className="nes-checkbox is-dark"
                  value="management"
                  checked={domains && domains.includes("management")}
                />
                <span className="text-xs md:text-sm lg:text-base">
                  Management
                </span>
              </label>
            </div>
          </section>
          <button
            type="button"
            className="nes-btn is-success float-right"
            style={{ marginBlock: "10px" }}
          >
            Update &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeProfile;
