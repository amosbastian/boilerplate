import { Button, useColorMode, useColorModeValue, useToken } from "@chakra-ui/react";
import type { ButtonProps } from "@chakra-ui/react";

export type GradientButtonProps = ButtonProps;

export function GradientButton({ children, ...rest }: GradientButtonProps) {
  const [primary200, primary400] = useToken("colors", ["primary.200", "primary.400"]);

  return (
    <Button
      colorScheme="primary"
      _before={{
        content: '""',
        position: "absolute",
        inset: 0,
        background: `linear-gradient(to right, ${primary200}, ${primary400})`,
        zIndex: "-1",
        transform: "translateY(15%) scale(.85)",
        filter: "blur(30px)",
      }}
      {...rest}
      position="relative"
    >
      {children}
    </Button>
  );
}

export default GradientButton;
