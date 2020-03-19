import es from "./translations/es.json";

// English is the default message in each of our source files, so no need for a separate en.json file
const en = {};

// Valid languages to use in production
export const SUPPORTED_LANGS = {
  en: "English",
  es: "Español"
  // zh: "中文",
  // ru: "Русский",
  // pt: "Português",
  // fr: "Français",
  // de: "Deutsch",
  // ja: "日本語"
};

// If we add more than just spanish, just import the files and export it below: export default { en, es, de }
export default { en, es };
