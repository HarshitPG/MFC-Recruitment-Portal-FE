import React, { useState } from "react";

const DesignTaskSubmission = () => {
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
      <form>
        <h2>Choose Sub-Domain</h2>
        <div className="flex">
          <div className="flex flex-row gap-4 flex-wrap justify-center">
            <label>
              <input
                type="checkbox"
                className="nes-checkbox is-dark"
                value="poster"
                checked={domain.includes("poster")}
                onChange={handleCheckboxChange}
              />
              <span className="text-xs md:text-xs">Poster</span>
            </label>
            <label>
              <input
                type="checkbox"
                className="nes-checkbox is-dark"
                value="ui"
                checked={domain.includes("ui")}
                onChange={handleCheckboxChange}
              />
              <span className="text-xs md:text-xs">UI</span>
            </label>
            <label>
              <input
                type="checkbox"
                className="nes-checkbox is-dark"
                value="3d"
                checked={domain.includes("3d")}
                onChange={handleCheckboxChange}
              />
              <span className="text-xs md:text-xs">3D</span>
            </label>
            <label>
              <input
                type="checkbox"
                className="nes-checkbox is-dark"
                value="video"
                checked={domain.includes("video")}
                onChange={handleCheckboxChange}
              />
              <span className="text-xs md:text-xs">Video</span>
            </label>
          </div>
        </div>
        <textarea
          id="textarea_field"
          className="nes-textarea is-dark min-h-[15rem]"
          required
          name={`design-domain_task`}
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

export default DesignTaskSubmission;

const quizQuestions = [
  {
    domain: "design",
    label: "que1",
    question: "What is npm, and how does a developer use it?",
  },
];
