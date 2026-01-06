import { scrollTo } from "../../utils/scrollTo";
import "./skipToContent.scss";

function SkipToContent() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollTo("intro", 80);
    // Focus on first focusable element in main content
    if (typeof document !== "undefined") {
      setTimeout(() => {
        const firstFocusable = document.querySelector(
          'main, [role="main"], #intro'
        ) as HTMLElement;
        if (firstFocusable) {
          firstFocusable.focus();
          firstFocusable.tabIndex = -1;
        }
      }, 100);
    }
  };

  return (
    <a
      href="#intro"
      className="skip-to-content"
      onClick={handleClick}
      aria-label="Skip to main content"
    >
      Skip to main content
    </a>
  );
}

export default SkipToContent;

