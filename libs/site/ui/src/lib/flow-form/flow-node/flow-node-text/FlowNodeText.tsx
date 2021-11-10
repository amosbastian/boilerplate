import { Box, Text } from "@chakra-ui/react";
import { UiNode, UiNodeTextAttributes, UiText } from "@ory/kratos-client";

export interface FlowNodeTextProps {
  node: UiNode;
  attributes: UiNodeTextAttributes;
}

const Content = ({ node, attributes }: FlowNodeTextProps) => {
  // This text node contains lookup secrets. Let's make them a bit more beautiful!
  const secrets = (attributes.text.context as any).secrets.map((text: UiText, k: number) => (
    <div key={k} data-testid={`node/text/${attributes.id}/lookup_secret`}>
      <code>{text.id === 1050014 ? "Used" : text.text}</code>
    </div>
  ));

  switch (attributes.text.id) {
    case 1050015:
      return (
        <div data-testid={`node/text/${attributes.id}/text`}>
          <div>{secrets}</div>
        </div>
      );
  }

  return (
    <div data-testid={`node/text/${attributes.id}/text`}>
      <Box>{attributes.text.text}</Box>
    </div>
  );
};

export function FlowNodeText({ node, attributes }: FlowNodeTextProps) {
  return (
    <>
      <Text data-testid={`node/text/${attributes.id}/label`}>{node.meta?.label?.text}</Text>
      <Content node={node} attributes={attributes} />
    </>
  );
}

export default FlowNodeText;
