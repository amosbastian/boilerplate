import { configuration } from "@boilerplate/shared/configuration";
// @ory/integrations offers a package for integrating with NextJS.
import { config, createApiHandler } from "@ory/integrations/next-edge";

// We need to export the config.
export { config };

// And create the Ory Cloud API "bridge".
export default createApiHandler({
  fallbackToPlayground: true,
  forceCookieDomain:
    process.env.NODE_ENV === "production" ? configuration.BASE_URL_SITE.replace("https://www.", "") : undefined,
});
