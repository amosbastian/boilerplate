FROM node:lts-alpine
WORKDIR /app
COPY ./dist/apps/api/package.json ./
# Copy over Prisma schema
COPY ./apps/api/src/prisma ./prisma
# Remove output from Prisma schema since env variable does not work
# ENV TYPEGRAPHQL_PRISMA_OUTPUT="./node_modules/@generated/type-graphql"
RUN sed -i -e "s|output[[:space:]]*=[[:space:]]*\"../../../../node_modules/@generated/type-graphql\"||g" ./prisma/schema.prisma
# Install dependencies, but skip devDependencies
# By running npm install in its own layer, it will be cached
# So next time if we only change something in the app and not in package.json, docker will only
# create a new layer with the few new kb that is the app, saving a lot of registry storage
RUN npm install --production
# When generating the package.json using generatePackageJson
# It does not copy dependencies that are not specified in imports
# This is why we need to add them here
RUN npm install tslib apollo-server-core @sentry/node dotenv typegraphql-prisma --production
# Generate TypeGraphQL
RUN npx prisma generate
# The port that we want to use in the container
ENV PORT=3333
# Expose the port so that we can reach the app
EXPOSE ${PORT}
# Copy the built app into /app in the container
COPY ./dist/apps/api .
# Start the app
CMD ["node", "main.js"]
