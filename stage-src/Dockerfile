# ---------- dev ----------
FROM node:18-alpine AS dev
ARG APP_UID=9999
ARG APP_GID=9999
RUN addgroup -g $APP_GID app && adduser -D -u $APP_UID -G app app

WORKDIR /usr/src
COPY package.json package-lock.json* ./
RUN --mount=type=cache,target=/root/.npm npm ci --legacy-peer-deps

ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1
USER app
CMD ["npm","run","dev"]
