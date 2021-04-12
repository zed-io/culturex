import { ThemeProvider } from "@emotion/react";
import { AppProps } from "next/app";
import React from "react";
import { MainTheme } from "utils/theme";
import "styles/globals.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={MainTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
