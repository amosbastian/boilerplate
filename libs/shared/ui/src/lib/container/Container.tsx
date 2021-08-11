import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

export type ContainerProps = BoxProps;

export const Container = (props: ContainerProps) => <Box maxW="container.xl" px={4} mx="auto" {...props} />;
