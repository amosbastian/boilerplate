import { extendTheme, useStyles, withDefaultColorScheme } from "@chakra-ui/react";
import { components } from "./components";
import { foundations } from "./foundations";
import { styles } from "./styles";

export const useProvidedStyles = ({ name }: { name: string }) => {
  try {
    const styles = useStyles();
    return name ? styles[name] : styles;
  } catch {
    return;
  }
};

const overrides = {
  ...foundations,
  styles,
  components,
};

export const theme = extendTheme(overrides, withDefaultColorScheme({ colorScheme: "primary" }));
