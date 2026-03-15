export const Language = {
  EN: "en",
  ES: "es",
} as const;

export const DEFAULT_CODE = Language.EN;
export const DEFAULT_ROUTE = `/${DEFAULT_CODE}`;
export const LANGUAGES = Object.values(Language);
export const ALT_LANGUAGES = LANGUAGES.filter(item => item !== DEFAULT_CODE);

export type LanguageCode = typeof Language[keyof typeof Language];
