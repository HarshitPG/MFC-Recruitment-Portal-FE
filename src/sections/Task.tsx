import { useState, useEffect } from "react";
import TechTask from "./TechTask";
import DesignTask from "./DesignTask";
import ManagementTask from "./ManagementTask";

const Task = () => {
  const [selectedDomain, setSelectedDomain] = useState(0);
  const [selectedSubDomain, setSelectedSubDomain] = useState("");
  useEffect(() => {
    setSelectedSubDomain("");
  }, [selectedDomain]);
  return (
    <div className="w-full profile py-6 flex gap-4 flex-col md:flex-row">
      <div className="nes-container with-title is-centered w-[30%] invert">
        <p className="title">Domains</p>
        <div className="flex flex-col justify-between h-full gap-8">
          <button
            type="button"
            onClick={() => setSelectedDomain(0)}
            className={`
              nes-btn w-full h-[30%]
              ${selectedDomain === 0 && "is-primary"}
            `}
          >
            Technical
          </button>
          <button
            onClick={() => setSelectedDomain(1)}
            type="button"
            className={`
              nes-btn w-full h-[30%]
              ${selectedDomain === 1 && "is-primary"}
            `}
          >
            Design
          </button>
          <button
            onClick={() => setSelectedDomain(2)}
            type="button"
            className={`
              nes-btn w-full h-[30%]
              ${selectedDomain === 2 && "is-primary"}
            `}
          >
            Management
          </button>
        </div>
      </div>

      <div className="nes-container is-dark with-title is-centered dark-nes-container w-[70%] relative">
        {selectedSubDomain !== "" && (
          <button
            type="button"
            onClick={() => setSelectedSubDomain("")}
            className="nes-btn is-error absolute -top-2 -right-2 z-[50] h-fit btn-back"
          >
            <i className="nes-icon close is-small"></i>
          </button>
        )}
        <p className="title dark-nes-container">Tasks</p>
        <div className="w-full h-full flex items-center relative">
          {selectedDomain === 0 && (
            <TechTask
              selectedSubDomain={selectedSubDomain}
              setSelectedSubDomain={setSelectedSubDomain}
            />
          )}
          {selectedDomain === 1 && <DesignTask />}
          {selectedDomain === 2 && <ManagementTask />}
        </div>
      </div>
    </div>
  );
};

export default Task;
