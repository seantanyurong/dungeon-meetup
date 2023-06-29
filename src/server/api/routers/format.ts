import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const formatRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.format.findMany();
  }),
});
