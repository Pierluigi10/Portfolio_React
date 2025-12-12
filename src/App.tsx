import React, { useContext } from "react";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProjectList from "./components/projectList/ProjectList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error("App must be used within ThemeProvider");
  }

  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode ? "white" : "#000",
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
