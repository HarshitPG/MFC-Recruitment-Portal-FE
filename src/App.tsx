import {
  Route,
  BrowserRouter as Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./dashboard/Dashboard";
//import Landing from "./sections/Landing";
import ForgotPassword from "./sections/ForgotPasswordStep1";
import Landing from "./sections/Landing";
import ResetPassword from "./sections/ResetPassword";
import Signup from "./sections/Signup";
import VerifyOTP from "./sections/VerifyOTP";
import BaseWrapper from "./wrappers/BaseWrapper";
import MainWrapper from "./wrappers/MainWrapper";
import About from "./sections/About";
import FAQs from "./sections/FAQs";
import ChangeProfile from "./sections/ChangeProfile";

// import { ToastContainer } from "react-toastify";
// import ForgotPasswordStep1 from "./sections/ForgotPasswordStep1";
// import ResetPassword from "./sections/ResetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/signUp",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/verifyotp",
    element: <VerifyOTP />,
  },
  {
    path: "/resetpassword",
    element: <ResetPassword />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/faq",
    element: <FAQs />,
  },
  {
    path: "/profile",
    element: <ChangeProfile />,
  },
]);

function App() {
  return (
    <BaseWrapper>
      <link
        href="https://unpkg.com/nes.css@2.2.1/css/nes.min.css"
        rel="stylesheet"
      />
      <MainWrapper>
        <RouterProvider router={router} />
      </MainWrapper>
    </BaseWrapper>
  );
}

export default App;
