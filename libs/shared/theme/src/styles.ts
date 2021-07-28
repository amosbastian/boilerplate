import { mode, Styles } from "@chakra-ui/theme-tools";

export const styles: Styles = {
  global: (props) => ({
    body: {
      background: mode("gray.50", "gray.900")(props),
      fontSize: "0.875rem",
    },
    a: {
      _hover: {
        textDecoration: "none",
      },
    },
  }),
};
