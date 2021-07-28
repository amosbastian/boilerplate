import { ChakraTheme } from "@chakra-ui/react";

type Typography = Partial<Pick<ChakraTheme, "letterSpacings" | "lineHeights" | "fontWeights" | "fonts" | "fontSizes">>;

export const typography: Typography = {
  fonts: {
    heading: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  },
};
