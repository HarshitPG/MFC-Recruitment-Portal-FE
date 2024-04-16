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
              <div
                style={{ backgroundColor: "#212529", padding: "1rem 0" }}
                className="w-full flex flex-wrap justify-between"
              >
                {quiz.options.map((option) => (
                  <label className="w-[45%] text-xs mb-4">
                    <input
                      type="radio"
                      className="nes-radio is-dark"
                      name={quiz.label}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              {/* <textarea
                id="textarea_field"
                className="nes-textarea is-dark min-h-[5rem]"
                required
                name={quiz.label}
                placeholder="Write here..."
              ></textarea> */}
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
    label: "design_que1",
    question:
      "In Figma, what feature allows multiple designers to collaborate simultaneously on the same design file?",
    options: [
      "Version control",
      "Real-time Editing",
      "Component libraries",
      "Auto-layout",
    ],
  },
  {
    domain: "design",
    label: "design_que2",
    question:
      "Which tool in Adobe Photoshop is used to remove unwanted elements from a photo seamlessly?",
    options: [
      "Clone Stamp Tool",
      "Magic Wand Tool",
      "Gradient Tool",
      "Crop Tool",
    ],
  },
  {
    domain: "design",
    label: "design_que3",
    question:
      "When creating a motion graphic in Adobe After Effects, what is the purpose of the 'Keyframe'?",
    options: [
      "To lock a layer in place",
      "To mark the beginning and end of an animation",
      "To apply a special effect",
      "To adjust the brightness and contrast",
    ],
  },
  {
    domain: "design",
    label: "design_que4",
    question:
      "Which file format is commonly used for 3D models and can be imported into various 3D rendering software?",
    options: [".SVG", ".OBJ", ".PSD", ".PNG"],
  },
  {
    domain: "design",
    label: "design_que5",
    question: "In video editing, what does the term 'cutaway' refer to?",
    options: [
      "A transition between scenes",
      "Removing unwanted parts of a video clip",
      "Inserting a secondary shot to cover a jump in continuity",
      "Adjusting the audio levels of a clip",
    ],
  },
  {
    domain: "design",
    label: "design_que6",
    question:
      "Which tool in Canva allows users to apply pre-designed styles and formatting to their designs?",
    options: ["Effects tool", "Layouts tool", "Brand Kit", "Templates tool"],
  },
  {
    domain: "design",
    label: "design_que7",
    question:
      "What is the purpose of the 'Bezier Curve' tool in vector graphic design software like Adobe Illustrator?",
    options: [
      "To create straight lines",
      "To create complex shapes with smooth curves",
      "To fill shapes with color",
      "To crop images",
    ],
  },
  {
    domain: "design",
    label: "design_que8",
    question:
      "When rendering a 3D scene, what does the term 'ray tracing' refer to?",
    options: [
      "Simulating the behavior of light rays to create realistic lighting and reflections",
      "Creating wireframe models",
      "Applying textures to 3D models",
      "Adjusting the camera angle",
    ],
  },
];
