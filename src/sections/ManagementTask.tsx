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
const ManagementTask = ({ selectedSubDomain, setSelectedSubDomain }: Props) => {
  const [filteredTasks, setFilteredTask] = useState<Task[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [taskState, setTaskState] = useState("");
  useEffect(() => {
    // Based on the sub-domain we are filtering the task
    const filteredTask = managementTaskData.filter(
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
            onClick={() => setSelectedSubDomain("outreach")}
            className="nes-btn is-error w-[22%] aspect-[2] custom-nes-error"
          >
            Outreach
          </button>
          <button
            type="button"
            onClick={() => setSelectedSubDomain("finance")}
            className="nes-btn is-error w-[22%] aspect-[2] custom-nes-error"
          >
            Finance
          </button>
          <button
            type="button"
            onClick={() => setSelectedSubDomain("general")}
            className="nes-btn is-error w-[22%] aspect-[2] custom-nes-error"
          >
            General Ops.
          </button>
          <button
            type="button"
            onClick={() => setSelectedSubDomain("publicity")}
            className="nes-btn is-error w-[22%] aspect-[2] custom-nes-error"
          >
            Publicity
          </button>
          <button
            type="button"
            onClick={() => setSelectedSubDomain("anchoring")}
            className="nes-btn is-error w-[22%] aspect-[2] custom-nes-error"
          >
            Anchoring
          </button>
          <button
            type="button"
            onClick={() => setSelectedSubDomain("editorial")}
            className="nes-btn is-error w-[22%] aspect-[2] custom-nes-error"
          >
            Editorial
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

export default ManagementTask;
function Modal({
  task,
  setShowModal,
}: {
  task: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className="bg-black p-4 min-w-[50vw] min-h-[30vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 nes-container is-dark is-rounded --submit-container"
      style={{ position: "absolute" }}
    >
      <form method="">
        <p className="title text-xl">Submit Task</p>
        <textarea
          id="textarea_field"
          className="nes-textarea is-dark min-h-[10rem] text-sm max-h-[20rem]"
          name={`${task}`}
        ></textarea>
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
const managementTaskData = [
  {
    label: "outreach",
    title: "Project Title1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt libero blanditiis provident minus magnam exercitationem porro, nihil esse inventore ut!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt libero blanditiis provident minus magnam exercitationem porro, nihil esse inventore ut!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt libero blanditiis provident minus magnam exercitationem porro, nihil esse inventore ut!",
    resources: ["Link1", "Link2"],
  },
  {
    label: "outreach",
    title: "Project Title2",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt libero blanditiis provident minus magnam exercitationem porro, nihil esse inventore ut!",
    resources: ["Link1", "Link2"],
  },
  {
    label: "finance",
    title: "Project Tite",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt libero blanditiis provident minus magnam exercitationem porro, nihil esse inventore ut!",
    resources: ["Link1", "Link2"],
  },
];
