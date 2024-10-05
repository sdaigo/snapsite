import { defineTokens } from "@pandacss/dev";

export const tokens = defineTokens({
  fonts: {
    body: {
      value: "var(--global-font-body), sans-serif",
    },
  },
});
