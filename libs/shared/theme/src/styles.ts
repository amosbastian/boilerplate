import { mode, Styles } from "@chakra-ui/theme-tools";

export const styles: Styles = {
  global: (props) => ({
    html: {
      height: "100%",
    },
    body: {
      height: "100%",
      background: mode("gray.50", "gray.900")(props),
      fontSize: "0.875rem",
    },
    "body > div:first-child, div#__next, div#__next > div, div#__next > div": {
      height: "100%",
    },
    a: {
      _hover: {
        textDecoration: "none",
      },
    },
  }),
};
