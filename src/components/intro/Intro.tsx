import { useTranslation } from "react-i18next";
import { useTheme } from "../../context";
import { scrollTo } from "../../utils/scrollTo";
import "./intro.scss";
import MeWebP from "../../images/me-min.webp";
import MePNG from "../../images/me-min.png";

function Intro() {
  const { t } = useTranslation();
  const { state } = useTheme();

  const handleScrollTo = (sectionId: string) => {
    scrollTo(sectionId, 80);
  };

  return (
    <section
      id="intro"
      className={`intro ${state.darkMode ? "dark-mode" : ""}`}
      aria-label="Introduction"
    >
      <div className="i_left">
        <div className="i_left_wrapper">
          <h2 className="i_intro animate-fade-in">{t("intro.greeting")}</h2>
          <h1 className="i_name animate-slide-in">{t("intro.name")}</h1>
          <div className="i_title">
            <div className="i_title_wrapper">
              <div className="i_title_item">{t("intro.title1")}</div>
              <div className="i_title_item">{t("intro.title2")}</div>
              <div className="i_title_item">{t("intro.title3")}</div>
            </div>
          </div>
          <p className="i_description animate-fade-in-delay">{t("intro.description")}</p>
          <div className="i_cta animate-fade-in-delay-2">
            <button
              className="i_cta_btn i_cta_primary"
              onClick={() => handleScrollTo("projects")}
              aria-label={t("intro.viewProjects")}
            >
              {t("intro.viewProjects")}
            </button>
            <button
              className="i_cta_btn i_cta_secondary"
              onClick={() => handleScrollTo("contact")}
              aria-label={t("intro.getInTouch")}
            >
              {t("intro.getInTouch")}
            </button>
          </div>
        </div>
      </div>
      <div className="i_right">
        <div className="i_bg"></div>
        <picture className="animate-slide-in-right">
          <source srcSet={MeWebP} type="image/webp" />
          <img
            src={MePNG}
            alt="Pierluigi - Full Stack Web Developer"
            className="i_img"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
      </div>
      <div className="i_scroll_indicator" aria-hidden="true">
        <div className="i_scroll_mouse">
          <div className="i_scroll_wheel"></div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
