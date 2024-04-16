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
  // const [showModal, setShowModal] = useState(false);
  // const [taskState, setTaskState] = useState("");
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
            className="nes-btn is-error w-[47%] md:w-[22%] aspect-[2] custom-nes-error text-xs"
          >
            Frontend
          </button>
          <button
            type="button"
            onClick={() => setSelectedSubDomain("backend")}
            className="nes-btn is-error  w-[47%] md:w-[22%] aspect-[2] custom-nes-error text-xs"
          >
            Backend
          </button>
          <button
            type="button"
            onClick={() => setSelectedSubDomain("fullstack")}
            className="nes-btn is-error  w-[47%] md:w-[22%] aspect-[2] custom-nes-error text-xs"
          >
            Fullstack
          </button>
          <button
            type="button"
            onClick={() => setSelectedSubDomain("app")}
            className="nes-btn is-error  w-[47%] md:w-[22%] aspect-[2] custom-nes-error text-xs"
          >
            App Dev
          </button>
          <button
            type="button"
            onClick={() => setSelectedSubDomain("ml")}
            className="nes-btn is-error w-[47%] md:w-[22%] aspect-[2] custom-nes-error text-xs"
          >
            AI/ML
          </button>
          <button
            type="button"
            onClick={() => setSelectedSubDomain("game")}
            className="nes-btn is-error w-[47%] md:w-[22%] aspect-[2] custom-nes-error text-xs"
          >
            Game Dev
          </button>
        </div>
      )}

      {selectedSubDomain !== "" && (
        <div className="w-full mt-8 h-full flex flex-col gap-8 md:gap-4">
          {filteredTasks.map((task, index) => (
            <div
              className="nes-container is-dark with-title  dark-container-nes"
              key={index}
            >
              <p className="title">{task.title}</p>
              <p className="text-xs md:text-sm text-left leading-4">
                {task.description}
              </p>
              <div className="flex justify-between flex-col md:flex-row">
                <span className="md:text-sm text-xs">Resources:</span>
                <span className="flex flex-col md:text-sm text-xs md:flex-row">
                  {task.resources.map((resource, index) => (
                    <a href={resource}>Resource {index + 1} &nbsp;</a>
                  ))}
                </span>
              </div>
              {/* <button
                type="button"
                className="nes-btn is-error  custom-nes-error"
                onClick={() => {
                  setShowModal(true);
                  setTaskState(task.title);
                }}
              >
                Submit Task
              </button> */}
            </div>
          ))}
        </div>
      )}
      {/* {showModal && <Modal task={taskState} setShowModal={setShowModal} />} */}
    </div>
  );
};

export default TechTask;
// function Modal({
//   task,
//   setShowModal,
// }: {
//   task: string;
//   setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
// }) {
//   return (
//     <div
//       className="bg-black p-4 min-w-[40vw] min-h-[30vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 nes-container is-dark is-rounded --submit-container"
//       style={{ position: "absolute" }}
//     >
//       <form method="">
//         <p className="title text-xl">Submit Task</p>
//         <input
//           type="text"
//           id="dark_field"
//           className="nes-input is-dark"
//           placeholder="Github Repository Link"
//           name={`${task}-github`}
//           required
//         />
//         <input
//           type="text"
//           id="dark_field"
//           className="nes-input is-dark"
//           placeholder="Demo Link"
//           name={`${task}-demo`}
//         />
//         <menu className="dialog-menu mt-4">
//           <button
//             className="nes-btn"
//             type="button"
//             onClick={() => setShowModal(false)}
//           >
//             Cancel
//           </button>
//           <button className="nes-btn is-error" type="submit" onClick={() => {}}>
//             Submit
//           </button>
//         </menu>
//       </form>
//     </div>
//   );
// }
const techTaskData = [
  {
    label: "frontend",
    title: "Project Title1",
    for: "senior",
    description: ["desc1", "desc2"],
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
