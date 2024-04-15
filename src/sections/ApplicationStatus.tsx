import { useState } from "react";
const ApplicationStatus = () => {
  const [selectedDomain, setSelectedDomain] = useState(0);
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
          <p className="text-prime">
            Your application is currently beign reviewd!
          </p>
        </div>
        <p className="text-base md:text-lg">Your Submissions</p>
        <div className="w-full  nes-container is-rounded is-dark dark-nes-container text-sm"></div>
      </div>
    </div>
  );
};

export default ApplicationStatus;
