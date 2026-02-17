import { DEFAULT_ROUTE, DEFAULT_CODE } from "./lang";

export const Url = {
  BASE: "https://myrightshelp.netlify.app",
  AUTHOR: "https://danielblake.dev",
} as const;

export const Meta = {
  BASE: Url.BASE,
  START: DEFAULT_ROUTE,
  THEME_COLOR: "#000000",
  BKG_COLOR: "#FFFFFF",
  Author: {
    NAME: "Daniel Blake",
    URL: "https://danielblake.dev",
  },
} as const;

export const OpenGraph = {
  TITLE: "My Rights",
  DESC: "",
  URL: Url.BASE,
  SITE_NAME: "My Rights",
  Image: {
    URL: Url.BASE + "/opengraph-image.png",
    WIDTH: "1200",
    HEIGHT: "630",
    ALT: "Know your rights. Protect and empower yourself.",
  },
  LOCALE: DEFAULT_CODE,
} as const;

export const AppleApp = {
  BAR_STYLE: "black",
  TITILE: "My Rights",
  IMAGE: "/startup-image.png",
} as const;
