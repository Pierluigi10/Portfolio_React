import React from "react";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProjectList from "./components/projectList/ProjectList";
import Toggle from "./components/toggle/Toggle";
import LanguageSwitcher from "./components/languageSwitcher/LanguageSwitcher";
import Footer from "./components/footer/Footer";
import { useTheme } from "./context";
import "./App.css";

function App() {
  const { state } = useTheme();
  const darkMode = state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode ? "white" : "#000",
      }}
      role="main"
    >
      <div className="top-bar">
        <LanguageSwitcher />
        <Toggle />
      </div>
      <Intro />
      <About />
      <ProjectList />
      <Footer />
    </div>
  );
}

export default App;
