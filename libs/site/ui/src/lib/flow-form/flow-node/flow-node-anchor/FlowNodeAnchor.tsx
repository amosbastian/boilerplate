import { Button } from "@chakra-ui/react";
import { UiNode, UiNodeAnchorAttributes } from "@ory/kratos-client";

interface FlowNodeAnchorProps {
  node: UiNode;
  attributes: UiNodeAnchorAttributes;
}

export function FlowNodeAnchor({ attributes }: FlowNodeAnchorProps) {
  return (
    <Button
      data-testid={`node/anchor/${attributes.id}`}
      onClick={(event) => {
        event.stopPropagation();
        event.preventDefault();
        window.location.href = attributes.href;
      }}
    >
      {attributes.title.text}
    </Button>
  );
}

export default FlowNodeAnchor;
