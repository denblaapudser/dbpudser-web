# syntax=docker/dockerfile:1

# --- Build stage ---
FROM node:22-alpine AS build
WORKDIR /app

# Install dependencies (cached unless the lockfile changes)
COPY package.json package-lock.json ./
RUN npm ci

# Build the Nitro Node server (pages are prerendered, /api/* stays dynamic)
COPY . .
RUN npm run build

# --- Runtime stage ---
FROM node:22-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# The .output bundle is self-contained — no node_modules needed at runtime
COPY --from=build /app/.output ./.output

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
