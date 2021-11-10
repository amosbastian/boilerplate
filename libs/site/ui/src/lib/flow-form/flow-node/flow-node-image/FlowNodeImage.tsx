import { Image } from "@boilerplate/shared/ui";
import { UiNode, UiNodeImageAttributes } from "@ory/kratos-client";

export interface FlowNodeImageProps {
  node: UiNode;
  attributes: UiNodeImageAttributes;
}

export function FlowNodeImage({ node, attributes }: FlowNodeImageProps) {
  return <Image data-testid={`node/image/${attributes.id}`} src={attributes.src} alt={node.meta.label?.text} />;
}
