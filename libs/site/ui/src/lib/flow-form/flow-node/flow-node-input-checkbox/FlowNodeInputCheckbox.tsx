import { useOryTranslation } from "@boilerplate/site/utility";
import type { FormControlProps } from "@chakra-ui/react";
import { Checkbox, FormControl, FormHelperText, FormLabel } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { FlowNodeInputProps } from "../flow-node-input";

export function FlowNodeInputCheckbox({
  node,
  attributes,
  setValue,
  disabled,
  ...rest
}: FlowNodeInputProps & FormControlProps) {
  const { oryT } = useOryTranslation();

  return (
    <FormControl
      isDisabled={attributes.disabled || disabled}
      isInvalid={node.messages.find(({ type }) => type === "error") ? true : false}
      {...rest}
    >
      {node.meta.label?.id ? <FormLabel>{oryT(node.meta.label.id, node.meta.label?.context)}</FormLabel> : null}
      <Checkbox
        name={attributes.name}
        defaultChecked={attributes.value === true}
        onChange={(event) => setValue(event.target.checked)}
        disabled={attributes.disabled || disabled}
      />
      <FormHelperText>{node.messages.map(({ id, context }) => oryT(id, context)).join("\n")}</FormHelperText>
    </FormControl>
  );
}

export default FlowNodeInputCheckbox;
