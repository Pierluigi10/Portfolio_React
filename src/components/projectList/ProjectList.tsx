import { useTranslation } from "react-i18next";
import "./projectList.scss";
import Project from "../project/Project";
import ProjectSkeleton from "./ProjectSkeleton";
import { useGitHubRepos } from "../../hooks/useGitHubRepos";

function ProjectList() {
  const { t } = useTranslation();
  const { projects, loading, error } = useGitHubRepos();

  return (
    <section id="projects" className="projectList" aria-labelledby="projects-title">
      <div className="pl_bg"></div>
      <div className="pl_card">
        <div className="pl_texts">
          <h2 id="projects-title" className="pl_title">
            {t("projects.title")}
          </h2>
          {error && (
            <p className="pl_error" role="alert">
              {t("projects.error")}
            </p>
          )}
        </div>
        {loading ? (
          <div className="pl_loading" aria-live="polite">
            <div className="pl_list">
              <ProjectSkeleton count={3} />
            </div>
          </div>
        ) : (
          <div className="pl_list">
            {projects.map((item) => (
              <Project
                key={item.id}
                title={item.title}
                img={item.img}
                link={item.link}
                repoLink={item.repoLink}
                description={item.description}
                languages={item.languages}
                stars={item.stars}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectList;
