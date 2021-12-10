import { configuration } from "@boilerplate/shared/configuration";
import { edgeConfig } from "@ory/integrations/next";
import { Configuration, V0alpha2Api } from "@ory/kratos-client";

export const oryBrowserClient = new V0alpha2Api(
  new Configuration({ ...edgeConfig, basePath: `${configuration.BASE_URL_SITE}/api/.ory` }),
);
