import { defineCollection, z } from "astro:content";

const logs = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    translationKey: z.string(),
    date: z.coerce.date(),
    locale: z.enum(["zh", "en"]),
    category: z.enum(["coding", "games", "world", "notes", "projects"]),
    tags: z.array(z.string()).default([]),
    cover: z
      .object({
        src: z.string(),
        alt: z.string().optional(),
        eyebrow: z.string().optional()
      })
      .optional(),
    draft: z.boolean().default(false)
  })
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    locale: z.enum(["zh", "en"]),
    status: z.string(),
    stack: z.array(z.string()).default([]),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string()
        })
      )
      .default([]),
    featured: z.boolean().default(false)
  })
});

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    locale: z.enum(["zh", "en"]),
    type: z.enum(["now"])
  })
});

export const collections = { logs, projects, pages };
