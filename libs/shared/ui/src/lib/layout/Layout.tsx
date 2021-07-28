import type { Page } from "@boilerplate/shared/types";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const backgroundColor = useColorModeValue("white", "gray.900");

  return (
    <Box backgroundColor={backgroundColor}>
      <Header />
      <Box as="main" minHeight="100vh" pt={16}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export const getLayout = (page: Page<unknown>) => <Layout>{page}</Layout>;
