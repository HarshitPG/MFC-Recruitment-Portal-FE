import BoundingBox from "../components/BoundingBox";
import Header from "../components/Header";
import Profile from "../sections/Profile";
import Task from "../sections/Task";
import TaskSubmission from "../sections/TaskSubmission";
import { useTabStore } from "../store";
import Navbar from "../components/Navbar";
const Dashboard = () => {
  const { tabIndex, setTabIndex } = useTabStore();
  return (
    <div className="w-full h-full flex justify-center items-center p-4 md:p-12">
      <Navbar />
      <BoundingBox>
        <Header tabIndex={tabIndex} setTabIndex={setTabIndex} />
        {tabIndex === 0 && <Profile />}
        {tabIndex === 1 && <Task />}
        {tabIndex === 2 && <TaskSubmission />}
      </BoundingBox>
    </div>
  );
};

export default Dashboard;
