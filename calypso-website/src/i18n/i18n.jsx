import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
i18n
  .use(Backend) // Utilise le module Backend pour charger les fichiers de traduction via HTTP (/public/locales)
  .use(LanguageDetector) // Utilise le détecteur pour choisir automatiquement la langue du navigateur de l'utilisateur
  .use(initReactI18next) // Initialise react-i18next pour l'intégration avec React
  .init({
    lng: "fr", // Langue par défaut si rien n'est détecté
    fallbackLng: "en", // Langue de secours si une traduction est manquante
    debug: true, // Active console de messages utiles (à désactiver en production)
    interpolation: {
      escapeValue: false, // React échappe déjà les données, inutile de le refaire
    },
    supportedLngs: ["fr", "en"], // liste dans langages supportés
    load: "languageOnly", // n’utiliser que la portion langue du navigateur.
  });
// Met à jour l'attribut lang dans le <html> selon la langue active (important pour l’accessibilité)
i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
});
export default i18n;
