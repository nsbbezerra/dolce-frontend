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
      100: "#fff1ba",
      200: "#ffea98",
      300: "#ffe474",
      400: "#ffdd4c",
      500: "#ffd700",
      600: "#d0af12",
      700: "#a38a17",
      800: "#786518",
      900: "#504315",
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
