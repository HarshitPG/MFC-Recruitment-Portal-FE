import "./App.css";
import MainWrapper from "./wrappers/MainWrapper";
import BaseWrapper from "./wrappers/BaseWrapper";
import Landing from "./sections/Landing";
import Dashboard from "./dashboard/Dashboard";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

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
            <Route path="/dashboard" element={<Dashboard />} />{" "}
          </Routes>
        </Router>
      </MainWrapper>
    </BaseWrapper>
  );
}

export default App;
