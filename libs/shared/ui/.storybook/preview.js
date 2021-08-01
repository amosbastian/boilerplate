import { theme } from "@boilerplate/shared/theme";
import { Box, ChakraProvider, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import * as NextImage from "next/image";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
  viewport: {
    viewports: {
      mobile: {
        name: "iPhone X",
        styles: {
          width: "375px",
          height: "812px",
        },
      },
      tablet: {
        name: "iPad",
        styles: {
          width: "768px",
          height: "1024px",
        },
      },
      laptop: {
        name: "Laptop",
        styles: {
          width: "1024px",
          height: "768px",
        },
      },
      desktop: {
        name: "Desktop",
        styles: {
          width: "1440px",
          height: "1024px",
        },
      },
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

const ColorModeToggleButton = () => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(RiMoonFill, RiSunFill);
  const nextMode = useColorModeValue("dark", "light");

  return (
    <IconButton
      position="absolute"
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${nextMode} mode`}
      variant="ghost"
      color="current"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      maxW="max-content"
      bottom={2}
      right={2}
    />
  );
};

const withChakra = (StoryFn) => {
  return (
    <ChakraProvider theme={theme}>
      <Box id="story-wrapper" h="100vh">
        <StoryFn />
        <ColorModeToggleButton />
      </Box>
    </ChakraProvider>
  );
};

const OriginalNextImage = NextImage.default;

// eslint-disable-next-line no-import-assign
Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const decorators = [withChakra];
