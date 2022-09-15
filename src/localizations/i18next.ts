/*
	This file is a part of Pixel Art to Vector (https://github.com/hilde801/pixel-art-to-vector)
	Copyright 2022 Hilder Gill (hilde801) <hildergill@gmail.com>
*/

import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import supportedLngs from "./languages.json";

import en from "./en.json";

i18next.use(initReactI18next).use(I18nextBrowserLanguageDetector).init({
	supportedLngs,
	resources: { en }
});
