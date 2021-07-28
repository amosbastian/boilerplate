import { extendTheme } from "@chakra-ui/react";
import { components } from "./components";
import { foundations } from "./foundations";
import { styles } from "./styles";

const overrides = {
  ...foundations,
  styles,
  components,
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - Type instantiation is excessively deep and possibly infinite
export const theme = extendTheme(overrides);
