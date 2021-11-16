import { useOryTranslation } from "@boilerplate/site/utility";
import type { ButtonProps } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { getNodeLabel } from "@ory/integrations/ui";
import { FlowNodeInputProps } from "../flow-node-input";

export function FlowNodeInputButton({
  node,
  attributes,
  setValue,
  disabled,
  dispatchSubmit,
  ...rest
}: FlowNodeInputProps & ButtonProps) {
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

  return (
    <Button
      name={attributes.name}
      onClick={(event) => {
        onClick();
        setValue(attributes.value).then(() => dispatchSubmit(event));
      }}
      isDisabled={attributes.disabled || disabled}
      {...rest}
      value={attributes.value || ""}
    >
      {node.meta.label?.id ? oryT(node.meta.label.id, node.meta.label.context) : getNodeLabel(node)}
    </Button>
  );
}

export default FlowNodeInputButton;
