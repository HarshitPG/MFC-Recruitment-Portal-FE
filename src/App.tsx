import "./App.css";
import MainWrapper from "./wrappers/MainWrapper";
import BaseWrapper from "./wrappers/BaseWrapper";
import Landing from "./sections/Landing";
import Dashboard from "./dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <BaseWrapper>
        <link
          href="https://unpkg.com/nes.css@2.2.1/css/nes.min.css"
          rel="stylesheet"
        />
        <MainWrapper>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </MainWrapper>
      </BaseWrapper>
    </BrowserRouter>
  );
}

export default App;
