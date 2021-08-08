import { mode } from "@chakra-ui/theme-tools";

type Dict = Record<string, any>;

const baseStyle = (props: Dict) => ({
  bg: mode("white", "whiteAlpha.100")(props),
  boxShadow: mode("sm", "xl")(props),
  overflow: "hidden",
  borderRadius: "xl",
});

export const Card = {
  baseStyle,
};
