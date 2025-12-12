import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../context";
import "./languageSwitcher.scss";

const languages = [
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
  { code: "it", label: "IT" },
];

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error("LanguageSwitcher must be used within ThemeProvider");
  }

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <div
      className={`language-switcher ${
        theme.state.darkMode ? "dark-mode" : ""
      }`}
    >
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`lang-button ${
            i18n.language === lang.code ? "active" : ""
          }`}
          aria-label={`Switch to ${lang.label}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
