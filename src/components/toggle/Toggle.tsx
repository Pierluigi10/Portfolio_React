import React, { useContext } from "react";
import "./toggle.scss";
import sun from "../../images/sun.png";
import moon from "../../images/moon.png";
import { ThemeContext } from "../../context";

function Toggle() {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error("Toggle must be used within ThemeProvider");
  }

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="toggle">
      <img src={sun} alt="Light mode" className="t_icon" />
      <img src={moon} alt="Dark mode" className="t_icon" />
      <div
        className="t_button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
          }
        }}
        aria-label={`Switch to ${theme.state.darkMode ? "light" : "dark"} mode`}
      />
    </div>
  );
}

export default Toggle;
