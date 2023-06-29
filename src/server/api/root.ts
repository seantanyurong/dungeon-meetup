import { playgroupRouter } from "~/server/api/routers/playgroup";
import { formatRouter } from "~/server/api/routers/format";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  playgroup: playgroupRouter,
  format: formatRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
