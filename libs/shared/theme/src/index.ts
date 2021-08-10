import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { components } from "./components";
import { foundations } from "./foundations";
import { styles } from "./styles";

const overrides = {
  ...foundations,
  styles,
  components,
};

export const theme = extendTheme(overrides, withDefaultColorScheme({ colorScheme: "primary" }));
