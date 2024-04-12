import BoundingBox from "../components/BoundingBox";
import Header from "../components/Header";
import Profile from "../sections/Profile";
const Dashboard = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <BoundingBox>
        <Header />
        <Profile />
      </BoundingBox>
    </div>
  );
};

export default Dashboard;
