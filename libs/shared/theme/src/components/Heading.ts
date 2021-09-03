import { mode } from "@chakra-ui/theme-tools";

type Dict = Record<string, any>;

function variantAnchor(props: Dict) {
  return {
    marginLeft: "-1em",
    cursor: "pointer",
    _hover: {
      textDecoration: "none",
    },
    __before: {
      color: mode("gray.600", "whiteAlpha.700")(props),
      content: "#",
    },
  };
}

function variantSecondary(props: Dict) {
  return {
    color: mode("gray.600", "whiteAlpha.700")(props),
  };
}

const variants = {
  anchor: variantAnchor,
  secondary: variantSecondary,
};

export const Heading = {
  variants,
};
