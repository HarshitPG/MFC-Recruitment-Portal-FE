import "./App.css";
import MainWrapper from "./wrappers/MainWrapper";
import BaseWrapper from "./wrappers/BaseWrapper";
import NavWrapper from "./wrappers/NavWrapper";
import Landing from "./sections/Landing";
function App() {
  return (
    <BaseWrapper>
      <NavWrapper>Nav</NavWrapper>
      <MainWrapper>
        <Landing />
      </MainWrapper>
    </BaseWrapper>
  );
}

export default App;
