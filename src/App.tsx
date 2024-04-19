import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BaseWrapper from "./wrappers/BaseWrapper";
import MainWrapper from "./wrappers/MainWrapper";
import Landing from "./sections/Landing";
import Signup from "./sections/Signup";
import Dashboard from "./dashboard/Dashboard";
import VerifyOTP from "./sections/VerifyOTP";
import ResetPassword from "./sections/ResetPassword";
import ForgotPassword from "./sections/ForgotPasswordStep1";
import About from "./sections/About";
import FAQs from "./sections/FAQs";
import ChangeProfile from "./sections/ChangeProfile";

const routes = [
  { path: "/", component: Landing },
  { path: "/signup", component: Signup },
  { path: "/dashboard", component: Dashboard },
  { path: "/verifyotp", component: VerifyOTP },
  { path: "/resetpassword", component: ResetPassword },
  { path: "/forgotpassword", component: ForgotPassword },
  { path: "/about", component: About },
  { path: "/faq", component: FAQs },
  { path: "/profile", component: ChangeProfile },
];

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
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Router>
      </MainWrapper>
    </BaseWrapper>
  );
}

export default App;
