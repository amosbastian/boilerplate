# Boilerplate

Monorepo boilerplate that comes with all the basic SaaS features that you need to get up and running.
Stop wasting time setting up the same things over and over and start building!

## Demo

- N/A

## Features

- 🔐 Authentication using [Ory Kratos]()
- 💰 Subscriptions with Stripe (syncing with webhooks)
- 😻 Pretty UI using [Chakra UI]()
- 👉 Typesafe ORM with [Prisma]()
- 🚀 GraphQL API using [TypeGraphQL]() & [Apollo]()
- ⚛️ Fetching, caching and updating asynchronous data with [React Query]()
- 📝 Blog using MDX
- 🌐 Internationalisation (i18n)
- 📈 SEO with [NextSeo]()
- 🪵 Logging with [Winston]()
- 💿 CI / CD using GitHub Actions
- 🖥 E2E tests with [Cypress]() & [React Testing Library]()
- 🐛 Unit & integration tests with [Jest]()
- 📕 UI component explorer with [Storybook]()
- ⛔️ Error tracking with [Sentry]()

## Running it locally

Set the environment variables shown in `env.example` in `.env`

```

```

You must then run the migrations to set up the database

```

```

Finally, you can either run everything locally like so

```
nx serve api
nx serve site
nx serve blog
```

or use Docker Compose to run everything in containers

```
docker-compose up -d
```

## Testing

While not everything is covered by tests, I have done my best to include tests for the most important parts
of the boilerplate. To run tests for a particular app or library you can use the following command

```
# nx test <name>, e.g.
nx test api
```

To run E2E tests you can use the following command

```
# nx e2e <name>, e.g.
nx e2e site
```

## Storybook

To run the shared Storybook you can use the following command

```
nx serve shared-storybook:storybook
```

## Deployment

N/A

### Site & blog

N/A

### API

N/A
