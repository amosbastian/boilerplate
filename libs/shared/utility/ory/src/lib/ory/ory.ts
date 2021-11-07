import { edgeConfig } from "@ory/integrations/next";
import { Configuration, V0alpha2Api } from "@ory/kratos-client";

export const ory = new V0alpha2Api(new Configuration(edgeConfig));
