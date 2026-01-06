import { useTranslation } from "react-i18next";
import "./about.scss";
import codeGlasses from "../../images/codeglasses.png";

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="a_left">
        <div className="a_card">
          <img
            src={codeGlasses}
            alt="Code visualization with glasses"
            className="a_img"
          />
        </div>
      </div>
      <div className="a_right">
        <h2 id="about-title" className="a_title">{t("about.title")}</h2>
        <p className="a_sub">{t("about.subtitle")}</p>
        <p className="a_description">{t("about.description")}</p>
        <p className="a_language">{t("about.skills")}</p>
      </div>
    </section>
  );
}

export default About;
