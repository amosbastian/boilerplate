import { theme } from "@boilerplate/shared/theme";
import { ChakraProvider, Flex, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
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

const ColorModeToggleBar = () => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(RiMoonFill, RiSunFill);
  const nextMode = useColorModeValue("dark", "light");

  return (
    <Flex justify="flex-end" alignItems="flex-end" h="100vh" position="absolute" flexDir="column" inset={0}>
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${nextMode} mode`}
        variant="ghost"
        color="current"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        maxW="max-content"
        mb={2}
        mr={2}
      />
    </Flex>
  );
};

const withChakra = (StoryFn) => {
  return (
    <ChakraProvider theme={theme}>
      <div id="story-wrapper">
        <StoryFn />
        <ColorModeToggleBar />
      </div>
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
