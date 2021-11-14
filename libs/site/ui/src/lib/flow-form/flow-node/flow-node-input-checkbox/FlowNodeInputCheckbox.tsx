import type { FormControlProps } from "@chakra-ui/react";
import { Checkbox, FormControl, FormHelperText, FormLabel } from "@chakra-ui/react";
import { getNodeLabel } from "@ory/integrations/ui";
import { FlowNodeInputProps } from "../flow-node-input";

export function FlowNodeInputCheckbox({
  node,
  attributes,
  setValue,
  disabled,
  ...rest
}: FlowNodeInputProps & FormControlProps) {
  return (
    <FormControl
      isDisabled={attributes.disabled || disabled}
      isInvalid={node.messages.find(({ type }) => type === "error") ? true : false}
      {...rest}
    >
      <FormLabel>{getNodeLabel(node)}</FormLabel>
      <Checkbox
        name={attributes.name}
        defaultChecked={attributes.value === true}
        onChange={(event) => setValue(event.target.checked)}
        disabled={attributes.disabled || disabled}
      />
      <FormHelperText>{node.messages.map(({ text }) => text).join("\n")}</FormHelperText>
    </FormControl>
  );
}

export default FlowNodeInputCheckbox;
