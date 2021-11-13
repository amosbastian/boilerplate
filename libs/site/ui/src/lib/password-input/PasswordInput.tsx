import { InputGroup, Input, InputRightElement, Button, Icon, IconButton } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import * as React from "react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import type { InputProps } from "@chakra-ui/react";

export type PasswordInputProps = InputProps;

export function PasswordInput(props: PasswordInputProps) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const { t } = useTranslation("common");

  return (
    <InputGroup size="md">
      <Input pr={14} type={show ? "text" : "password"} placeholder={t("password-placeholder")} {...props} />
      <InputRightElement>
        <IconButton
          size="sm"
          borderRadius="50%"
          variant="ghost"
          onClick={handleClick}
          aria-label={show ? t("hide-password") : t("show-password")}
          icon={<Icon as={show ? RiEyeOffLine : RiEyeLine} />}
        />
      </InputRightElement>
    </InputGroup>
  );
}

export default PasswordInput;
