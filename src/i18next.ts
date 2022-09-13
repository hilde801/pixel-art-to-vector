import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import supportedLngs from "../locales/languages.json";

import en from "../locales/en.json";

i18next.use(initReactI18next).use(I18nextBrowserLanguageDetector).init({
	supportedLngs,
	resources: { en }
});
