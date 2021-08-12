import type { ComponentMultiStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

type Dict = Record<string, any>;

const parts = ["card", "header", "content", "footer"];

const baseStyle = (props: Dict) => ({
  card: {
    bg: mode("white", "whiteAlpha.100")(props),
    boxShadow: mode("sm", "xl")(props),
    overflow: "hidden",
    borderRadius: "md",
    w: "100%",
  },
  header: {
    py: 4,
    px: 6,
    display: "flex",
    alignItems: "center",
    borderBottomColor: mode("gray.100", "whiteAlpha.100")(props),
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
  },
  content: {
    px: 6,
    py: 6,
  },
  footer: {
    py: 3,
    px: 6,
    bg: mode("gray.50", "whiteAlpha.100")(props),
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export const Card: ComponentMultiStyleConfig = { parts, baseStyle };
