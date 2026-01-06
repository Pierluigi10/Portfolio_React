import { useTheme } from "../../context";
import "./projectList.scss";

interface ProjectSkeletonProps {
  count?: number;
}

function ProjectSkeleton({ count = 3 }: ProjectSkeletonProps) {
  const { state } = useTheme();

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`project_skeleton ${state.darkMode ? "dark-mode" : ""}`}
          aria-hidden="true"
        >
          <div className="project_skeleton_browser">
            <div className="project_skeleton_circle"></div>
            <div className="project_skeleton_circle"></div>
            <div className="project_skeleton_circle"></div>
          </div>
          <div className="project_skeleton_content">
            <div className="project_skeleton_title"></div>
            <div className="project_skeleton_description">
              <div className="project_skeleton_line"></div>
              <div className="project_skeleton_line"></div>
              <div className="project_skeleton_line short"></div>
            </div>
            <div className="project_skeleton_technologies">
              <div className="project_skeleton_badge"></div>
              <div className="project_skeleton_badge"></div>
              <div className="project_skeleton_badge"></div>
            </div>
            <div className="project_skeleton_actions">
              <div className="project_skeleton_button"></div>
              <div className="project_skeleton_button"></div>
            </div>
            <div className="project_skeleton_image"></div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectSkeleton;

