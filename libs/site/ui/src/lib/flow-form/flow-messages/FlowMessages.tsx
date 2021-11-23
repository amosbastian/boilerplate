import { useOryTranslation } from "@boilerplate/site/utility";
import type { StackProps } from "@chakra-ui/react";
import { Alert, AlertDescription, AlertIcon, VStack } from "@chakra-ui/react";
import { UiText } from "@ory/kratos-client";

interface FlowMessagesProps extends StackProps {
  messages?: UiText[];
}

export function FlowMessages({ messages, ...rest }: FlowMessagesProps) {
  const { oryT } = useOryTranslation();

  if (!messages) {
    return null;
  }

  return (
    <VStack space={4} {...rest}>
      {messages.map((message) => (
        <Alert key={message.id} status={message.type === "error" ? "error" : "info"}>
          <AlertIcon />
          <AlertDescription data-testid={`ory-${message.id}`}>{oryT(message.id, message.context)}</AlertDescription>
        </Alert>
      ))}
    </VStack>
  );
}

export default FlowMessages;
