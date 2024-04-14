import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./dashboard/Dashboard";
import Landing from "./sections/Landing";
import Signup from "./sections/Signup";
import VerifyOTP from "./sections/VerifyOTP";
import BaseWrapper from "./wrappers/BaseWrapper";
import MainWrapper from "./wrappers/MainWrapper";
import ResetPassword from "./sections/ResetPassword";
import ForgotPassword from "./sections/ForgotPasswordStep1";
// import ForgotPasswordStep1 from "./sections/ForgotPasswordStep1";
// import ResetPassword from "./sections/ResetPassword";
function App() {
  return (
    <BaseWrapper>
      <link
        href="https://unpkg.com/nes.css@2.2.1/css/nes.min.css"
        rel="stylesheet"
      />
      <MainWrapper>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/verifyotp" element={<VerifyOTP />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
          </Routes>
        </Router>
      </MainWrapper>
    </BaseWrapper>
  );
}

export default App;
