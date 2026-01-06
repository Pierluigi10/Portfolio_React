import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiGit,
  SiVite,
  SiAstro,
  SiMui,
  SiTailwindcss,
  SiStorybook,
} from "react-icons/si";
import "./skills.scss";

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: "frontend" | "backend" | "tools";
}

function Skills() {
  const { t } = useTranslation();
  const { state } = useTheme();
  const category1Ref = useRef<HTMLDivElement>(null);
  const category2Ref = useRef<HTMLDivElement>(null);
  const category3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const refs = [category1Ref, category2Ref, category3Ref];
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const skills: Skill[] = [
    { name: "HTML5", icon: <SiHtml5 />, category: "frontend" },
    { name: "CSS3", icon: <SiCss3 />, category: "frontend" },
    { name: "SASS", icon: <SiSass />, category: "frontend" },
    { name: "JavaScript", icon: <SiJavascript />, category: "frontend" },
    { name: "TypeScript", icon: <SiTypescript />, category: "frontend" },
    { name: "React", icon: <SiReact />, category: "frontend" },
    { name: "Next.js", icon: <SiNextdotjs />, category: "frontend" },
    { name: "Astro", icon: <SiAstro />, category: "frontend" },
    { name: "Material UI", icon: <SiMui />, category: "frontend" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "frontend" },
    { name: "Node.js", icon: <SiNodedotjs />, category: "backend" },
    { name: "Express", icon: <SiExpress />, category: "backend" },
    { name: "NestJS", icon: <SiNestjs />, category: "backend" },
    { name: "Git", icon: <SiGit />, category: "tools" },
    { name: "Vite", icon: <SiVite />, category: "tools" },
    { name: "Storybook", icon: <SiStorybook />, category: "tools" },
  ];

  const frontendSkills = skills.filter((s) => s.category === "frontend");
  const backendSkills = skills.filter((s) => s.category === "backend");
  const toolsSkills = skills.filter((s) => s.category === "tools");

  return (
    <section
      id="skills"
      className={`skills ${state.darkMode ? "dark-mode" : ""}`}
      aria-labelledby="skills-title"
    >
      <div className="skills_container">
        <h2 id="skills-title" className="skills_title">
          {t("skills.title")}
        </h2>
        <p className="skills_subtitle">{t("skills.subtitle")}</p>

        <div className="skills_categories">
          <div ref={category1Ref} className="skills_category animate-on-scroll">
            <h3 className="skills_category_title">{t("skills.frontend")}</h3>
            <div className="skills_list">
              {frontendSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="skill_item"
                  title={skill.name}
                  aria-label={skill.name}
                >
                  <div className="skill_icon">{skill.icon}</div>
                  <span className="skill_name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div ref={category2Ref} className="skills_category animate-on-scroll">
            <h3 className="skills_category_title">{t("skills.backend")}</h3>
            <div className="skills_list">
              {backendSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="skill_item"
                  title={skill.name}
                  aria-label={skill.name}
                >
                  <div className="skill_icon">{skill.icon}</div>
                  <span className="skill_name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div ref={category3Ref} className="skills_category animate-on-scroll">
            <h3 className="skills_category_title">{t("skills.tools")}</h3>
            <div className="skills_list">
              {toolsSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="skill_item"
                  title={skill.name}
                  aria-label={skill.name}
                >
                  <div className="skill_icon">{skill.icon}</div>
                  <span className="skill_name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

