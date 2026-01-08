import { defineCollection, z } from 'astro:content';

const experiences = defineCollection({
    type: 'content',
    schema: z.object({
        role: z.string(),
        company: z.string(),
        date: z.string(),
        description: z.string(),
        skills: z.array(z.string()),
        link: z.string().optional(), // Keep for backward compatibility or external links
        color: z.enum(['cyan', 'red', 'gold', 'purple']).optional(),
    }),
});

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        link: z.string().optional(),
        viewLink: z.string().optional(),
        image: z.string().optional(),
        color: z.enum(['cyan', 'red', 'gold', 'purple', 'orange', 'light-orange']),
        isFeatured: z.boolean().optional(),
    }),
});

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        date: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        link: z.string().optional(),
        image: z.string().optional(),
        color: z.enum(['cyan', 'red', 'gold', 'purple', 'orange', 'light-orange']),
        category: z.string().optional(),
    }),
});

const books = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        author: z.string(),
        cover: z.string().optional(),
        rating: z.number().optional(),
        dateRead: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

const papers = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        authors: z.array(z.string()),
        conference: z.string(),
        link: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = {
    experiences,
    projects,
    blog,
    books,
    papers,
};
