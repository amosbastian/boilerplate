import { gql } from "@boilerplate/generated/graphql";
import { CardLoading } from "@boilerplate/shared/ui";
import { useGraphqlQuery } from "@boilerplate/shared/utility/graphql";
import { PlanSettingsForm } from "@boilerplate/site/ui";

const PlanSettingsQuery = gql(/* GraphQL */ `
  query PlanSettings {
    me {
      name
      email
      image
      ...PlanSettingsFormUserFragment
    }
    products {
      id
      ...PlanSettingsFormProductFragment
    }
  }
`);

export function PlanSettings() {
  const { data, isLoading, error } = useGraphqlQuery(PlanSettingsQuery);

  if (isLoading || !data?.me) {
    return <CardLoading />;
  }

  if (error) {
    return null;
  }

  return <PlanSettingsForm user={data.me} products={data.products} />;
}

export default PlanSettings;
