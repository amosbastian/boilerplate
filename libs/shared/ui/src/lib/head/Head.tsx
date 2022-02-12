import { configuration } from "@boilerplate/shared/configuration";
import type { NextSeoProps } from "next-seo";
import { DefaultSeo } from "next-seo";
import NextHead from "next/head";
import { appleDeviceSpecsForLaunchImages } from "pwa-asset-generator";

const SEO: NextSeoProps = {
  title: `${configuration.BRAND_NAME}`,
  titleTemplate: `%s - ${configuration.BRAND_NAME}`,
  description: `${configuration.BRAND_NAME} - ${configuration.BASE_URL_SITE}`,
  openGraph: {
    title: `${configuration.BRAND_NAME}`,
    description: `${configuration.BRAND_NAME} - ${configuration.BASE_URL_SITE}`,
    type: "website",
    locale: "en",
    url: `${configuration.BASE_URL_SITE}`,
    site_name: `${configuration.BRAND_NAME}`,
    images: [
      {
        url: "/images/card.png",
        width: 800,
        height: 600,
        alt: `${configuration.BRAND_NAME}`,
      },
    ],
  },
  twitter: {
    handle: `${configuration.TWITTER_USERNAME}`,
    site: `${configuration.TWITTER_USERNAME}`,
    cardType: "summary_large_image",
  },
  additionalLinkTags: [{ rel: "icon", href: "/images/favicon-196.png" }],
};

export function Head() {
  return (
    <>
      <DefaultSeo {...SEO} />
      <NextHead>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />

        <link rel="manifest" href="/manifest.json" />
        {appleDeviceSpecsForLaunchImages.map((specification) => {
          return (
            <>
              <link
                key={`apple-splash-${specification.portrait.width}-${specification.portrait.height}`}
                rel="apple-touch-startup-image"
                href={`/images/apple-splash-${specification.portrait.width}-${specification.portrait.height}.png`}
                media={`(device-width: ${
                  specification.portrait.width / specification.scaleFactor
                }px) and (device-height: ${
                  specification.portrait.height / specification.scaleFactor
                }px) and (-webkit-device-pixel-ratio: ${specification.scaleFactor}) and (orientation: portrait)`}
              />
              <link
                key={`apple-splash-${specification.portrait.width}-${specification.portrait.height}`}
                rel="apple-touch-startup-image"
                href={`/images/apple-splash-${specification.portrait.width}-${specification.portrait.height}.png`}
                media={`(device-width: ${
                  specification.portrait.height / specification.scaleFactor
                }px) and (device-height: ${
                  specification.portrait.width / specification.scaleFactor
                }px) and (-webkit-device-pixel-ratio: ${specification.scaleFactor}) and (orientation: landscape)`}
              />
            </>
          );
        })}
      </NextHead>
    </>
  );
}

export default Head;
