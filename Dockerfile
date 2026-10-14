# syntax=docker/dockerfile:1

FROM node:22-alpine AS base

# ---- deps: instala dependencias con el lockfile de yarn ----
FROM base AS deps
WORKDIR /app
COPY package.json yarn.lock .yarnrc.yml ./
RUN yarn install --immutable

# ---- builder: compila la app en modo standalone ----
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Variables NEXT_PUBLIC_* se inyectan en el bundle durante el build, no en
# runtime — hay que pasarlas como --build-arg (ver docker-compose.yml).
ARG NEXT_PUBLIC_API_BASE
ARG NEXT_PUBLIC_RECAPTCHA_SITE_KEY
ENV NEXT_PUBLIC_API_BASE=$NEXT_PUBLIC_API_BASE
ENV NEXT_PUBLIC_RECAPTCHA_SITE_KEY=$NEXT_PUBLIC_RECAPTCHA_SITE_KEY

ENV NEXT_TELEMETRY_DISABLED=1
RUN yarn build

# ---- runner: imagen final, solo lo necesario para `node server.js` ----
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3002
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# El output "standalone" no copia public/ ni .next/static por diseño
# (pensado para servirse desde un CDN) — se copian a mano.
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3002

CMD ["node", "server.js"]
