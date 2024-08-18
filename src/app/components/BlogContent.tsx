import Link from 'next/link';
import { Post } from '../../../types';
import Container from './Container';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import FadeIn from './FadeIn';
import Heading from './Heading';
import Pagination from '@etchteam/next-pagination';

interface Props {
  posts: Post[];
}

export default function BlogContent({ posts }: Props) {
  return (
    <div className="bg-gray-100">
      <Container className=" py-20 px-10 flex flex-col gap-10">
        <Heading title="Letest Post" />
        {posts.map(post => (
          <FadeIn key={post._id}>
            <Link
              href={{
                pathname: `/post/${post?.slug?.current}`,
                query: { slug: post?.slug?.current },
              }}
            >
              <div className="flex flex-col md:flex-row gap-10 bg-white rounded-md rounded-tr-md rounded-br-md hover:shadow-md duration-200">
                <div className="w-full md:w-3/5 group overflow-hidden rounded-tl-md rounded-bl-md relative">
                  <Image
                    src={urlFor(post?.mainImage).url()}
                    width={500}
                    height={500}
                    alt="Blog Image"
                    className="w-full h-[500px] object-cover rounded-tl-md rounded-bl-md group-hover:scale-105 duration-500 "
                  />
                  <div className=" absolute top-0 left-0 bg-black/20 w-full h-full group-hover:hidden duration-200" />
                  <div className=" absolute hidden group-hover:inline-flex bottom-0 left-0 w-full bg-opacity-20 bg-black justify-center backdrop-blur-lg rounded text-white  py-3 drop-shadow-lg duration-200">
                    <p className="text-lg font-semibold text-white">
                      Read More
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-2/5 flex flex-col justify-between py-10 px-4  ">
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-2">
                      {post?.categories.map(item => (
                        <p
                          key={item?._id}
                          className="text-xs uppercase text-blue-600 font-semibold"
                        >
                          {item?.title}
                        </p>
                      ))}
                    </div>
                    <h2 className=" text-2xl font-semibold hover:text-orange-600 duration-200 cursor-pointer">
                      {post?.title}
                    </h2>
                    <p className="text-gray-500"> {post?.description} </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-semibold text-gray-500">
                      {new Date(post?._createdAt).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                    <div className="flex items-center gap-2">
                      <Image
                        src={urlFor(post?.author?.image).url()}
                        width={200}
                        height={200}
                        className=" rounded-full object-cover w-10 h-10"
                        alt="Author Image"
                      />
                      <p className="text-sm font-medium text-gray-500">
                        {post?.author.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
       
          </FadeIn>
        ))}
      </Container>
    </div>
  );
}
