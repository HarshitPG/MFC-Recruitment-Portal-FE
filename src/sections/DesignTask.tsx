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
const DesignTask = ({ selectedSubDomain, setSelectedSubDomain }: Props) => {
  const [filteredTasks, setFilteredTask] = useState<Task[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [taskState, setTaskState] = useState("");
  useEffect(() => {
    // Based on the sub-domain we are filtering the task
    const filteredTask = designTaskData.filter(
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
            onClick={() => setSelectedSubDomain("poster")}
            className="nes-btn is-error w-[22%] aspect-[2] custom-nes-error"
          >
            Poster
          </button>
          <button
            type="button"
            onClick={() => setSelectedSubDomain("ui")}
            className="nes-btn is-error w-[22%] aspect-[2] custom-nes-error"
          >
            UI
          </button>
          <button
            type="button"
            onClick={() => setSelectedSubDomain("3d")}
            className="nes-btn is-error w-[22%] aspect-[2] custom-nes-error"
          >
            3D
          </button>
          <button
            type="button"
            onClick={() => setSelectedSubDomain("video")}
            className="nes-btn is-error w-[22%] aspect-[2] custom-nes-error"
          >
            Video
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
                onClick={() => {
                  setShowModal(true);
                  setTaskState(task.title);
                }}
              >
                Submit Task
              </button>
            </div>
          ))}
        </div>
      )}
      {showModal && <Modal task={taskState} setShowModal={setShowModal} />}
    </div>
  );
};

export default DesignTask;
function Modal({
  task,
  setShowModal,
}: {
  task: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className="bg-black p-4 min-w-[40vw] min-h-[30vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 nes-container is-dark is-rounded --submit-container"
      style={{ position: "absolute" }}
    >
      <form method="">
        <p className="title text-xl">Submit Task</p>
        <input
          type="text"
          id="dark_field"
          className="nes-input is-dark"
          placeholder="Github Repository Link"
          name={`${task}-github`}
          required
        />
        <input
          type="text"
          id="dark_field"
          className="nes-input is-dark"
          placeholder="Demo Link"
          name={`${task}-demo`}
        />
        <menu className="dialog-menu mt-4">
          <button
            className="nes-btn"
            type="button"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
          <button className="nes-btn is-error" type="submit" onClick={() => {}}>
            Submit
          </button>
        </menu>
      </form>
    </div>
  );
}
const designTaskData = [
  {
    label: "poster",
    title: "Project Title1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt libero blanditiis provident minus magnam exercitationem porro, nihil esse inventore ut!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt libero blanditiis provident minus magnam exercitationem porro, nihil esse inventore ut!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt libero blanditiis provident minus magnam exercitationem porro, nihil esse inventore ut!",
    resources: ["Link1", "Link2"],
  },
  {
    label: "poster",
    title: "Project Title2",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt libero blanditiis provident minus magnam exercitationem porro, nihil esse inventore ut!",
    resources: ["Link1", "Link2"],
  },
  {
    label: "ui",
    title: "Project Title",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt libero blanditiis provident minus magnam exercitationem porro, nihil esse inventore ut!",
    resources: ["Link1", "Link2"],
  },
];
