import { useEffect, useState } from "react";
import { useTheme } from "../../context";
import "./scrollProgress.scss";

function ScrollProgress() {
  const { state } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const updateScrollProgress = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (windowHeight <= 0) return;
      
      const scrolled = window.scrollY;
      const progress = Math.min(100, Math.max(0, (scrolled / windowHeight) * 100));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    updateScrollProgress(); // Initial calculation

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <div
      className={`scroll-progress ${state.darkMode ? "dark-mode" : ""}`}
      role="progressbar"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Scroll progress"
    >
      <div
        className="scroll-progress_bar"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

export default ScrollProgress;

