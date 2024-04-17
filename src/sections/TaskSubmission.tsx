import { useEffect, useState } from "react";
import TechTaskSubmission from "./TechTaskSubmission.";
import DesignTaskSubmission from "./DesignTaskSubmission";
import ManagementTaskSubmission from "./ManagementTaskSubmission";
const TaskSubmission = () => {
  const [selectedDomain, setSelectedDomain] = useState(-1);
  const [domains, setDomains] = useState<string[]>([]);
  // const domainArr = ["tech", "design", "management"];
  // const [domain, setDomain] = useState<string[]>([]);

  // const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value, checked } = e.target;
  //   if (checked) {
  //     setDomain((prevDomains) => [...prevDomains, value]);
  //   } else {
  //     setDomain((prevDomains) =>
  //       prevDomains.filter((domain) => domain !== value)
  //     );
  //   }
  // };

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
          {domains.includes("tech") && (
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
          )}
          {domains.includes("design") && (
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
          )}
          {domains.includes("management") && (
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
          )}
        </div>
      </div>
      <div className="text-white w-full md:w-[90%]  overflow-y-scroll overflow-x-hidden">
        <p className="text-base md:text-lg">Task Submission</p>
        <div className="w-full  nes-container is-rounded is-dark dark-nes-container text-sm ">
          {domains.includes("tech") && selectedDomain === 0 && (
            <TechTaskSubmission />
          )}
          {domains.includes("design") && selectedDomain === 1 && (
            <DesignTaskSubmission />
          )}
          {domains.includes("management") && selectedDomain === 2 && (
            <ManagementTaskSubmission />
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskSubmission;
