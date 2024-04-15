import React, { useState } from "react";

const TechTaskSubmission = () => {
  const [domain, setDomain] = useState<string[]>([]);

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
  return (
    <>
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
      <form>
        <h2>Choose Sub-Domain</h2>
        <div className="flex">
          <div className="flex flex-row gap-4 flex-wrap justify-center">
            <label>
              <input
                type="checkbox"
                className="nes-checkbox is-dark"
                value="frontend"
                checked={domain.includes("frontend")}
                onChange={handleCheckboxChange}
              />
              <span className="text-xs md:text-xs">Frontend</span>
            </label>
            <label>
              <input
                type="checkbox"
                className="nes-checkbox is-dark"
                value="backend"
                checked={domain.includes("backend")}
                onChange={handleCheckboxChange}
              />
              <span className="text-xs md:text-xs">Backend</span>
            </label>
            <label>
              <input
                type="checkbox"
                className="nes-checkbox is-dark"
                value="fullstack"
                checked={domain.includes("fullstack")}
                onChange={handleCheckboxChange}
              />
              <span className="text-xs md:text-xs">Fullstack</span>
            </label>
            <label>
              <input
                type="checkbox"
                className="nes-checkbox is-dark"
                value="app"
                checked={domain.includes("app")}
                onChange={handleCheckboxChange}
              />
              <span className="text-xs md:text-xs">App Dev</span>
            </label>
            <label>
              <input
                type="checkbox"
                className="nes-checkbox is-dark"
                value="ml"
                checked={domain.includes("ml")}
                onChange={handleCheckboxChange}
              />
              <span className="text-xs md:text-xs">AI/ML</span>
            </label>
            <label>
              <input
                type="checkbox"
                className="nes-checkbox is-dark"
                value="gamedev"
                checked={domain.includes("gamedev")}
                onChange={handleCheckboxChange}
              />
              <span className="text-xs md:text-xs">Game Dev</span>
            </label>
          </div>
        </div>
        <textarea
          id="textarea_field"
          className="nes-textarea is-dark min-h-[15rem]"
          required
          name={`tech-domain_task`}
          placeholder="Write here..."
        ></textarea>

        <section className="my-2  text-xs md:text-sm">
          <span className="text-prime">Answer some general questions:</span>
          <br />
          {quizQuestions.map((quiz) => (
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
          ))}
        </section>
        <p className="text-prime text-xs md:text-sm mt-4 md:mt-0">
          Note: Once submitted you cannot revert back
        </p>
        <button
          type="submit"
          className="nes-btn is-error w-full text-xs md:text-sm"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default TechTaskSubmission;
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
