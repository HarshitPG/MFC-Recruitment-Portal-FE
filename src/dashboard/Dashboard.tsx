import BoundingBox from "../components/BoundingBox";
import Header from "../components/Header";
// import Profile from "../sections/Profile";
import Task from "../sections/Task";
const Dashboard = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <BoundingBox>
        <Header />
        {/* <Profile /> */}
        <Task />
      </BoundingBox>
    </div>
  );
};

export default Dashboard;
