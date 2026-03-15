import { type LanguageCode } from "@/constants/lang";
import { en } from "./en";
import { es } from "./es";


const content = {
  en,
  es,
};

export type Translations = typeof en;

export function getTranslations(lang: LanguageCode): Translations {
  return content[lang];
}
