import { Image, ImageProps } from "@boilerplate/shared/ui";
import type { BoxProps } from "@chakra-ui/react";
import { Box, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";

const hueRotate = keyframes`
  from { filter: hue-rotate(0deg); }
  to { filter: hue-rotate(360deg); }
`;

export interface GradientImageProps extends BoxProps {
  imageProps: ImageProps;
  withAnimation?: boolean;
}

export function GradientImage({ children, imageProps, withAnimation = false, ...rest }: GradientImageProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion || !withAnimation ? undefined : `${hueRotate} 30s ease-in-out infinite`;

  return (
    <Box
      borderRadius={{ base: "lg", md: "2xl" }}
      overflow={{ base: "initial", md: "hidden" }}
      position="relative"
      animation={animation}
      bgGradient="linear(to-br, purple.500, pink.500)"
      {...rest}
    >
      <Image {...imageProps} />
    </Box>
  );
}

export default GradientImage;
