import { useState } from "react";
const TaskSubmission = () => {
  const [selectedDomain, setSelectedDomain] = useState(0);
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
      <div className="text-white w-[70%]">
        <p className="text-2xl">Task Submission</p>
        <div className="w-full  nes-container is-rounded is-dark dark-nes-container text-sm">
          {selectedDomain === 0 && (
            <section className="mb-2">
              Append all your tech tasks in following manner:
              <br />
              <span className="text-prime">
                [Project Title 1] - [Github Link 1] - [Demo Link 1]
              </span>
              <br />
              <span className="text-prime">
                [Project Title 2] - [Github Link 2] - [Demo Link 2]
              </span>
            </section>
          )}
          {selectedDomain === 1 && (
            <section className="mb-2">
              Append all your design tasks in following manner:
              <br />
              <span className="text-prime">
                [Project Title 1] - [Figma / Other Link]
              </span>
              <br />
              <span className="text-prime">
                [Project Title 2] - [Figma / Other Link]
              </span>
            </section>
          )}
          <form>
            <textarea
              id="textarea_field"
              className="nes-textarea is-dark min-h-[15rem]"
              required
              placeholder="Write here..."
            ></textarea>
            <p className="text-prime">
              Note: Once submitted you cannot revert back
            </p>
            <button type="submit" className="nes-btn is-error w-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskSubmission;
