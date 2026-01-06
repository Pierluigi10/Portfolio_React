import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context";
import { FaGithub, FaLinkedin, FaEnvelope, FaCopy, FaCheck } from "react-icons/fa";
import "./contact.scss";

function Contact() {
  const { t } = useTranslation();
  const { state } = useTheme();
  const [copied, setCopied] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = [
      titleRef.current,
      subtitleRef.current,
      ...cardRefs.current.filter(Boolean),
    ].filter(Boolean) as HTMLElement[];

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const email = "pierluigibaiano@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const contactMethods = [
    {
      id: "email",
      icon: <FaEnvelope />,
      label: t("contact.email"),
      value: email,
      href: `mailto:${email}`,
      action: handleCopyEmail,
      copyable: true,
    },
    {
      id: "linkedin",
      icon: <FaLinkedin />,
      label: t("contact.linkedin"),
      value: "pierluigi-baiano",
      href: "https://www.linkedin.com/in/pierluigi-baiano",
      action: null,
      copyable: false,
    },
    {
      id: "github",
      icon: <FaGithub />,
      label: t("contact.github"),
      value: "Pierluigi10",
      href: "https://github.com/Pierluigi10",
      action: null,
      copyable: false,
    },
  ];

  return (
    <section
      id="contact"
      className={`contact ${state.darkMode ? "dark-mode" : ""}`}
      aria-labelledby="contact-title"
    >
      <div className="contact_container">
        <h2
          ref={titleRef}
          id="contact-title"
          className="contact_title animate-on-scroll"
        >
          {t("contact.title")}
        </h2>
        <p ref={subtitleRef} className="contact_subtitle animate-on-scroll">
          {t("contact.subtitle")}
        </p>

        <div className="contact_cards">
          {contactMethods.map((method, index) => (
            <div
              key={method.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="contact_card animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="contact_card_icon">{method.icon}</div>
              <h3 className="contact_card_label">{method.label}</h3>
              <p className="contact_card_value">{method.value}</p>
              <div className="contact_card_actions">
                <a
                  href={method.href}
                  target={method.id !== "email" ? "_blank" : undefined}
                  rel={method.id !== "email" ? "noopener noreferrer" : undefined}
                  className="contact_card_link"
                  aria-label={`${method.label}: ${method.value}`}
                >
                  {method.id === "email" ? t("contact.sendEmail") : t("contact.visit")}
                </a>
                {method.copyable && (
                  <button
                    className="contact_card_copy"
                    onClick={method.action}
                    aria-label={t("contact.copyEmail")}
                    title={t("contact.copyEmail")}
                  >
                    {copied ? (
                      <>
                        <FaCheck /> {t("contact.copied")}
                      </>
                    ) : (
                      <>
                        <FaCopy /> {t("contact.copy")}
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;

