import React from "react";
import { useTranslation } from "react-i18next";
import "./toggle.scss";
import sun from "../../images/sun.png";
import moon from "../../images/moon.png";
import { useTheme } from "../../context";

function Toggle() {
  const { t } = useTranslation();
  const { state, dispatch } = useTheme();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: "TOGGLE" });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      dispatch({ type: "TOGGLE" });
    }
  };

  return (
    <div
      className={`toggle ${state.darkMode ? "dark" : "light"}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={t(state.darkMode ? "theme.lightMode" : "theme.darkMode")}
    >
      <img src={sun} alt={t("theme.lightMode")} className="t_icon" />
      <img src={moon} alt={t("theme.darkMode")} className="t_icon" />
      <div
        className="t_button"
        aria-hidden="true"
      />
    </div>
  );
}

export default Toggle;
