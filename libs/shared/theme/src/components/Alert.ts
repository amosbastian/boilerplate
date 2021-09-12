import { alertAnatomy as parts } from "@chakra-ui/anatomy";
import type { PartsStyleObject } from "@chakra-ui/theme-tools";

const baseStyle: PartsStyleObject<typeof parts> = {
  container: {
    borderRadius: "md",
  },
};

export const Alert = {
  baseStyle,
};
