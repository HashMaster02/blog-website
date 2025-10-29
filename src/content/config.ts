import { defineCollection, z } from "astro:content";

const blogs_schema = {
  blogs: defineCollection({
    schema: z.object({
      title: z.string(),
      album: z.string(),
      albumslug: z.string(),
      runtime: z.string(),
      track: z.number(),
    }),
  }),
};

export const collections = {
  blog: blogs_schema,
};
