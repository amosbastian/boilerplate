import { gql } from "@boilerplate/generated/graphql";
import { CardLoading } from "@boilerplate/shared/ui";
import { useGraphqlMutation, useGraphqlQuery } from "@boilerplate/shared/utility/graphql";
import { ProfileSettingsForm, ProfileSettingsFormData } from "@boilerplate/site/ui";
import { useToast } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";

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

const UpdateUserProfileMutation = gql(/* GraphQL */ `
  mutation UpdateUserProfile($data: UserUpdateInput!) {
    updateUser(data: $data) {
      id
      name
    }
  }
`);

export function ProfileSettings() {
  const toast = useToast();
  const { t } = useTranslation("settings");
  const { data, isLoading, error } = useGraphqlQuery(ProfileSettingsQuery);

  const { mutateAsync } = useGraphqlMutation(UpdateUserProfileMutation, {
    onSuccess: () => {
      toast({
        title: t("update-success"),
        status: "success",
        id: "profile-update-success",
      });
    },
    onError: () => {
      toast({
        title: t("update-error"),
        status: "error",
        id: "profile-update-error",
      });
    },
  });

  const onSubmit = async (data: ProfileSettingsFormData) => {
    await mutateAsync({
      data: { name: data.name ?? "" },
    });
  };

  if (isLoading || !data?.me) {
    return <CardLoading />;
  }

  if (error) {
    return null;
  }

  return <ProfileSettingsForm onSubmit={onSubmit} user={data.me} />;
}

export default ProfileSettings;
