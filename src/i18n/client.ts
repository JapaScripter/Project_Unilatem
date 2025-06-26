"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import pt from "../../public/locales/pt/translation.json";
import en from "../../public/locales/en/translation.json";
import es from "../../public/locales/es/translation.json";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      pt: { translation: pt },
      en: { translation: en },
      es: { translation: es },
    },
    lng: "pt",
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18n;
