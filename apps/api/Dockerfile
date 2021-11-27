FROM node:lts-alpine
# Where is the app stored in the container
WORKDIR /app
# Set production environment
ENV NODE_ENV production
# The port that we want to run in the container
# Google Cloud Run and others override this
# So it might be better to remove it
ENV PORT=3333
# Expose the port so that we can reach the app
EXPOSE ${PORT}
# Copy the package.json only
COPY ./dist/apps/api/package.json ./
COPY ./apps/api/src/prisma ./prisma
# Install dependencies, but skip devDependencies
# By running npm install in it's own layer, it will be cached
# So next time if we only change something in the app and not in package.json, docker will only
# create a new layer with the few new kb that is the app, saving a lot of registry storage
RUN npm install --production
# When generating the package.json using generatePackageJson
# It does not copy dependencies that are not specified in imports
# This is why we need to add them here
RUN npm install tslib apollo-server-core dotenv typegraphql-prisma --production
RUN npx prisma generate
# Copy the built app into /app in the container
COPY ./dist/apps/api .
# Start the app
CMD ["node", "main.js"]