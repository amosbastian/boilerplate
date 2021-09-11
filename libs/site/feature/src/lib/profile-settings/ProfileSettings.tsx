import { gql } from "@boilerplate/generated/graphql";
import { CardLoading } from "@boilerplate/shared/ui";
import { useGraphqlQuery } from "@boilerplate/shared/utility/graphql";
import { ProfileSettingsForm } from "@boilerplate/site/ui";

const ProfileSettingsQuery = gql(/* GraphQL */ `
  query ProfileSettings {
    me {
      name
      email
      image
      ...ProfileSettingsFormUserFragment
    }
  }
`);

const UpdateProfileSettingsMutation = gql(/* GraphQL */ `
  mutation UpdateProfileSettings($updateUserData: UserUpdateInput!) {
    updateUser(data: $updateUserData) {
      id
      name
      email
      image
    }
  }
`);

export function ProfileSettings() {
  const { data, isLoading, error } = useGraphqlQuery(ProfileSettingsQuery);

  if (isLoading || !data?.me) {
    return <CardLoading />;
  }

  if (error) {
    return null;
  }

  return <ProfileSettingsForm user={data.me} />;
}

export default ProfileSettings;
