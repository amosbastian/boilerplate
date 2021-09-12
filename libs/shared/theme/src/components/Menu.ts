import { mode } from "@chakra-ui/theme-tools";

function baseStyleList(props: Record<string, any>) {
  return {
    boxShadow: mode(`sm`, `dark-lg`)(props),
    borderWidth: mode("1px", "0px")(props),
    "&:focus:not([data-focus-visible-added])": {
      shadow: mode(`sm`, `dark-lg`)(props),
    },
  };
}

const baseStyle = (props: Record<string, any>) => ({
  list: baseStyleList(props),
});

export const Menu = {
  baseStyle,
};
