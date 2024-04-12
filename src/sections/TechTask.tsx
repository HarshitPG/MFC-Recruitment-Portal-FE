import { useEffect, useState } from "react";
interface Task {
  label: string;
  description: string;
  title: string;
  resources: string[];
}
interface Props {
  selectedSubDomain: string;
  setSelectedSubDomain: React.Dispatch<React.SetStateAction<string>>;
}
const TechTask = ({ selectedSubDomain, setSelectedSubDomain }: Props) => {
  const [filteredTasks, setFilteredTask] = useState<Task[]>([]);
  useEffect(() => {
    // Based on the sub-domain we are filtering the task
    const filteredTask = techTaskData.filter(
      (task) => task.label === selectedSubDomain
    );
    if (filteredTask) {
      setFilteredTask(filteredTask);
    }
  }, [selectedSubDomain]);

  return (
    <div
      className={`w-full h-full overflow-y-scroll -task-container ${
        selectedSubDomain === "" ? "flex items-center" : ""
      }`}
    >
      {selectedSubDomain === "" && (
        <div className="flex justify-center flex-wrap w-full">
          <button
            type="button"
            onClick={() => setSelectedSubDomain("frontend")}
            className="nes-btn is-error w-[22%] aspect-[2] custom-nes-error"
          >
            Frontend
          </button>
          <button
            type="button"
            onClick={() => setSelectedSubDomain("backend")}
            className="nes-btn is-error w-[22%] aspect-[2] custom-nes-error"
          >
            Backend
          </button>
          <button
            type="button"
            onClick={() => setSelectedSubDomain("fullstack")}
            className="nes-btn is-error w-[22%] aspect-[2] custom-nes-error"
          >
            Fullstack
          </button>
          <button
            type="button"
            onClick={() => setSelectedSubDomain("app")}
            className="nes-btn is-error w-[22%] aspect-[2] custom-nes-error"
          >
            App Dev
          </button>
          <button
            type="button"
            onClick={() => setSelectedSubDomain("ml")}
            className="nes-btn is-error w-[22%] aspect-[2] custom-nes-error"
          >
            AI/ML
          </button>
          <button
            type="button"
            onClick={() => setSelectedSubDomain("game")}
            className="nes-btn is-error w-[22%] aspect-[2] custom-nes-error"
          >
            Game Dev
          </button>
        </div>
      )}

      {selectedSubDomain !== "" && (
        <div className="w-full mt-8 h-full flex flex-col gap-4">
          {filteredTasks.map((task, index) => (
            <div className="nes-container is-dark with-title" key={index}>
              <p className="title ">{task.title}</p>
              <p className="text-xs text-left leading-4">{task.description}</p>
              <span>Resources:</span>
              {task.resources.map((resource, index) => (
                <a href={resource}>Resource {index + 1} &nbsp;</a>
              ))}
              <button
                type="button"
                className="nes-btn is-error  custom-nes-error"
              >
                Submit Task
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TechTask;

const techTaskData = [
  {
    label: "frontend",
    title: "Project Title1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt libero blanditiis provident minus magnam exercitationem porro, nihil esse inventore ut!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt libero blanditiis provident minus magnam exercitationem porro, nihil esse inventore ut!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt libero blanditiis provident minus magnam exercitationem porro, nihil esse inventore ut!",
    resources: ["Link1", "Link2"],
  },
  {
    label: "frontend",
    title: "Project Title2",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt libero blanditiis provident minus magnam exercitationem porro, nihil esse inventore ut!",
    resources: ["Link1", "Link2"],
  },
  {
    label: "backend",
    title: "Project Title",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt libero blanditiis provident minus magnam exercitationem porro, nihil esse inventore ut!",
    resources: ["Link1", "Link2"],
  },
];
