import { Post } from "@types/post";
import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config';

const client = createClient(clientConfig);

export async function getAllPosts(title: string = ""): Promise<Post[]> {

}

export async function getPost(slug: string): Promise<Post>{

}