import { useTheme } from "../../context";
import "./project.scss";

interface ProjectProps {
  title: string;
  img?: string;
  link: string;
  repoLink: string;
  description?: string;
  language?: string;
  languages?: string[];
  stars?: number;
}

const Project: React.FC<ProjectProps> = ({
  title,
  img,
  link,
  repoLink,
  description,
  languages,
}) => {
  const { state } = useTheme();
  // Check if live site exists (different from repo link)
  const hasLiveSite = link !== repoLink;

  return (
    <div className={`project ${state.darkMode ? "dark-mode" : ""}`}>
      <div className="p_browser">
        <div className="p_circle"></div>
        <div className="p_circle"></div>
        <div className="p_circle"></div>
      </div>
      <div className="p_content">
        <div className="p_top">
          <h3 className="p_title">{title}</h3>
          {description && <p className="p_description">{description}</p>}
        </div>
        <div className="p_bottom">
          {languages && languages.length > 0 && (
            <div className="p_technologies">
              {languages.slice(0, 4).map((lang) => (
                <span key={lang} className="p_tech_badge">
                  {lang}
                </span>
              ))}
            </div>
          )}
          <div className="p_links">
            {hasLiveSite && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p_link_btn"
                aria-label={`Visit ${title} website`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                  <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                </svg>
                Live Site
              </a>
            )}
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p_link_btn p_link_repo"
              aria-label={`View ${title} repository`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              GitHub
            </a>
          </div>
          {img && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img
                src={img}
                alt={`${title} project screenshot`}
                className="p_img"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
