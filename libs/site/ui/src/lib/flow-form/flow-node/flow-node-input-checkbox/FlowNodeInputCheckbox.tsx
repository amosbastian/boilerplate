import { Checkbox, FormControl, FormLabel } from "@chakra-ui/react";
import { getNodeLabel } from "@ory/integrations/ui";
import { FlowNodeInputProps } from "../flow-node-input";

export function FlowNodeInputCheckbox({ node, attributes, setValue, disabled }: FlowNodeInputProps) {
  return (
    <FormControl mb={4}>
      <FormLabel>{getNodeLabel(node)}</FormLabel>
      <Checkbox
        name={attributes.name}
        defaultChecked={attributes.value === true}
        onChange={(e) => setValue(e.target.checked)}
        disabled={attributes.disabled || disabled}
        state={node.messages.find(({ type }) => type === "error") ? "error" : undefined}
        subtitle={node.messages.map(({ text }) => text).join("\n")}
      />
    </FormControl>
  );
}

export default FlowNodeInputCheckbox;
