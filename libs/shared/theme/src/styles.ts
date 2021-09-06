import { mode, Styles } from "@chakra-ui/theme-tools";

export const styles: Styles = {
  global: (props) => ({
    html: {
      height: "100%",
    },
    body: {
      height: "-webkit-fill-available",
      background: mode("white", "gray.900")(props),
      fontSize: "0.875rem",
    },
    "div#__next": {
      height: "-webkit-fill-available",
    },
    a: {
      _hover: {
        textDecoration: "none",
      },
    },
  }),
};
