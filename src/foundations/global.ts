import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
  ":root": {
    "--global-font-body": "var(--font-jakarta-sans)",
  },

  "*, *::before, *::after": {
    boxSizing: "border-box",
  },

  "*": { margin: 0 },

  body: {
    lineHeight: 1.47059,
  },

  "img, picture, video, canvas, svg": {
    display: "block",
    "max-width": "100%",
  },

  "input, button, textarea, select": {
    font: "inherit",
  },

  "p, h1, h2, h3, h4, h5, h6": {
    overflowWrap: "break-word",
  },

  "#root, #__next": {
    isolation: "isolate",
  },
});
