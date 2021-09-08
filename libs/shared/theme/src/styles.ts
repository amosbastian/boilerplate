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
      overflowY: "scroll",
      "&::-webkit-scrollbar": {
        width: "1em",
      },
      "&::-webkit-scrollbar-track": {
        background: mode("white", "whiteAlpha.200")(props),
      },
      "&::-webkit-scrollbar-thumb": {
        background: mode("gray.200", "gray.700")(props),
      },
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
