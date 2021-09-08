import { gql } from "@boilerplate/generated/graphql";
import { useGraphqlQuery } from "@boilerplate/shared/utility/graphql";
import { ProfileSettingsForm } from "@boilerplate/site/ui";

const ProfileSettingsQuery = gql(/* GraphQL */ `
  query ProfileSettings {
    me {
      name
      email
      image
    }
  }
`);

export function ProfileSettings() {
  const { data } = useGraphqlQuery(ProfileSettingsQuery);

  console.log(data);

  return <ProfileSettingsForm />;
}

export default ProfileSettings;
