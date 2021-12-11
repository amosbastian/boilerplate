import type { Page } from "@boilerplate/shared/types";
import { Footer } from "@boilerplate/shared/ui";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { Header } from "../header/Header";

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const backgroundColor = useColorModeValue("gray.100", "gray.900");

  return (
    <Box
      backgroundColor={backgroundColor}
      minHeight="100%"
      display="grid"
      gridTemplateRows="max-content 1fr max-content"
    >
      <Header />
      <Box as="main" minHeight="calc(100vh - var(--chakra-sizes-16))">
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

export const getLayout = (page: Page<unknown>) => <Layout>{page}</Layout>;

export default Layout;
