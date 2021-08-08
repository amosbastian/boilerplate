import { mode } from "@chakra-ui/theme-tools";

type Dict = Record<string, any>;

const baseStyle = (props: Dict) => ({
  bg: mode("gray.100", "whiteAlpha.100")(props),
  color: mode("gray.800", "white")(props),
  boxShadow: mode("sm", "xl")(props),
  overflow: "hidden",
  borderRadius: "xl",
});

export const Card = {
  baseStyle,
};
