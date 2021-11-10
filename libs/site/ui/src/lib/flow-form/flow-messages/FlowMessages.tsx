import { Alert, AlertDescription, AlertIcon, VStack } from "@chakra-ui/react";
import { UiText } from "@ory/kratos-client";

interface FlowMessagesProps {
  messages?: UiText[];
}

export function FlowMessages({ messages }: FlowMessagesProps) {
  if (!messages) {
    return null;
  }

  return (
    <VStack space={4}>
      {messages.map((message) => (
        <Alert key={message.id} status={message.type === "error" ? "error" : "info"}>
          <AlertIcon />
          <AlertDescription data-testid={`ui/message/${message.id}`}>{message.text}</AlertDescription>
        </Alert>
      ))}
    </VStack>
  );
}

export default FlowMessages;
