import BoundingBox from "../components/BoundingBox";
import Header from "../components/Header";
import Profile from "../sections/Profile";
import Task from "../sections/Task";
import TaskSubmission from "../sections/TaskSubmission";
import { useTabStore } from "../store";
import Navbar from "../components/Navbar";
import ApplicationStatus from "../sections/ApplicationStatus";
const Dashboard = () => {
  const { tabIndex, setTabIndex } = useTabStore();
  return (
    <div className="w-full h-full flex flex-col md:flex-row justify-center items-center p-4 md:p-12">
      <Navbar />
      <BoundingBox>
        <Header tabIndex={tabIndex} setTabIndex={setTabIndex} />
        {tabIndex === 0 && <Profile />}
        {tabIndex === 1 && <Task />}
        {tabIndex === 2 && <TaskSubmission />}
        {tabIndex === 3 && <ApplicationStatus />}
      </BoundingBox>
    </div>
  );
};

export default Dashboard;
