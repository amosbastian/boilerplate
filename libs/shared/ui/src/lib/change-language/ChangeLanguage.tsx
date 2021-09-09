import type { SelectProps } from "@chakra-ui/react";
import { HStack, Icon, Select } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
import React from "react";
// FIXME: change to ri when fixed https://github.com/react-icons/react-icons/issues/446
import { HiTranslate } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";

const locales = ["en", "nl"];

const languageNames: Record<string, string> = {
  en: "English",
  nl: "Nederlands",
};

export interface ChangeLanguageProps {
  withIcon?: boolean;
}

export function ChangeLanguage({ withIcon = true, ...rest }: ChangeLanguageProps & SelectProps) {
  const { pathname, push, query } = useRouter();
  const { t, lang: currentLanguage } = useTranslation("common");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCookie(null, "NEXT_LOCALE", event.target.value, { maxAge: 30 * 24 * 60 * 60, path: "/" });
    push(
      {
        pathname,
        query,
      },
      pathname,
      { locale: event.target.value },
    );
  };

  return (
    <HStack spacing={2}>
      {withIcon && <Icon as={HiTranslate} fontSize="sm" />}
      <Select
        aria-label={t("selected-language-aria-label", { language: languageNames[currentLanguage] })}
        id="language"
        name="language"
        placeholder={languageNames[currentLanguage]}
        onChange={handleChange}
        variant="unstyled"
        fontSize="sm"
        icon={<RiArrowDropDownLine />}
        {...rest}
      >
        {locales.map((language) => {
          if (language === currentLanguage) return null;

          return (
            <option value={language} key={language}>
              {languageNames[language]}
            </option>
          );
        })}
      </Select>
    </HStack>
  );
}

export default ChangeLanguage;
