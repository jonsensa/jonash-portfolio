import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content', // This means it's a folder of Markdown or MDX files
    schema: z.object({
        title: z.string(),
        date: z.date(),
        excerpt: z.string(),
        readTime: z.string().optional(), // Optional, in case you don't calculate it for every post
        // You could add an image URL, an author name, etc., here later!
    })
});

const artworkCollection = defineCollection({
    type: 'data', // This specifies it's a JSON or YAML file
    schema: z.object({
        id: z.string(),
        src: z.string(),
        alt: z.string(),
        title: z.string()
    })
});

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
        githubUrl: z.string().optional(),
        liveUrl: z.string().optional()
    })
});

// Export the collections object to register it with Astro
export const collections = {
    'blog': blogCollection,
    'artwork': artworkCollection,
    'projects': projectsCollection,
};
