import { theme, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  ...theme,
  breakpoints: ["30em", "48em", "52em", "62em", "80em"],
  fonts: {
    body: "Open Sans, sans-serif",
    heading: "Oswald, sans-serif",
    mono: "Urbanist, sans-serif",
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  colors: {
    ...theme.colors,
    yellow: {
      100: "#f9e0b8",
      200: "#f4d195",
      300: "#edc271",
      400: "#e4b34d",
      500: "#daa520",
      600: "#b3871f",
      700: "#8d6b1d",
      800: "#68501a",
      900: "#463615",
    },
  },
  components: {
    Button: {
      baseStyle: {
        _focus: { boxShadow: "none" },
      },
    },
    CloseButton: {
      baseStyle: { _focus: { boxShadow: "none" } },
    },
    Checkbox: {
      baseStyle: { control: { _focus: { boxShadow: "none" } } },
    },
    Radio: {
      baseStyle: { control: { _focus: { boxShadow: "none" } } },
    },
    Menu: {
      baseStyle: {
        list: {
          boxShadow: "lg",
        },
      },
    },
  },
});

export { customTheme };
