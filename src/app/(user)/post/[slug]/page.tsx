import { groq, PortableText } from 'next-sanity';
import { Post } from '../../../../../types';
import { client } from '@/sanity/lib/client';
import Container from '@/app/components/Container';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';
import Link from 'next/link';
import { RichText } from '@/app/components/RichText';

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 30;

export const generateStaticParams = async () => {
  const query = groq`*[_type == 'post']{
    slug
  }`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map(slug => slug?.slug?.current);
  return slugRoutes?.map(slug => ({
    slug,
  }));
};

export default async function SlugPage({ params: { slug } }: Props) {
  const query = groq`*[_type == 'post' && slug.current == $slug][0]{
    ...,
    body,
    author->
  }`;
  const post: Post = await client.fetch(query, { slug });

  return (
    <Container className="mb-10">
      <div className="flex items-center mb-10">
        <div className="w-full md:w-2/3">
          <Image
            src={urlFor(post?.mainImage).url()}
            width={500}
            height={200}
            alt="Featured Image"
            className=" object-cover w-full h-[600px]"
          />
        </div>
        <div className=" w-1/3 hidden md:inline-flex flex-col items-center gap-5 px-4">
          <Image
            src={urlFor(post?.author.image).url()}
            alt="Author Image"
            width={200}
            height={200}
            className="w-32 h-32 rounded-full object-cover"
          />
          <p className="text-3xl text-gray-800 font-semibold">
            {post?.author?.name}
          </p>
          <p className="text-center tracking wide text-sm">
            {post?.author?.description}
          </p>
          <div className="text-gray-500 hidden md:inline-flex items-center gap-7">
            <Link href={'https://www.facebook.com/milonhossen.live/'}>
              <BsFacebook className="text-2xl hover:text-primeColor duration-200" />
            </Link>
            <Link href={'https://x.com/milonhossen1010'}>
              <BsTwitter className="text-2xl hover:text-primeColor duration-200" />
            </Link>
            <Link href={'https://www.linkedin.com/in/milonhossen1010/'}>
              <BsLinkedin className="text-2xl hover:text-primeColor duration-200" />
            </Link>
          </div>
        </div>
      </div>

      <div>
        <h2 className=" text-4xl font-semibold mb-7">{post?.title}</h2>
        <PortableText value={post?.body} components={RichText} />
      </div>
    </Container>
  );
}
