export const configuration = {
  BRAND_NAME: "Boilerplate",
  TWITTER_USERNAME: "@boilerplate",
  TWITTER_URL: "https://twitter.com/amosbastian",
  INSTAGRAM_URL: "https://www.instagram.com/amosbastian",
  LINKED_IN_URL: "https://linkedin.com/in/amosbastian",
  GITHUB_URL: "https://github.com/amosbastian/boilerplate",
  BASE_URL_SITE:
    process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_BASE_URL_SITE : "http://localhost:3000",
  BASE_URL_BLOG:
    process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_BASE_URL_BLOG : "http://localhost:4200",
  BASE_URL_API: process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_BASE_URL_API : "http://localhost:3333",
};
