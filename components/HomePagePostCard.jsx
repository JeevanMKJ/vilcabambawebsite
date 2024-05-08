import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

// const HomePagePostCard = ({ post }) => (
//  <article key={post.id} className="flex flex-col items-start justify-between">
//     <div className="relative w-full">
//       <Link href={`/post/${post.slug}`} className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[3/2]">
//         <span>
//           <Image
//             unoptimized
//             alt={post.title}
//             height={500} // Adjust height as needed
//             width={500} // Adjust width as needed
//             className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover shadow-lg rounded-t-lg lg:rounded-lg"
//             src={post.featuredImage.url}
//           />
//           <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
//         </span>
//       </Link>
//     </div>
//     <div className="max-w-xl">
//       <div className="mt-8 flex items-center gap-x-4 text-xs">
//         <time dateTime={post.createdAt} className="text-gray-500">
//           {moment(post.createdAt).format('MMM DD, YYYY')}
//         </time>
//       </div>
//       <div className="group relative">
//         <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
//           <Link href={`/post/${post.slug}`}>
//             <span className="absolute inset-0" />
//             {post.title}
//           </Link>
//         </h3>
//         <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.excerpt}</p>
//       </div>
//       <div className="relative mt-8 flex items-center gap-x-4">
//         <Image
//           unoptimized
//           alt={post.author.name}
//           height={30}
//           width={30}
//           className="align-middle rounded-full"
//           src={post.author.photo.url}
//         />
//         <div className="text-sm leading-6">
//           <p className="font-semibold text-gray-900">
//             {post.author.name}
//           </p>
//           <p className="text-gray-600">{post.author.role}</p>
//         </div>
//       </div>
//     </div>
//  </article>
// );


export default function HomePagePostCard({ post }) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/* {post.map((post) => ( */}
            <article key={post.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <Image
                  src={post.featuredImage.url}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.createdAt} className="text-gray-500">
                    {moment(post.createdAt).format('MMM DD, YYYY')}
                  </time>
                    <Link>
                      <span
                        href={`/post/${post.slug}`}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {/* {post.category.title} */}
                      </span>
                    </Link>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link>
                      <span href={`/post/${post.slug}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </span>
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.excerpt}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <Image src={post.author.photo.url} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                  <p className="font-semibold text-gray-900">
                    {post.author.name}
                  </p>
                  {/* <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div> */}
                </div>
              </div>
            </article>
          {/* ))} */}
        </div>
      </div>
    </div>
  )
}
