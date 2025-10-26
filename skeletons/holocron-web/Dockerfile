FROM node:21-alpine AS base


FROM base AS deps
ARG NODE_AUTH_TOKEN
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
# to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
COPY .npmrc .npmrc
RUN --mount=type=secret,id=GITHUB_TOKEN \
NODE_AUTH_TOKEN="${NODE_AUTH_TOKEN:-$(cat /run/secrets/GITHUB_TOKEN)}" \
npm ci


FROM base AS builder
ARG ENVIRONMENT
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# COPY .env.${ENVIRONMENT} .env.production
# Disable Next.js telemetry data collection.
# Learn more here: https://nextjs.org/telemetry
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build


FROM base AS runner
ARG ENVIRONMENT
WORKDIR /app
ENV NODE_ENV ${ENVIRONMENT}
# Disable Next.js telemetry data collection.
# @see https://nextjs.org/telemetry
ENV NEXT_TELEMETRY_DISABLED 1
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
# Automatically leverage output traces to reduce image size
# @see https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
