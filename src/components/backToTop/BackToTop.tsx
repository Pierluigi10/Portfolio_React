import { useEffect, useState } from "react";
import { useTheme } from "../../context";
import { scrollTo } from "../../utils/scrollTo";
import "./backToTop.scss";

function BackToTop() {
  const { state } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility(); // Initial check

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleClick = () => {
    scrollTo("intro", 80);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      className={`back-to-top ${state.darkMode ? "dark-mode" : ""} ${
        isVisible ? "visible" : ""
      }`}
      onClick={handleClick}
      aria-label="Back to top"
      title="Back to top"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}

export default BackToTop;

