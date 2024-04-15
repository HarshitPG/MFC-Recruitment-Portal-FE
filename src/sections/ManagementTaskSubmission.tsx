import React, { useState } from "react";

const ManagementTaskSubmission = () => {
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
        Append all your management tasks in following manner:
        <br />
        <span className="text-prime">[SubDomain] - [Link 1]</span>
        <br />
        <span className="text-prime hidden md:block">
          [SubDomain] - [Link 2]
        </span>
      </section>
      <form>
        <h2>Choose Sub-Domain</h2>
        <div className="flex">
          (
          <div className="flex flex-row gap-4 flex-wrap justify-center">
            <label>
              <input
                type="checkbox"
                className="nes-checkbox is-dark"
                value="outreach"
                checked={domain.includes("outreach")}
                onChange={handleCheckboxChange}
              />
              <span className="text-xs md:text-xs">Outreach</span>
            </label>
            <label>
              <input
                type="checkbox"
                className="nes-checkbox is-dark"
                value="finance"
                checked={domain.includes("finance")}
                onChange={handleCheckboxChange}
              />
              <span className="text-xs md:text-xs">Finance</span>
            </label>
            <label>
              <input
                type="checkbox"
                className="nes-checkbox is-dark"
                value="generalops"
                checked={domain.includes("generalops")}
                onChange={handleCheckboxChange}
              />
              <span className="text-xs md:text-xs">General Ops.</span>
            </label>
            <label>
              <input
                type="checkbox"
                className="nes-checkbox is-dark"
                value="anchoring"
                checked={domain.includes("anchoring")}
                onChange={handleCheckboxChange}
              />
              <span className="text-xs md:text-xs">Anchoring</span>
            </label>
            <label>
              <input
                type="checkbox"
                className="nes-checkbox is-dark"
                value="editorial"
                checked={domain.includes("editorial")}
                onChange={handleCheckboxChange}
              />
              <span className="text-xs md:text-xs">Editorial</span>
            </label>
          </div>
          )
        </div>
        <textarea
          id="textarea_field"
          className="nes-textarea is-dark min-h-[15rem]"
          required
          name={`management-domain_task`}
          placeholder="Write here..."
        ></textarea>

        <section className="my-2  text-xs md:text-sm">
          <span className="text-prime">Answer some general questions:</span>
          <br />
          {quizQuestions.map(
            (quiz) =>
              quiz.subdomain &&
              domain.includes(quiz.subdomain) && (
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
          className="nes-btn is-error w-full text-xs md:text-sm"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ManagementTaskSubmission;
const quizQuestions = [
  {
    domain: "management",
    subdomain: "generalops",
    label: "que1",
    question:
      "Imagine a speaker session for our club. Now give us a basic idea of the event flow of that speaker session",
  },
  {
    domain: "management",
    subdomain: "generalops",
    label: "que2",
    question:
      "As an event coordinator, you're assigned to lead a team project, but you're facing challenges with team members not meeting deadlines. How would you address this issue?",
  },
  {
    domain: "management",
    subdomain: "generalops",
    label: "que3",
    question:
      "Scenario A: During a club meeting, a member presents a project that uses a controversial approach or technology. Scenario B: You're planning a club event, but there's a sudden conflict with another major event on campus, potentially impacting attendance. How would you facilitate a respectful discussion in both situations, ensuring all viewpoints are heard and a productive outcome is reached? What alternative plans would you consider in the second scenario to ensure the success of your event?",
  },
  {
    domain: "management",
    subdomain: "generalops",
    label: "que4",
    question:
      "Describe a time when you had to resolve a conflict between team members. How did you handle it?",
  },
  {
    domain: "management",
    subdomain: "generalops",
    label: "que5",
    question:
      "If you had to implement a new process or system within the club, how would you approach it?",
  },
  {
    domain: "management",
    subdomain: "outreach",
    label: "que1",
    question:
      "Your club has planned a hackathon, but a key sponsor pulls out at the last minute. How would you adapt your event strategy and secure alternative funding to ensure the event's success?",
  },
  {
    domain: "management",
    subdomain: "outreach",
    label: "que2",
    question:
      "Imagine you need to plan an outreach event for a specific community. How would you go about it?",
  },
  {
    domain: "management",
    subdomain: "outreach",
    label: "que3",
    question:
      "How would you approach building partnerships with external organizations or individuals?",
  },
  {
    domain: "management",
    subdomain: "outreach",
    label: "que4",
    question:
      "If you had to create a social media campaign for the club, what would be your strategy?",
  },
  {
    domain: "management",
    subdomain: "outreach",
    label: "que5",
    question:
      "What strategies would you use to effectively communicate the club's mission and values to external stakeholders?",
  },
  {
    domain: "management",
    subdomain: "publicity",
    label: "que1",
    question:
      "Describe your approach to creating a cohesive brand identity for the club.",
  },
  {
    domain: "management",
    subdomain: "publicity",
    label: "que2",
    question: "How would you measure the success of a publicity campaign?",
  },
  {
    domain: "management",
    subdomain: "publicity",
    label: "que3",
    question:
      "What strategies would you use to generate buzz or excitement around a club initiative?",
  },
  {
    domain: "management",
    subdomain: "publicity",
    label: "que4",
    question:
      "If the club faced a public relations crisis, how would you handle it?",
  },
  {
    domain: "management",
    subdomain: "publicity",
    label: "que5",
    question:
      "If the club faced negative publicity or criticism online, how would you respond and manage the situation?",
  },
  {
    domain: "management",
    subdomain: "editorial",
    label: "que1",
    question:
      "Imagine you're editing a piece of content and discover a factual error. How would you approach fixing it",
  },
  {
    domain: "management",
    subdomain: "editorial",
    label: "que2",
    question:
      "Do you have any ideas for a tech-driven editorial project the club could work on?",
  },
  {
    domain: "management",
    subdomain: "editorial",
    label: "que3",
    question:
      "An article captures attention with a provocative headline, but the content feels exaggerated and lacks depth. How would you address this with the author?",
  },
  {
    domain: "management",
    subdomain: "editorial",
    label: "que4",
    question:
      "Suggest a good title for an upcoming tech event or hackathon along with a catchy tagline.",
  },
  {
    domain: "management",
    subdomain: "editorial",
    label: "que5",
    question:
      "What are your three favourite dialogues from the entertainment industry?",
  },
  {
    domain: "management",
    subdomain: "finance",
    label: "que1",
    question:
      "Can you describe a situation in which you had to manage a limited budget effectively? How did you prioritize expenses?",
  },
  {
    domain: "management",
    subdomain: "finance",
    label: "que2",
    question:
      "How do you plan to ensure that the club's expenses align with its financial goals and objectives?",
  },
  {
    domain: "management",
    subdomain: "finance",
    label: "que3",
    question:
      "What strategies would you employ to identify potential cost-saving opportunities for the club without compromising quality?",
  },
  {
    domain: "management",
    subdomain: "finance",
    label: "que4",
    question:
      "How would you handle unexpected expenses or budget overruns within the club? Can you provide an example from your past experience?",
  },
  {
    domain: "management",
    subdomain: "finance",
    label: "que5",
    question:
      "In what ways do you believe technology can be leveraged to streamline expense tracking and financial management for the club?",
  },
];
