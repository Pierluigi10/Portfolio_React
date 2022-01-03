import { useContext } from "react";
import About from "./components/about/About.js";
import Contact from "./components/contact/Contact.js";
import Intro from "./components/intro/Intro.js";
import ProjectList from "./components/projectList/ProjectList.js";
import Toggle from "./components/toggle/Toggle.js";
import { ThemeContext } from "./context.js";

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
      <Contact />
    </div>
  );
}

export default App;
