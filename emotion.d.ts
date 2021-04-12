import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      text: string;
      bg: string;
    };
    spacing: (amt: number) => string;
  }
}
