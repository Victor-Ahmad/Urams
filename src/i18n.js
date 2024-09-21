import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import nl from "./locales/nl.json";

const savedLanguage = localStorage.getItem("lang") || "nl"; // Default to Dutch ('nl')

const i18n = createI18n({
  legacy: false,
  locale: savedLanguage, // Set the saved or default language
  fallbackLocale: "en",
  messages: {
    en,
    nl,
  },
});

export default i18n;
