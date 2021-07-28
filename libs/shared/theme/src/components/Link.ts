import { mode } from "@chakra-ui/theme-tools";

type Dict = Record<string, any>;

const baseStyle = (props: Dict) => ({
  color: mode("gray.700", "whiteAlpha.900")(props),
  _hover: {
    color: mode("gray.900", "whiteAlpha.700")(props),
    textDecoration: "none",
  },
});

const variants = {
  cta: variantCta,
};

function variantCta(props: Dict) {
  const { colorScheme } = props;
  return {
    color: mode(`${colorScheme}.500`, `${colorScheme}.200`)(props),
    _hover: {
      color: mode(`${colorScheme}.700`, `${colorScheme}.500`)(props),
      textDecoration: "none",
      _disabled: {
        textDecoration: "none",
      },
    },
    _active: {
      color: mode(`${colorScheme}.700`, `${colorScheme}.500`)(props),
    },
  };
}

export const Link = {
  baseStyle,
  variants,
};
