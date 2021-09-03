import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import type { ImageProps as NextImageProps } from "next/image";
import NextImage from "next/image";
import * as React from "react";

const animationVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export interface ImageProps extends Omit<BoxProps, "as"> {
  alt?: NextImageProps["alt"];
  placeholder?: NextImageProps["placeholder"];
  src: NextImageProps["src"];
}

export function Image({ alt = "", children, placeholder, src, ...rest }: ImageProps) {
  const [loaded, setLoaded] = React.useState(false);
  const animationControls = useAnimation();

  React.useEffect(() => {
    if (loaded) {
      animationControls.start("visible");
    }
  }, [animationControls, loaded]);

  return (
    <Box position="relative" borderRadius="lg" bg="gray.200" overflow="hidden" {...rest}>
      <motion.div
        initial="hidden"
        animate={animationControls}
        variants={animationVariants}
        transition={{ ease: "easeOut", duration: 0.2 }}
      >
        <NextImage
          objectFit="cover"
          layout="fill"
          src={src}
          alt={alt}
          placeholder={placeholder}
          onLoadingComplete={() => setLoaded(true)}
        />
      </motion.div>
      {children}
    </Box>
  );
}

export default Image;
