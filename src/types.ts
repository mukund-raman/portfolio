export interface Project {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    image?: string;
    link?: string;
    viewLink?: string;
    content?: string;
    isFeatured?: boolean;
}

export interface BlogPost {
    slug: string;
    title: string;
    subtitle: string;
    date: string;
    category?: string;
    image?: string;
    tags: string[];
    color?: string;
    content?: string;
    featured?: boolean;
}

export interface Experience {
    slug: string;
    role: string;
    company: string;
    date: string;
    description: string;
    skills: string[];
    color?: "red" | "cyan" | "gold" | "purple" | "orange" | "light-orange";
    content?: string;
    link?: string;
}

export interface Book {
    slug: string;
    title: string;
    author: string;
    loading?: string; // 'lazy' or 'eager'
    website?: string;
    cover?: string;
    tags?: string[];
    rating?: number;
    dateRead?: string;
    content?: string;
}

export interface Paper {
    slug: string;
    title: string;
    authors: string[];
    conference: string;
    year: number;
    link?: string;
    tags?: string[];
    content?: string;
}

export interface Skill {
    name: string;
    icon: string;
    category: string;
}

export interface Company {
    name: string;
    icon?: string;
    color?: string;
    url?: string;
}
