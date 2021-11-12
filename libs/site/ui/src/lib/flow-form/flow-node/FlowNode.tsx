import {
  isUiNodeAnchorAttributes,
  isUiNodeImageAttributes,
  isUiNodeInputAttributes,
  isUiNodeScriptAttributes,
  isUiNodeTextAttributes,
} from "@ory/integrations/ui";
import { FlowNodeAnchor } from "./flow-node-anchor/FlowNodeAnchor";
import { FlowNodeImage } from "./flow-node-image/FlowNodeImage";
import { FlowNodeInputProps } from "./flow-node-input";
import { FlowNodeInput } from "./flow-node-input/FlowNodeInput";
import { FlowNodeScript } from "./flow-node-script/FlowNodeScript";
import { FlowNodeText } from "./flow-node-text/FlowNodeText";

export const FlowNode = ({
  node,
  value,
  setValue,
  disabled,
  dispatchSubmit,
}: Omit<FlowNodeInputProps, "attributes">) => {
  if (isUiNodeImageAttributes(node.attributes)) {
    return <FlowNodeImage node={node} attributes={node.attributes} />;
  }

  if (isUiNodeScriptAttributes(node.attributes)) {
    return <FlowNodeScript node={node} attributes={node.attributes} />;
  }

  if (isUiNodeTextAttributes(node.attributes)) {
    return <FlowNodeText node={node} attributes={node.attributes} />;
  }

  if (isUiNodeAnchorAttributes(node.attributes)) {
    return <FlowNodeAnchor node={node} attributes={node.attributes} />;
  }

  if (isUiNodeInputAttributes(node.attributes)) {
    return (
      <FlowNodeInput
        dispatchSubmit={dispatchSubmit}
        value={value}
        setValue={setValue}
        node={node}
        disabled={disabled}
        attributes={node.attributes}
      />
    );
  }

  return null;
};
