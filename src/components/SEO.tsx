import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

/**
 * SEO component to dynamically update meta tags
 */
function SEO({ title, description, keywords }: SEOProps) {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (typeof document === "undefined") return;

    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute("content", description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && keywords) {
      metaKeywords.setAttribute("content", keywords);
    }

    // Update HTML lang attribute based on current language
    if (document.documentElement) {
      document.documentElement.lang = i18n.language;
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && title) {
      ogTitle.setAttribute("content", title);
    }

    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    if (ogDescription && description) {
      ogDescription.setAttribute("content", description);
    }
  }, [title, description, keywords, i18n.language]);

  return null;
}

export default SEO;

