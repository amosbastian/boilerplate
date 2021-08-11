import { mode } from "@chakra-ui/theme-tools";

type Dict = Record<string, any>;

function variantSecondary(props: Dict) {
  return {
    color: mode("gray.600", "whiteAlpha.700")(props),
  };
}

const variants = {
  secondary: variantSecondary,
};

export const Text = {
  variants,
};
