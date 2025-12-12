import React, { useContext } from "react";
import "./toggle.scss";
import sun from "../../images/sun.png";
import moon from "../../images/moon.png";
import { ThemeContext } from "../../context.jsx";

function Toggle() {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="toggle">
      <img src={sun} alt="" className="t_icon" />
      <img src={moon} alt="" className="t_icon" />
      <div className="t_button"  onClick={handleClick} style={{ left: theme.state.darkMode ? 0 : 25 }}></div>
    </div>
  );
}

export default Toggle;
