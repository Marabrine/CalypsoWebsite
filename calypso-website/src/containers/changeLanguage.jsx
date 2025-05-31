import { useTranslation } from "react-i18next";
import "./changeLanguage.css";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="language-switcher">
      <button className="language-button" onClick={toggleLanguage}>
        {i18n.language === "en" ? "Français" : "English"}
      </button>
    </div>
  );
}
