import { useState } from "react";
const TaskSubmission = () => {
  const [selectedDomain, setSelectedDomain] = useState(0);
  const domainArr = ["tech", "design"];
  return (
    <div className="w-full profile py-6 flex gap-4 flex-col md:flex-row">
      <div className="nes-container with-title is-centered w-full md:w-[30%] invert">
        <p className="title">Domains</p>
        <div className="flex flex-col  h-full gap-4 md:gap-8">
          <button
            type="button"
            onClick={() => setSelectedDomain(0)}
            className={`
          nes-btn w-full h-[50%] text-sm md:text-base
          ${selectedDomain === 0 && "is-primary"}
        `}
          >
            Technical
          </button>
          <button
            onClick={() => setSelectedDomain(1)}
            type="button"
            className={`
          nes-btn w-full h-[50%] text-sm md:text-base
          ${selectedDomain === 1 && "is-primary"}
        `}
          >
            Design
          </button>
        </div>
      </div>
      <div className="text-white w-full md:w-[90%]  overflow-y-scroll overflow-x-hidden">
        <p className="text-base md:text-lg">Task Submission</p>
        <div className="w-full  nes-container is-rounded is-dark dark-nes-container text-sm ">
          {selectedDomain === 0 && (
            <section className="mb-4 text-xs md:text-sm">
              Append all your tech tasks in following manner:
              <br />
              <span className="text-prime">
                [Project Title 1] - [Github Link 1] - [Demo Link 1]
              </span>
              <br />
              <span className="text-prime hidden md:block">
                [Project Title 2] - [Github Link 2] - [Demo Link 2]
              </span>
            </section>
          )}
          {selectedDomain === 1 && (
            <section className="mb-2  text-xs md:text-sm">
              Append all your design tasks in following manner:
              <br />
              <span className="text-prime">
                [Project Title 1] - [Figma / Gdrive / Other Link]
              </span>
              <br />
              <span className="text-prime hidden md:block">
                [Project Title 2] - [Figma / Gdrive / Other Link]
              </span>
            </section>
          )}
          <form>
            <textarea
              id="textarea_field"
              className="nes-textarea is-dark min-h-[15rem]"
              required
              name={"domain_task"}
              placeholder="Write here..."
            ></textarea>

            <section className="my-2  text-xs md:text-sm">
              <span className="text-prime">Answer some general questions:</span>
              <br />
              {quizQuestions.map(
                (quiz) =>
                  quiz.domain === domainArr[selectedDomain] && (
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,0)",
                        padding: "1rem",
                      }}
                      className="nes-field is-inline flex flex-col"
                    >
                      <label
                        style={{ color: "#fff" }}
                        className="w-full text-label text-xs "
                      >
                        {quiz.question}
                      </label>
                      <br />
                      <textarea
                        id="textarea_field"
                        className="nes-textarea is-dark min-h-[5rem]"
                        required
                        name={quiz.label}
                        placeholder="Write here..."
                      ></textarea>
                    </div>
                  )
              )}
            </section>
            <p className="text-prime text-xs md:text-sm mt-4 md:mt-0">
              Note: Once submitted you cannot revert back
            </p>
            <button
              type="submit"
              className="nes-btn is-error w-full text-xs md:text-base"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskSubmission;

const quizQuestions = [
  {
    domain: "tech",
    label: "que1",
    question: "What is npm, and how does a developer use it?",
  },
  {
    domain: "tech",
    label: "que2",
    question:
      "What is the difference between a compiled language and an interpreted language?",
  },
  {
    domain: "tech",
    label: "que3",
    question:
      "Research XOR Linked Lists and explain how they work in your own words.",
  },
  {
    domain: "tech",
    label: "que4",
    question:
      "Suppose you want to hide some data in a multimedia file. What would be your approach?",
  },
];
