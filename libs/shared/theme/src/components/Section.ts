import type { ComponentMultiStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const parts = ["section", "card"];

function baseStyleSection(props: Record<string, any>) {
  return {
    py: { base: 10, md: 20 },
    overflow: "hidden",
    bg: mode("gray.50", "whiteAlpha.100")(props),
  };
}

function baseStyleCard(props: Record<string, any>) {
  return {
    bg: mode("white", "whiteAlpha.100")(props),
    boxShadow: mode("sm", "md")(props),
    overflow: "hidden",
    borderRadius: "md",
    borderWidth: mode("1px", "0px")(props),
    borderColor: mode("gray.200", "whiteAlpha.200")(props),
    borderStyle: mode("solid", "solid")(props),
  };
}

const baseStyle = (props: Record<string, any>) => ({
  section: baseStyleSection(props),
  card: baseStyleCard(props),
});

function variantTransparent(props: Record<string, any>) {
  return {
    section: {
      bg: "transparent",
    },
    card: {
      bg: mode("white", "whiteAlpha.100")(props),
    },
  };
}

const variants = {
  transparent: variantTransparent,
};

export const Section: ComponentMultiStyleConfig = { parts, baseStyle, variants };
