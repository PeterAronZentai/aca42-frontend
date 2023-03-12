FROM node as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV NODE_ENV production
RUN npm run build


FROM node:bullseye-slim as production
ENV NODE_ENV production
WORKDIR /app
COPY --from=build /app/.next/standalone ./.next/standalone
COPY --from=build /app/.next/static     ./.next/standalone/.next/static
COPY --from=build /app/public           ./.next/standalone/public
EXPOSE 3000
USER node
CMD ["node", ".next/standalone/server.js"]