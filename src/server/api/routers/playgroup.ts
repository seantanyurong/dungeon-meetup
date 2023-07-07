import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const playgroupRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.playgroup.findMany({ include: { formats: true } });
  }),
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.playgroup.findUnique({
        where: { id: input.id },
        include: { formats: true },
      });
    }),
  createPlaygroup: publicProcedure
    .input(
      z.object({
        currentSize: z.number(),
        maxSize: z.number(),
        formats: z.object({ id: z.string() }).array(),
        description: z.string(),
        name: z.string(),
        city: z.string(),
        lgs: z.boolean(),
        physical: z.string(),
        sticky: z.boolean(),
        cardId: z.string(),
      })
    )
    .mutation((opts) =>
      opts.ctx.prisma.playgroup.create({
        data: {
          currentSize: opts.input.currentSize,
          maxSize: opts.input.maxSize,
          description: opts.input.description,
          name: opts.input.name,
          city: opts.input.city,
          lgs: opts.input.lgs,
          physical: opts.input.physical,
          sticky: opts.input.sticky,
          cardId: opts.input.cardId,
          formats: {
            connect: opts.input.formats,
          },
        },
      })
    ),
});

// id        String   @id @default(cuid())
// createdAt DateTime @default(now())
// currentSize Int
// maxSize Int
// formats Format[]
// description String
// title String
// city String
// lgs Boolean
// physical Boolean
// sticky Boolean
// image String?
