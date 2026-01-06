import React from "react";
import { useTranslation } from "react-i18next";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import ProjectList from "./components/projectList/ProjectList";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import BackToTop from "./components/backToTop/BackToTop";
import SkipToContent from "./components/skipToContent/SkipToContent";
import ScrollProgress from "./components/scrollProgress/ScrollProgress";
import SEO from "./components/SEO";
import { useTheme } from "./context";
import "./App.css";

function App() {
  const { t } = useTranslation();
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
      <SEO
        title={`${t("intro.name")} - ${t("intro.title1")} | Portfolio`}
        description={t("intro.description")}
      />
      <SkipToContent />
      <ScrollProgress />
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <ProjectList />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
