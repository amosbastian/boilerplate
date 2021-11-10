import { Button } from "@chakra-ui/react";
import { getNodeLabel } from "@ory/integrations/ui";
import { FlowNodeInputProps } from "../flow-node-input";

export function FlowNodeInputSubmit({ node, attributes, setValue, disabled, dispatchSubmit }: FlowNodeInputProps) {
  return (
    <Button
      w="100%"
      name={attributes.name}
      onClick={(event) => {
        // On click, we set this value, and once set, dispatch the submission!
        setValue(attributes.value).then(() => dispatchSubmit(event));
      }}
      value={attributes.value || ""}
      disabled={attributes.disabled || disabled}
      isLoading={attributes.disabled || disabled}
    >
      {getNodeLabel(node)}
    </Button>
  );
}

export default FlowNodeInputSubmit;
