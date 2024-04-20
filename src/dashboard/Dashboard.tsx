import BoundingBox from "../components/BoundingBox";
import Header from "../components/Header";
import Profile from "../sections/Profile";
import Task from "../sections/Task";
import TaskSubmission from "../sections/TaskSubmission";
import { useTabStore } from "../store";
import Navbar from "../components/Navbar";
import ApplicationStatus from "../sections/ApplicationStatus";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { tabIndex, setTabIndex } = useTabStore();
  const navigator = useNavigate();
  useEffect(() => {
    // console.log(tabIndex);
  }, [tabIndex]);
  useEffect(() => {
    const token = Cookies.get("jwtToken");
    // console.log("token", token);
    if (!token) {
      navigator("/");
    }
  }, []);
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
