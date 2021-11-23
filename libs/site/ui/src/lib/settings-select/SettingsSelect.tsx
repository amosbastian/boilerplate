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

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    push(event.target.value);
  };

  const currentPage = pathname.split("/")[pathname.split("/").length - 1];
  const pageName = currentPage === "settings" ? t("settings:general") : t(`settings:${currentPage}`);

  return (
    <Select
      data-testid="settings-select"
      aria-label={t("selected-page-aria-label", { pageName })}
      id="language"
      name="language"
      placeholder={pageName}
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
