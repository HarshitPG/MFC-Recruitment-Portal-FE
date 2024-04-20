import { useEffect, useState } from "react";
import TechApplicationStatus from "./TechApplicationStatus";
import DesignApplicationStatus from "./DesignApplicationStatus";
import ManagementApplicationStatus from "./ManagementApplicationStatus";
import secureLocalStorage from "react-secure-storage";

const ApplicationStatus = () => {
  const [selectedDomain, setSelectedDomain] = useState(-1);
  const [domains, setDomains] = useState<string[]>([]);
  useEffect(() => {
    const userDetailsString = secureLocalStorage.getItem("userDetails");
    if (typeof userDetailsString === "string") {
      const userDetails = JSON.parse(userDetailsString) as { domain: string[] };
      const userDomains = userDetails.domain;
      // console.log("userDomains2:", userDomains);
      setDomains(userDomains);
    }
  }, []);

  return (
    <div className="w-full profile py-6 flex gap-4 flex-col lg:flex-row">
      <div className="nes-container with-title is-centered w-full lg:w-[30%] invert">
        <p className="title">Domains</p>
        <div className="flex flex-col justify-between h-full gap-4 lg:gap-8">
          {domains.includes("tech") && (
            <button
              type="button"
              onClick={() => setSelectedDomain(0)}
              className={`
              nes-btn w-full lg:h-[30%] text-sm md:text-base domain-btn
              ${selectedDomain === 0 && "is-primary"}
            `}
            >
              Technical
            </button>
          )}
          {domains.includes("design") && (
            <button
              onClick={() => setSelectedDomain(1)}
              type="button"
              className={`
              nes-btn w-full lg:h-[30%] text-sm md:text-base domain-btn
              ${selectedDomain === 1 && "is-primary"}
            `}
            >
              Design
            </button>
          )}
          {domains.includes("management") && (
            <button
              onClick={() => setSelectedDomain(2)}
              type="button"
              className={`
              nes-btn w-full lg:h-[30%] text-sm md:text-base domain-btn
              ${selectedDomain === 2 && "is-primary"}
            `}
            >
              Management
            </button>
          )}
        </div>
      </div>
      <div className="text-white w-full lg:w-[90%]">
        <div className="nes-container with-title is-centered is-dark">
          <p className="title">Status</p>
          {selectedDomain === -1 && (
            <div className="text-xs">Select Domain to see Submissions</div>
          )}
          {domains.includes("tech") && selectedDomain === 0 && (
            <TechApplicationStatus />
          )}
          {domains.includes("design") && selectedDomain === 1 && (
            <DesignApplicationStatus />
          )}
          {domains.includes("management") && selectedDomain === 2 && (
            <ManagementApplicationStatus />
          )}
        </div>
        {/* <p className="text-base md:text-lg mt-4">Your Submissions</p>
        <div className="w-full  nes-container is-rounded is-dark dark-nes-container text-sm"></div> */}
      </div>
    </div>
  );
};

export default ApplicationStatus;
