export enum Language {
  EN = "en",
  ES = "es",
};

export const DEFAULT_CODE = Language.EN;
export const DEFAULT_ROUTE = `/${DEFAULT_CODE}`;
export const LANGUAGES = Object.values(Language);

export const STATIC_PATHS =
  LANGUAGES
    .filter(item => item !== DEFAULT_CODE)
    .map((lang) => ({ params: { locale: lang } }));
