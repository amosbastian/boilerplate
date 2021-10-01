import { gql } from "@boilerplate/generated/graphql";
import { useGraphqlQuery } from "@boilerplate/shared/utility/graphql";
import { Box, Text } from "@chakra-ui/react";

const UserWelcomeQuery = gql(/* GraphQL */ `
  query UserWelcome {
    me {
      name
      email
    }
  }
`);

/* eslint-disable-next-line */
export interface UserWelcomeProps {}

export function UserWelcome(props: UserWelcomeProps) {
  const { data, isLoading, error } = useGraphqlQuery(UserWelcomeQuery);

  if (isLoading || !data?.me) {
    return (
      <Box>
        <Text>Welcome, ...</Text>
      </Box>
    );
  }

  if (error) {
    return null;
  }

  return (
    <Box>
      <Text>Welcome, {data.me.name ?? data.me.email}</Text>
    </Box>
  );
}

export default UserWelcome;
