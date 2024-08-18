import Container from "@/app/components/Container";
import PageHero from "@/app/components/PageHero";
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import BlogContent from "@/app/components/BlogContent";


export const revalidate = 30;

const query = groq`*[_type == 'post']{
  ...,
  author->,
    categories[]->
} | order(_createdAt desc)`;



export default async function Features() {
     const posts = await client.fetch(query);
   return (
     <>
       <PageHero title="Blog" />
       <div>
         <BlogContent posts={posts} />
       </div>
     </>
   );
}