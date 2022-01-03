import About from "./components/about/About.js";
import Contact from "./components/contact/Contact.js";
import Intro from "./components/intro/Intro.js";
import ProjectList from "./components/projectList/ProjectList.js";

function App() {
  return (
    <div>
      <Intro />
      <About />
      <ProjectList />      
      <Contact />      
    </div>
  );
}

export default App;
