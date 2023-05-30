import { css } from "@emotion/react";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "600"],
  style: ["normal"],
  subsets: ["latin", "cyrillic"],
});

const GlobalStyles = css`
  body {
    width: 100vw;
    height: 100vh;
    background: #34363a;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${inter.style.fontFamily};
    margin: 0;
  }

  #__next {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export { GlobalStyles };
