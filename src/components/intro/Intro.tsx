import { useTranslation } from "react-i18next";
import { useTheme } from "../../context";
import "./intro.scss";
import MeWebP from "../../images/me-min.webp";
import MePNG from "../../images/me-min.png";

function Intro() {
  const { t } = useTranslation();
  const { state } = useTheme();

  return (
    <section
      className={`intro ${state.darkMode ? "dark-mode" : ""}`}
      aria-label="Introduction"
    >
      <div className="i_left">
        <div className="i_left_wrapper">
          <h2 className="i_intro">{t("intro.greeting")}</h2>
          <h1 className="i_name">{t("intro.name")}</h1>
          <div className="i_title">
            <div className="i_title_wrapper">
              <div className="i_title_item">{t("intro.title1")}</div>
              <div className="i_title_item">{t("intro.title2")}</div>
              <div className="i_title_item">{t("intro.title3")}</div>
            </div>
          </div>
          <p className="i_description">{t("intro.description")}</p>
        </div>
      </div>
      <div className="i_right">
        <div className="i_bg"></div>
        <picture>
          <source srcSet={MeWebP} type="image/webp" />
          <img
            src={MePNG}
            alt="Pierluigi - Full Stack Web Developer"
            className="i_img"
            loading="lazy"
          />
        </picture>
      </div>
    </section>
  );
}

export default Intro;
