import { Link } from "@boilerplate/shared/ui";
import { FormControl, FormHelperText, FormLabel, HStack, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FlowNodeInputProps } from "../flow-node-input";

export function FlowNodeInputDefault({ node, attributes, value = "", setValue, disabled }: FlowNodeInputProps) {
  const router = useRouter();
  const { refresh, aal } = router.query;

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

  // Render a generic text input field.
  return (
    <>
      <FormControl isInvalid={node.messages.find(({ type }) => type === "error") ? true : false}>
        <FormLabel textTransform="capitalize">{node.meta.label?.text ?? attributes.type}</FormLabel>
        <Input
          onClick={onClick}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          type={attributes.type}
          name={attributes.name}
          value={value}
          isDisabled={attributes.disabled || disabled}
        />
        {node.messages.length > 0 ? (
          <FormHelperText>
            {node.messages.map(({ text, id }, k) => (
              <span key={`${id}-${k}`} data-testid={`ui/message/${id}`}>
                {text}
              </span>
            ))}
          </FormHelperText>
        ) : null}
      </FormControl>
      {attributes.type === "password" && router.pathname === "/login" && !(aal || refresh) ? (
        <HStack justifyContent="flex-end">
          <Link variant="cta" href="/recovery">
            Forgot your password?
          </Link>
        </HStack>
      ) : null}
    </>
  );
}

export default FlowNodeInputDefault;
