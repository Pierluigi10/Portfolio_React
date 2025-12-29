import React from "react";
import { useTranslation } from "react-i18next";
import "./toggle.scss";
import sun from "../../images/sun.png";
import moon from "../../images/moon.png";
import { useTheme } from "../../context";

function Toggle() {
  const { t } = useTranslation();
  const { state, dispatch } = useTheme();

  const handleClick = () => {
    dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="toggle">
      <img src={sun} alt={t("theme.lightMode")} className="t_icon" />
      <img src={moon} alt={t("theme.darkMode")} className="t_icon" />
      <div
        className="t_button"
        onClick={handleClick}
        style={{ left: state.darkMode ? 0 : 25 }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
          }
        }}
        aria-label={t(state.darkMode ? "theme.lightMode" : "theme.darkMode")}
      />
    </div>
  );
}

export default Toggle;
