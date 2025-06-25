# 1. Base Image
FROM node:20-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat

# 2. Install Dependencies
COPY package*.json ./
RUN npm ci

# 3. Build the application
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# 4. Final Production Image
FROM node:20-alpine AS runner
WORKDIR /app

# Create app user
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

# Copy necessary files from build
COPY --from=base /app/public ./public
COPY --from=base /app/.next/standalone ./
COPY --from=base /app/.next/static ./.next/static

# Set correct permissions
RUN chown -R nextjs:nextjs /app
USER nextjs

EXPOSE 3000
ENV PORT=3000
CMD [ "node","server.js" ]
