import { PortableTextBlock } from "sanity";

export type Post = {
    _id: string;
    _createdAt: string;
    title: string;
    slug: string;
    author: string;
    publishedAt: string;
    body: PortableTextBlock[];
}