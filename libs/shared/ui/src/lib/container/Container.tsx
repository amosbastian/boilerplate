import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

export const Container = (props: BoxProps) => <Box maxW="container.xl" px={4} mx="auto" {...props} />;
