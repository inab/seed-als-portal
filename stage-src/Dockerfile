FROM node:18-alpine AS deps
ARG APP_UID=9999
ARG APP_GID=9999
RUN addgroup -g $APP_GID app && adduser -D -u $APP_UID -G app app

WORKDIR /usr/src
COPY package.json package-lock.json* ./
RUN --mount=type=cache,target=/root/.npm npm ci --legacy-peer-deps

FROM node:18-alpine AS builder
ARG ASSET_PREFIX
ENV ASSET_PREFIX=$ASSET_PREFIX
ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /usr/src
COPY --from=deps /usr/src/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
ARG APP_UID=9999
ARG APP_GID=9999
RUN addgroup -g $APP_GID app && adduser -D -u $APP_UID -G app app

WORKDIR /usr/src
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ARG ASSET_PREFIX
ENV ASSET_PREFIX=$ASSET_PREFIX

COPY --from=builder /usr/src/.next ./.next
COPY --from=builder /usr/src/public ./public
COPY --from=builder /usr/src/package.json ./package.json
COPY --from=deps    /usr/src/node_modules ./node_modules

VOLUME [ "/usr/src/public/static/dms_user_assets" ]

USER app
EXPOSE 3000
CMD ["npm","run","start"]
