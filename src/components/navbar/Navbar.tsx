import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context";
import { scrollTo } from "../../utils/scrollTo";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import Toggle from "../toggle/Toggle";
import Logo from "../logo/Logo";
import "./navbar.scss";

function Navbar() {
  const { t } = useTranslation();
  const { state } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;
      
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = ["intro", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll(); // Initial check

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleNavClick = (sectionId: string) => {
    const offset = 80; // Navbar height
    scrollTo(sectionId, offset);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "intro", label: t("navbar.home") },
    { id: "about", label: t("navbar.about") },
    { id: "skills", label: t("navbar.skills") },
    { id: "projects", label: t("navbar.projects") },
    { id: "contact", label: t("navbar.contact") },
  ];

  return (
    <nav
      className={`navbar ${state.darkMode ? "dark-mode" : ""} ${
        isScrolled ? "scrolled" : ""
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar_container">
        <button
          className="navbar_logo"
          onClick={() => handleNavClick("intro")}
          aria-label={t("navbar.home")}
        >
          <Logo />
        </button>

        <div className="navbar_right">
          <ul
            className={`navbar_menu ${isMobileMenuOpen ? "open" : ""}`}
            role="menubar"
          >
            {navItems.map((item) => (
              <li key={item.id} role="none">
                <button
                  className={`navbar_link ${
                    activeSection === item.id ? "active" : ""
                  }`}
                  onClick={() => handleNavClick(item.id)}
                  role="menuitem"
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="navbar_controls">
            <LanguageSwitcher />
            <Toggle />
          </div>
          <button
            className={`navbar_toggle ${isMobileMenuOpen ? "open" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={t("navbar.menuToggle")}
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

