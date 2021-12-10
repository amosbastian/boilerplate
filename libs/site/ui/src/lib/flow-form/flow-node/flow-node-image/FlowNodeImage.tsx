import { Image } from "@chakra-ui/react";
import { UiNode, UiNodeImageAttributes } from "@ory/kratos-client";

export interface FlowNodeImageProps {
  node: UiNode;
  attributes: UiNodeImageAttributes;
}

export function FlowNodeImage({ node, attributes }: FlowNodeImageProps) {
  return (
    <Image
      mx={6}
      data-testid={`node/image/${attributes.id}`}
      w={`${attributes.width}px`}
      h={`${attributes.height}px`}
      src={attributes.src}
      alt={node.meta.label?.text}
    />
  );
}
