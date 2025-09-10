FROM node:18-alpine AS dev
WORKDIR /usr/src

COPY package.json package-lock.json* ./
RUN --mount=type=cache,target=/root/.npm npm ci --legacy-peer-deps

RUN chown -R node:node /usr/src
USER node

ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1

EXPOSE 3000
CMD ["npm","run","dev"]