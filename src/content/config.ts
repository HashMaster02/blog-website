import { defineCollection, z } from "astro:content";

const blogs_schema = {
  blogs: defineCollection({
    schema: z.object({
      title: z.string(),
      album: z.string(),
      albumslug: z.string(),
      date: z.string(),
      runtime: z.string(),
      track: z.number(),
    }),
  }),
};

const singles_schema = {
  blogs: defineCollection({
    schema: z.object({
      title: z.string(),
      date: z.string(),
      features: z.boolean(),
      runtime: z.string(),
    }),
  }),
};

export const collections = {
  blog: blogs_schema,
  singles: singles_schema,
};
