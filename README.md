# Boilerplate

Monorepo boilerplate that comes with all the basic SaaS features that you need to get up and running.

- A Next.js app where users can log in, handle their Stripe subscription and update their email, password etc.
- A statically generated blog with articles written with MDX
- A GraphQL API built with TypeGraphQL, Prisma and Apollo server. Includes webhooks to handle changes to a user's subscription!

Stop wasting time setting up the same things over and over and start building!

## Features

- 🔐 Authentication using [Ory Kratos](https://github.com/ory/kratos)
- 💰 Subscriptions with [Stripe](https://stripe.com/)
- 😻 Pretty UI with light / dark mode using [Chakra UI](https://github.com/chakra-ui/chakra-ui)
- 👉 Typesafe ORM with [Prisma](https://github.com/prisma/prisma)
- 🚀 GraphQL API using [TypeGraphQL](https://github.com/MichalLytek/type-graphql) & [Apollo](https://github.com/apollographql/apollo-server)
- ⚛️ Fetching, caching and updating asynchronous data with [React Query](https://github.com/tannerlinsley/react-query)
- 📝 Blog using [MDX](https://github.com/hashicorp/next-mdx-remote)
- 🌐 Internationalisation (i18n) using [next-translate](https://github.com/vinissimus/next-translate)
- 📈 SEO with [Next SEO](https://github.com/garmeeh/next-seo)
- 💿 CI / CD using GitHub Actions
- 🖥 E2E tests with [Cypress](https://github.com/cypress-io/cypress) & [React Testing Library](https://github.com/testing-library/react-testing-library)
- 🐛 Unit & integration tests with [Jest](https://github.com/facebook/jest)
- 📕 UI component explorer with [Storybook](https://github.com/storybookjs/storybook)
- ⛔️ Error tracking with [Sentry](https://github.com/getsentry/sentry)
- 😋 [Logging](https://github.com/winstonjs/winston), [GraphQL codegen](https://github.com/dotansimha/graphql-code-generator), git hooks for linting, Prettier, ESLint etc.

## Table of contents

- [Features](#features)
- [Demo](#demo)
- [Structure](#structure)
- [Running it locally](#running-it-locally)
  - [API](#api)
    - [Seeding the database](#seeding-the-database)
  - [Site](#site)
  - [Blog](#blog)
  - [Kratos](#kratos)
- [Testing](#testing)
- [Deployment](#deployment)
  - [API](#api-1)
    - [Heroku](#heroku)
    - [Other](#other)
  - [Kratos](#kratos-1)
  - [Site & Blog](#site---blog)
    - [Vercel](#vercel)
    - [Other](#other-1)
- [Miscellaneous](#miscellaneous)
  - [Chakra UI](#chakra-ui)
  - [Storybook](#storybook)
  - [Codegen](#codegen)
  - [Internationalisation](#internationalisation)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Inspiration](#inspiration)

## Demo

- https://boilerplate-site.vercel.app/

Unfortunately the redirects to the blog app aren't working correctly when deployed (not sure why). Also, since I am hosting the API on a free Heroku dyno I can't put the site app and API on the same domain, which means Ory cookies aren't being received, so authenticatted endpoints don't work (I think).

## Structure

Nx is used to scaffold this monorepo, so all apps can be found under `/apps` (`api`, `blog`, `site`) and all libs under `/libs`. I sort of tried to follow [Nrwl's recommendations](https://nx.dev/l/a/structure/library-types) for categorising libraries, so read that to get a better understanding. In general, most libraries are split by app, e.g. GraphQL resolvers can be found in the `/api/data-access` library, the site's UI components in `/site/ui` and so on. Shared libraries can be found under `/shared` and single-purpose libraries (e.g `markdown`) have their own folder.

## Running it locally

There are four apps you need to set up to get everything up and running: the api, site, blog and Ory Kratos. Each section below will detail how to set up each of them separately, but first run

```
npm i
```

Apart from environment variables, which will be detailed in each section below, there is also a configuration file found in `shared-configuration.ts` which should be filled in as you see fit.

### API

The API is built with Apollo Server, TypeGraphQL and Prisma. To get it up an running you need to set the following
environment variable in your `.env` file:

```
# e.g. mysql://admin:password@localhost:3306/boilerplate
DATABASE_URL=""

# https://dashboard.stripe.com/apikeys
STRIPE_SECRET_KEY=""
STRIPE_WEBHOOK_SECRET_LIVE=""

# https://docs.sentry.io/platforms/node/
SENTRY_AUTH_TOKEN=""
SENTRY_ORG=""
SENTRY_PROJECT=""

# You can also use Ory Cloud URL here
ORY_SDK_URL="http://127.0.0.1:4433"

```

Of course you will need to replace this with your own tokens, so e.g. the URL of a MySQL database you have running locally. If you want, I have also set it up so you can use it with a PlanetScale database, as described [here](https://docs.planetscale.com/tutorials/automatic-prisma-migrations), so you can do that instead.

Once set up, you will need to run the migrations and start the server

```
prisma migrate deploy
nx serve api
```

It is possible you may need to run `prisma generate` to emit TypeGraphQL types and CRUD resolvers from the Prisma schema.

#### Seeding the database

You can seed the database with

```
prisma db seed
```

It uses the `seed.ts` file found in the `apps/api/src/prisma` folder and assumes you have some products and prices (shown on the pricing page) set up in Stripe. It also creates a user for the E2E tests, but this is explained in E2E testing section.

### Site

The site & blog apps are built with Next.js and try to use [Next.js' multi zones feature](https://nextjs.org/docs/advanced-features/multi-zones) so you can develop and deploy both apps independently. The following environment variables for the site app (`apps/site/.env`) are needed

```
# For when a user wants to update their subscription
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=""

# https://docs.sentry.io/platforms/javascript/guides/nextjs/
SENTRY_DSN=""
# These are already defined in the .env file in your root folder, but will be needed when deploying to Vercel for example
SENTRY_AUTH_TOKEN=""
SENTRY_ORG=""
SENTRY_PROJECT=""

# We need to redirect /blog to where the blog app is deployed
NEXT_PUBLIC_BASE_URL_BLOG="http://localhost:4200"

# API
NEXT_PUBLIC_BASE_URL_API=""

# Used in /api/.ory/[...paths], can also use Ory Cloud URL here
ORY_SDK_URL="http://127.0.0.1:4433"
```

You can then run the site with

```
nx serve site
```

Unfortunately the multi zones feature is not working 100% correctly because of a few issues (i18n is broken because of `basePath` and shared components), so it may be possible the blog app will have to be moved into the site app. I've raised the issue in multiple places ([[1](https://www.reddit.com/r/reactjs/comments/rchvsa/vercel_acquires_turborepo_a_highperformance_build/hnuybkd/?context=3), [2](https://github.com/vercel/next.js/discussions/28683), [3](https://stackoverflow.com/questions/68989193/next-js-multi-zones-with-i18n-and-shared-components)]) and [others have as well](https://github.com/vercel/next.js/issues/21565), but unfortunately have not received an answer yet. I hope the Vercel teamn will address it soon, or maybe someone out there will be able to

### Blog

The code for the blog is based on the ["Building a blog with Next.js and Nx"](https://blog.nrwl.io/create-a-next-js-web-app-with-nx-bcf2ab54613) series by @juristr, so if you want to know more about how it works, then I recommend you check it out.

Simply put, all blog posts can be found in the `articles` folder and adding a `.mdx` file there will create a new blog post when building the blog app. This is done using [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote), which loads the blog posts from the `articles` folder through `getStaticProps` in `[slug].tsx`.

The only environment variable needed (in production) for the blog app is

```
NEXT_PUBLIC_BASE_URL_SITE=""
```

You can then run the blog with

```
nx serve blog
```

### Kratos

For authentication Ory Kratos is used, which handles login, registration, verification, account recovery etc. (and you can host it yourself)! To set it up you can either use [Ory Cloud](https://www.ory.sh/pricing) or run Ory Kratos locally by cloning their repository and using `docker-compose`

```
git clone https://github.com/ory/kratos.git
cd kratos
git checkout v0.8.0-alpha.3

docker-compose -f quickstart.yml -f quickstart-standalone.yml up --build --force-recreate
# If you have SELinux, run:
docker-compose -f quickstart.yml -f quickstart-selinux.yml -f quickstart-standalone.yml up --build --force-recreate
```

If you decide to run it locally then you will want to remove the `name` property from `contrib/quickstart/kratos/email-password/identity.schema.json` and update `contrib/quickstart/kratos/email-password/kratos.yml` to

```
version: v0.7.1-alpha.1

dsn: memory

serve:
  public:
    base_url: http://127.0.0.1:4433/
    cors:
      enabled: true
      allowed_origins:
        - http://localhost:3000
        - http://localhost:3000/
      allowed_methods:
        - POST
        - GET
        - PUT
        - PATCH
        - DELETE
      allowed_headers:
        - Authorization
        - Cookie
      exposed_headers:
        - Content-Type
        - Set-Cookie
  admin:
    base_url: http://kratos:4434/

selfservice:
  default_browser_return_url: http://localhost:3000/
  whitelisted_return_urls:
    - http://localhost:3000

  methods:
    password:
      enabled: true

  flows:
    error:
      ui_url: http://localhost:3000/error

    settings:
      ui_url: http://localhost:3000/settings
      privileged_session_max_age: 15m

    recovery:
      enabled: true
      ui_url: http://localhost:3000/recovery

    verification:
      enabled: true
      ui_url: http://localhost:3000/verification
      after:
        default_browser_return_url: http://localhost:3000/

    logout:
      after:
        default_browser_return_url: http://localhost:3000/login

    login:
      ui_url: http://localhost:3000/login
      lifespan: 10m

    registration:
      lifespan: 10m
      ui_url: http://localhost:3000/registration
      after:
        password:
          hooks:
            - hook: session

log:
  level: debug
  format: text
  leak_sensitive_values: true

secrets:
  cookie:
    - PLEASE-CHANGE-ME-I-AM-VERY-INSECURE
  cipher:
    - 32-LONG-SECRET-NOT-SECURE-AT-ALL

ciphers:
  algorithm: xchacha20-poly1305

hashers:
  argon2:
    parallelism: 1
    memory: 128MB
    iterations: 2
    salt_length: 16
    key_length: 16

identity:
  default_schema_url: file:///etc/config/kratos/identity.schema.json

courier:
  smtp:
    connection_uri: smtps://test:test@mailslurper:1025/?skip_ssl_verify=true
```

## Testing

While not everything is covered by tests, I have done my best to include tests for the most important parts of the boilerplate. To run tests for a particular app or library you can use the following command

```
# nx test <name>, e.g.
nx test api
```

To run E2E tests you first need to create a test user by logging in to the website and then update the `seed.ts` file found in the `apps/api/src/prisma` with the user's ID and email (I don't know a better way of doing this, sorry 🙈). Once you have done this, you can run the E2E tests with

```
# nx e2e <name>, e.g.
nx e2e site
```

## Deployment

CD has not been set up (yet), but each section below will describe what you can do to deploy each app.

### API

You can build a Docker image with the command

```
docker build -f ./apps/api/Dockerfile . -t api
```

#### Heroku

Deploying to Heroku is very simple, as seen [here](https://devcenter.heroku.com/articles/container-registry-and-runtime).

```
# Where <app> is your Heroku app
docker tag api registry.heroku.com/<app>/web
docker push registry.heroku.com/<app>/web

# Create a new release
heroku container:release web --app <app>
```

#### Other

I've not deployed the API anywhere else (e.g. AWS, DigitalOcean), but if I do I will update this section. As for the database: I am using PlanetScale.

### Kratos

I've not deployed Ory Kratos yet myself, so I'm not sure exactly how to do it. There is [a guide](https://www.ory.sh/kratos/docs/guides/production/) on how to take Kratos to production, but it is unfortunately still under development. In the meantime you can use Ory Cloud or try to figure out something yourself (and update this section after 🙏).

### Site & Blog

#### Vercel

For deploying to Vercel you can use Nx's [guide](https://nx.dev/l/r/guides/deploy-nextjs-to-vercel), which shows how straightforward it is. A script for ignoring the build step is found in `/tools/ignore-vercel-build-<app>`.

To automatically generate the sitemap make sure to include the `postbuild` target in the build script, like so:

```
npx nx build site --prod && npx nx postbuild site
```

You may also need to run `prisma generate` after running `npm install`.

#### Other

I'm currently looking into a way to deploy the blog [with Cloudflare](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site) and the site on [AWS Lambda@Edge via Serverless Components](https://github.com/serverless-nextjs/serverless-next.js) and will update the section once I have done so.

## Miscellaneous

### Chakra UI

Chakra UI is great and allows you to update your theme very easily. If you want to change the primary colour of the site and blog apps, then simply header over to `libs/shared/theme` and update the primary colour in `colors.ts`. If you want to further customise the theme, I recommend reading their [guide](https://chakra-ui.com/docs/theming/customize-theme).

### Storybook

To run the shared Storybook you can use the following command

```
nx serve shared-storybook:storybook
```

### Codegen

Instead of Apollo Client or urql, I wanted to use React Query since I had heard really good things about it. Inspired by [this discussion](https://github.com/tannerlinsley/react-query/discussions/1557) React Query can be used with codegen in the following way:

```tsx
export const ProductsQuery = gql(/* GraphQL */ `
  query Products {
    products {
      id
    }
  }
`);

...

const { data } = useGraphqlQuery(ProductsQuery);
```

For more information about how it works, see the amazing [gql-tag-operations-preset
](https://www.graphql-code-generator.com/plugins/gql-tag-operations-preset). This preset generates typings for your inline `gql` function usages, without having to manually specify import statements for the documents. All you need to do is import your `gql` function and run codegen in watch mode!

### Internationalisation

All i18n files can be found under `libs/site/i18n`, `libs/blog/i18n` and `libs/shared/i18n`. Both the site and blog use [next-translate](https://github.com/vinissimus/next-translate/), as seen in their respective `i18n.js` files. To sync the JSON files you can use the command `npm run i18n`.

## Roadmap

Of course this boilerplate is not perfect: things could have probably been implemented in a better way
and certain things are missing. I am going to try and keep everything up to date, improve existing features
and add more features. Some things that are on my mind:

- [ ] Add E2E tests for CI
- [ ] Fix `basePath`, `i18n` and other problems with Next.js multi zones feature (site, blog)
- [ ] Add more guides for deploying
- [ ] Add Github Action for CD
- [ ] Fix internationalisation for Ory Kratos
- [ ] Set up SMTP, mailing list etc.

## Contributing

I would like to make this boilerplate the best it can be, so if you have any suggestions, problems running apps, issues etc. then please don't hesitate to create an issue or even a pull request!

## Inspiration

I am terrible at design so I've taken a lot of inspiration from these places:

- https://linear.app/
- https://tailwindui.com/
- https://pro.chakra-ui.com/
- https://saaslandingpage.com/
