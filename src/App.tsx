import React, { useContext } from "react";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProjectList from "./components/projectList/ProjectList";
import Toggle from "./components/toggle/Toggle";
import LanguageSwitcher from "./components/languageSwitcher/LanguageSwitcher";
import Footer from "./components/footer/Footer";
import { ThemeContext } from "./context";
import "./App.css";

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
