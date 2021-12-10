import { useOryTranslation } from "@boilerplate/site/utility";
import { Box, FormControl, FormLabel } from "@chakra-ui/react";
import { UiNode, UiNodeTextAttributes, UiText } from "@ory/kratos-client";

export interface FlowNodeTextProps {
  node: UiNode;
  attributes: UiNodeTextAttributes;
}

const Content = ({ node, attributes }: FlowNodeTextProps) => {
  // This text node contains lookup secrets. Let's make them a bit more beautiful!
  const secrets = ((attributes.text.context as any).secrets ?? []).map((text: UiText, k: number) => (
    <div key={k} data-testid={`node/text/${attributes.id}/lookup_secret`}>
      <code>{text.id === 1050014 ? "Used" : text.text}</code>
    </div>
  ));

  switch (attributes.text.id) {
    case 1050015:
      return (
        <div data-testid={`node/text/${attributes.id}/text`}>
          <Box overflowX="auto">{secrets}</Box>
        </div>
      );
  }

  return (
    <div data-testid={`node/text/${attributes.id}/text`}>
      <Box overflowX="auto">{attributes.text.text}</Box>
    </div>
  );
};

export function FlowNodeText({ node, attributes }: FlowNodeTextProps) {
  const { oryT } = useOryTranslation();

  return (
    <FormControl mx={6}>
      {node.meta?.label?.id ? (
        <FormLabel textTransform="capitalize" data-testid={`node/text/${attributes.id}/label`}>
          {oryT(node.meta.label.id, node.meta.label.context)}
        </FormLabel>
      ) : null}
      <Content node={node} attributes={attributes} />
    </FormControl>
  );
}

export default FlowNodeText;
