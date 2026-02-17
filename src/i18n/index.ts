import { type Language } from "@/constants/lang";
import { en } from "./en";
import { es } from "./es";


const content = {
  en,
  es,
};

export type Translations = typeof content[keyof typeof content];

export function getTranslations(lang: Language): Translations {
  return content[lang];
}
