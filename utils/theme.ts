import { Theme } from "@emotion/react";

const spacing8Px = (amt: number) => `${amt * 8}px`;

export const MainTheme: Theme = {
  colors: {
    primary: "#7ffa69",
    secondary: "#2a2a2a",
    text: "#fff",
    bg: "#000",
  },
  spacing: spacing8Px,
};
