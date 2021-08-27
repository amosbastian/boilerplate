import type { BoxProps } from "@chakra-ui/react";
import { Box, Skeleton } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import type { ImageProps as NextImageProps } from "next/image";
import NextImage from "next/image";
import * as React from "react";

const animationVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export interface ImageProps extends Omit<BoxProps, "as"> {
  alt: NextImageProps["alt"];
  src: NextImageProps["src"];
}

export function Image({ alt, children, src, ...rest }: ImageProps) {
  const [loaded, setLoaded] = React.useState(false);
  const animationControls = useAnimation();

  React.useEffect(() => {
    if (loaded) {
      animationControls.start("visible");
    }
  }, [animationControls, loaded]);

  return (
    <Box position="relative" borderRadius="lg" overflow="hidden" {...rest}>
      {!loaded && <Skeleton opacity={1} position="absolute" inset={0} borderRadius="lg" {...rest} />}
      <motion.div
        initial="hidden"
        animate={animationControls}
        variants={animationVariants}
        transition={{ ease: "easeOut", duration: 0.2 }}
      >
        <NextImage objectFit="cover" layout="fill" src={src} alt={alt} onLoadingComplete={() => setLoaded(true)} />
      </motion.div>
      {children}
    </Box>
  );
}

export default Image;
