import type { SelectProps } from "@chakra-ui/react";
import { HStack, Icon, Select, useColorMode } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { RiArrowDropDownLine, RiMoonClearFill, RiSunFill } from "react-icons/ri";

export interface ChangeThemeProps {
  withIcon?: boolean;
}

export function ChangeTheme({ withIcon = true, ...rest }: ChangeThemeProps & SelectProps) {
  const { t } = useTranslation("common");
  const { colorMode, setColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColorMode(event.target.value);
  };

  return (
    <HStack spacing={2}>
      {withIcon && (isDark ? <Icon as={RiMoonClearFill} fontSize="sm" /> : <Icon as={RiSunFill} fontSize="sm" />)}
      <Select
        aria-label={t("selected-theme-aria-label", { theme: colorMode })}
        id="theme"
        name="theme"
        onChange={handleChange}
        fontSize="sm"
        variant="unstyled"
        value={colorMode}
        icon={<RiArrowDropDownLine />}
        {...rest}
      >
        <option value="light">{t("light")}</option>
        <option value="dark">{t("dark")}</option>
      </Select>
    </HStack>
  );
}

export default ChangeTheme;
