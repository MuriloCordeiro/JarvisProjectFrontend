// AQUI HAVERA ALTERAÇÕES DE TEXTO, CORES, TAMANHOS DE FONTES, ESTILOS E LAYOUT

import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  xs: "35rem", // 576px
  sm: "48rem", // 768px
  md: "62rem", // 992px
  lg: "75rem", // 1200px
  lp: "81.25rem", // 1300px
  xl: "87.5rem", // 1400px
};
export const defaultTheme = extendTheme({
  breakpoints,

  components: {
    Button: {
      variants: {
        "primary-button": {
          bg: "pf-green.main",
          borderRadius: "20px",
          color: "pf-white.main",
          height: "40px",
        },
        "secondary-button": {
          borderWidth: "2px",
          variant: "outline",
          borderRadius: "20px",
          borderColor: "pf-grey",
          color: "pf-grey",
        },
      },
    },
  },

  colors: {
    "pf-white": {
      main: "#FFFFFF",
      light1: "#F7F5F6",
      light2: "#F1F0EE",
    },

    "pf-grey": {
      main: "#ABABAB",
      light1: "#EEEEEE",
    },
    "pf-black": {
      main: "#000000",
      light1: "#4D4D4F",
      light2: "#ECECEC",
      light3: "#333333",
    },

    "pf-green": {
      main: "#58AA47",
    },

    "pf-red": {
      main: "#FF5353",
    },

    "pf-yellow": {
      main: "#FFCE3E",
    },
  },

  fonts: {
    heading: "Barlow, Noto Sans, Arial, sans-serif",
    body: "Barlow, Noto Sans, Arial, sans-serif",
  },

  textStyles: {
    Header1: {
      fontFamily: "Barlow, Noto Sans, Arial, sans-serif",
      fontWeight: "400",
    },
    Header2: {
      fontFamily: "Barlow, Noto Sans, Arial, sans-serif",
      fontWeight: "500",
    },

    Header3: {
      fontFamily: "Barlow, Noto Sans, Arial, sans-serifs",
      fontWeight: "700",
    },

    SearchBox: {
      fontSize: "text1",
      fontFamily: "Poppins, Noto Sans, Arial, sans-serif",
      lineHeight: "126%",
    },

    titleSpaced: {
      fontFamily: "Poppins, Noto Sans, Arial, sans-serif",
      fontSize: "text1",
      fontWeight: "500",
      lineHeight: "110%",
      letterSpacing: "0.50rem",
      color: "blue.900",
    },

    textSpacedSideMenu: {
      fontSize: "text2",
      fontWeight: "400",
      lineHeight: "14px",
      letterSpacing: "0.3rem",
    },
  },

  fontSizes: {
    priceTit: "3.125rem", //50px
    titleBig: "2.18rem", //35px
    title: "1.43rem", //23px
    title2: "1.12rem", //18px
    h3: "1.25rem", //20px
    h4: "1.125rem", //18px
    text1: "1rem", //16px
    text2: "0.875rem", //14px
    text3: "0.75rem", //12px
    text4: "0.625rem", //10px
  },

  styles: {
    global: {
      body: { bg: "pf-white", color: "pf-black.light1" },
    },
  },
});
