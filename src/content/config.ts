import { defineCollection, z } from 'astro:content';

// Data collections (YAML files) - schemas for array items
const skillSchema = z.object({
    name: z.string(),
    description: z.string(),
    tagline: z.string().optional(),
    year: z.string().optional(),
    icon: z.string().optional(),
});

const companySchema = z.object({
    name: z.string(),
    description: z.string(),
    tagline: z.string().optional(),
    year: z.string().optional(),
    icon: z.string().optional(),
});

const skills = defineCollection({
    type: 'data',
    schema: z.array(skillSchema),
});

const companies = defineCollection({
    type: 'data',
    schema: z.array(companySchema),
});

const experiences = defineCollection({
    type: 'data',
    schema: z.array(z.object({
        slug: z.string(),
        role: z.string(),
        company: z.string(),
        date: z.string(),
        description: z.string(),
        content: z.string().optional(),
        skills: z.array(z.string()),
        link: z.string().optional(),
        color: z.enum(['cyan', 'red', 'gold', 'purple']).optional(),
    })),
});

const projects = defineCollection({
    type: 'data',
    schema: z.array(z.object({
        slug: z.string(),
        title: z.string(),
        subtitle: z.string(),
        description: z.string(),
        content: z.string().optional(),
        tags: z.array(z.string()),
        link: z.string().optional(),
        viewLink: z.string().optional(),
        image: z.string().optional(),
        color: z.enum(['cyan', 'red', 'gold', 'purple', 'orange', 'light-orange']),
        isFeatured: z.boolean().optional(),
    })),
});

const blog = defineCollection({
    type: 'data',
    schema: z.array(z.object({
        slug: z.string(),
        title: z.string(),
        subtitle: z.string(),
        date: z.string(),
        description: z.string(),
        content: z.string().optional(),
        tags: z.array(z.string()),
        link: z.string().optional(),
        image: z.string().optional(),
        color: z.enum(['cyan', 'red', 'gold', 'purple', 'orange', 'light-orange']),
        category: z.string().optional(),
    })),
});

const books = defineCollection({
    type: 'data',
    schema: z.array(z.object({
        slug: z.string(),
        title: z.string(),
        author: z.string(),
        cover: z.string().optional(),
        rating: z.number().optional(),
        dateRead: z.string().optional(),
        tags: z.array(z.string()).optional(),
        content: z.string().optional(),
    })),
});

const papers = defineCollection({
    type: 'data',
    schema: z.array(z.object({
        slug: z.string(),
        title: z.string(),
        authors: z.array(z.string()),
        conference: z.string(),
        year: z.string().optional(),
        link: z.string().optional(),
        tags: z.array(z.string()).optional(),
        content: z.string().optional(),
    })),
});

const general = defineCollection({
    type: 'data',
    schema: z.array(z.object({
        name: z.string(),
        link: z.string(),
    })),
});

export const collections = {
    skills,
    companies,
    experiences,
    projects,
    blog,
    books,
    papers,
    general,
};
