import React from "react";
import { useContext } from "react";
import About from "./components/about/About.jsx";
import Intro from "./components/intro/Intro.jsx";
import ProjectList from "./components/projectList/ProjectList.jsx";
import Toggle from "./components/toggle/Toggle.jsx";
import { ThemeContext } from "./context.jsx";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProjectList />
    </div>
  );
}

export default App;
