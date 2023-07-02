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
      return ctx.prisma.playgroup.findUnique({ where: { id: input.id } });
    }),
  createPlaygroup: publicProcedure
    .input(
      z.object({
        currentSize: z.number(),
        maxSize: z.number(),
        formats: z.object({}),
        description: z.string(),
        title: z.string(),
        city: z.string(),
        lgs: z.boolean(),
        physical: z.boolean(),
        sticky: z.boolean(),
        image: z.string(),
      })
    )
    .mutation((opts) =>
      opts.ctx.prisma.playgroup.create({
        data: {
          currentSize: opts.input.currentSize,
          maxSize: opts.input.maxSize,
          formats: opts.input.formats,
          description: opts.input.description,
          title: opts.input.title,
          city: opts.input.city,
          lgs: opts.input.lgs,
          physical: opts.input.physical,
          sticky: opts.input.sticky,
          image: opts.input.image,
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
