import type { SystemStyleFunction } from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";

const variantReddit: SystemStyleFunction = () => {
  const { bg = "#ff4500", color = "white", hoverBg = "#FF5414", activeBg = "#FF713D" } = {};

  return {
    bg,
    color,
    _hover: {
      bg: hoverBg,
      _disabled: {
        bg,
      },
    },
    _active: { bg: activeBg },
  };
};

const variantTwitter: SystemStyleFunction = (props) => {
  const { bg = "twitter.500", color = "white", hoverBg = "twitter.600", activeBg = "twitter.700" } = {};

  const background = mode(bg, "twitter.200")(props);

  return {
    bg: background,
    color: mode(color, `gray.800`)(props),
    _hover: {
      bg: mode(hoverBg, "twitter.300")(props),
      _disabled: {
        bg: background,
      },
    },
    _active: { bg: mode(activeBg, "twitter.400")(props) },
  };
};

const variantGoogle: SystemStyleFunction = (props) => {
  const borderColor = mode(`gray.200`, `whiteAlpha.300`)(props);

  return {
    border: "1px solid",
    borderColor,
    color: "gray.600",
    bg: "white",
  };
};

const variants = {
  reddit: variantReddit,
  twitter: variantTwitter,
  google: variantGoogle,
};

export const Button = {
  variants,
};
