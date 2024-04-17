import { useEffect, useState } from "react";
import TechApplicationStatus from "./TechApplicationStatus";
import DesignApplicationStatus from "./DesignApplicationStatus";
import ManagementApplicationStatus from "./ManagementApplicationStatus";
const ApplicationStatus = () => {
  const [selectedDomain, setSelectedDomain] = useState(-1);
  const [domains, setDomains] = useState<string[]>([]);
  useEffect(() => {
    const userDetailsString = localStorage.getItem("userDetails");
    if (userDetailsString) {
      const userDetails = JSON.parse(userDetailsString);
      const userDomains = userDetails.domain;
      console.log("userDomains2:", userDomains);
      setDomains(userDomains);
    }
  }, []);

  return (
    <div className="w-full profile py-6 flex gap-4 flex-col md:flex-row">
      <div className="nes-container with-title is-centered w-full md:w-[30%] invert">
        <p className="title">Domains</p>
        <div className="flex flex-col justify-between h-full gap-4 md:gap-8">
          <button
            type="button"
            onClick={() => setSelectedDomain(0)}
            className={`
              nes-btn w-full h-[30%] text-sm md:text-base
              ${selectedDomain === 0 && "is-primary"}
            `}
          >
            Technical
          </button>
          <button
            onClick={() => setSelectedDomain(1)}
            type="button"
            className={`
              nes-btn w-full h-[30%] text-sm md:text-base
              ${selectedDomain === 1 && "is-primary"}
            `}
          >
            Design
          </button>
          <button
            onClick={() => setSelectedDomain(2)}
            type="button"
            className={`
              nes-btn w-full h-[30%] text-sm md:text-base
              ${selectedDomain === 2 && "is-primary"}
            `}
          >
            Management
          </button>
        </div>
      </div>
      <div className="text-white w-full md:w-[90%]">
        <div className="nes-container with-title is-centered is-dark">
          <p className="title">Status</p>
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
        <p className="text-base md:text-lg mt-4">Your Submissions</p>
        <div className="w-full  nes-container is-rounded is-dark dark-nes-container text-sm"></div>
      </div>
    </div>
  );
};

export default ApplicationStatus;
