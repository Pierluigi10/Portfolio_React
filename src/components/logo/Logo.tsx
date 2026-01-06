import { useTheme } from "../../context";
import "./logo.scss";

interface LogoProps {
  className?: string;
}

function Logo({ className = "" }: LogoProps) {
  const { state } = useTheme();

  return (
    <div className={`logo ${state.darkMode ? "dark-mode" : ""} ${className}`}>
      <svg
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Background circle with gradient effect */}
        <circle
          cx="30"
          cy="30"
          r="27"
          className="logo_bg"
          strokeWidth="2.5"
        />
        {/* Letter P - Modern style */}
        <path
          d="M16 14 L16 46 M16 14 L26 14 Q32 14 32 20 Q32 26 26 26 L16 26"
          className="logo_letter"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Letter B - Modern style */}
        <path
          d="M38 14 L38 46 M38 14 L46 14 Q52 14 52 20 Q52 23 49 24 Q52 25 52 30 Q52 36 46 36 L38 36 M38 24 L46 24 Q49 24 49 20 Q49 17 46 17 L38 17 M38 36 L46 36 Q49 36 49 30 Q49 27 46 27 L38 27"
          className="logo_letter"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

export default Logo;

