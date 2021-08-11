import { Link } from "@boilerplate/shared/ui";
import { Icon, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import type { IconType } from "react-icons";

export interface AsideLinkProps {
  icon: IconType;
  href: string;
  label: string;
  onClick?: () => void;
}

export function AsideLink({ icon, href, label, onClick }: AsideLinkProps) {
  const color = useColorModeValue("gray.700", "whiteAlpha.700");
  const hoverColor = useColorModeValue("primary.600", "primary.200");
  const backgroundColor = useColorModeValue("gray.100", "whiteAlpha.100");
  const router = useRouter();
  const active = router.pathname.startsWith(href);

  return (
    <Link
      onClick={onClick}
      display="flex"
      href={href}
      fontWeight="medium"
      fontSize="sm"
      borderRadius="lg"
      backgroundColor={active ? backgroundColor : "initial"}
      color={active ? hoverColor : color}
      _hover={{ backgroundColor, color: hoverColor }}
      alignItems="center"
      px={3}
      py={2}
      aria-label={label}
    >
      <Icon as={icon} mr={4} color="inherit" w={5} h={5} />
      {label}
    </Link>
  );
}

export default AsideLink;
