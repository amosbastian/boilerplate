import { Link } from "@boilerplate/shared/ui";
import { useOryTranslation } from "@boilerplate/site/utility";
import type { FormControlProps } from "@chakra-ui/react";
import { FormControl, FormHelperText, FormLabel, HStack, Input, Stack } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { PasswordInput } from "../../../password-input/PasswordInput";
import { FlowNodeInputProps } from "../flow-node-input";

export function FlowNodeInputDefault({
  node,
  attributes,
  value = "",
  setValue,
  disabled,
  ...rest
}: FlowNodeInputProps & FormControlProps) {
  const router = useRouter();
  const { refresh, aal } = router.query;
  const { t } = useTranslation("common");
  const { oryT } = useOryTranslation();

  // Some attributes have dynamic JavaScript - this is for example required for WebAuthn.
  const onClick = () => {
    // This section is only used for WebAuthn. The script is loaded via a <script> node
    // and the functions are available on the global window level. Unfortunately, there
    // is currently no better way than executing eval / function here at this moment.
    if (attributes.onclick) {
      // eslint-disable-next-line no-new-func
      const run = new Function(attributes.onclick);
      run();
    }
  };

  console.log(node.meta.label);

  // Render a generic text input field.
  return (
    <>
      <FormControl isInvalid={node.messages.find(({ type }) => type === "error") ? true : false} {...rest}>
        {node.meta.label?.id ? (
          <FormLabel>
            {attributes.type === "password"
              ? t("password")
              : attributes.type === "email"
              ? t("email")
              : oryT(node.meta.label.id, node.meta.label.context)}
          </FormLabel>
        ) : null}
        {attributes.type === "password" ? (
          <PasswordInput
            onClick={onClick}
            onChange={(event) => {
              setValue(event.target.value);
            }}
            name={attributes.name}
            value={value}
            isDisabled={attributes.disabled || disabled}
            placeholder={t("password-placeholder")}
          />
        ) : (
          <Input
            onClick={onClick}
            onChange={(event) => {
              setValue(event.target.value);
            }}
            type={attributes.type}
            name={attributes.name}
            value={value}
            isDisabled={attributes.disabled || disabled}
            placeholder={attributes.type === "email" ? t("email") : undefined}
          />
        )}
        {node.messages.length > 0 ? (
          <FormHelperText>
            <Stack spacing={1}>
              {[...new Set(node.messages.map(({ id, context }) => oryT(id, context)))].map((text, index) => (
                <div key={`${text}-${index}`}>{text}</div>
              ))}
            </Stack>
          </FormHelperText>
        ) : null}
      </FormControl>
      {attributes.type === "password" && router.pathname === "/login" && !(aal || refresh) ? (
        <HStack justifyContent="flex-end">
          <Link variant="cta" href="/recovery">
            {t("forgot-password")}
          </Link>
        </HStack>
      ) : null}
    </>
  );
}

export default FlowNodeInputDefault;
