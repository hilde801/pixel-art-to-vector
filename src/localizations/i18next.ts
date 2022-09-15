import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import supportedLngs from "./languages.json";

import en from "./en.json";

i18next.use(initReactI18next).use(I18nextBrowserLanguageDetector).init({
	supportedLngs,
	resources: { en }
});
