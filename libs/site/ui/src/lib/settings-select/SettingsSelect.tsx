import type { SelectProps } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { RiArrowDropDownLine } from "react-icons/ri";

export interface SettingsSelectProps {
  links: { href: string; label: string }[];
}

export function SettingsSelect({ links, ...rest }: SettingsSelectProps & SelectProps) {
  const { t } = useTranslation("settings");
  const { push, pathname } = useRouter();

  const currentPage = pathname.split("/")[pathname.split("/").length - 1];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    push(event.target.value);
  };

  return (
    <Select
      // aria-label={t("selected-language-aria-label", { language: languageNames[currentLanguage] })}
      id="language"
      name="language"
      placeholder={currentPage === "settings" ? t("settings:general") : t(`settings:${currentPage}`)}
      onChange={handleChange}
      variant="filled"
      fontSize="sm"
      icon={<RiArrowDropDownLine />}
      {...rest}
    >
      {links.map(({ href, label }) => {
        if (pathname === href) return null;

        return (
          <option value={href} key={label}>
            {t(label)}
          </option>
        );
      })}
    </Select>
  );
}

export default SettingsSelect;
