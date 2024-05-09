import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post }) => (
 <article key={post.id} className="mt-10 mb-10 relative isolate flex flex-col gap-8 lg:flex-row">
    <Link href={`/post/${post.slug}`} className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0 transform transition-transform duration-200 hover:scale-105">
      <span>
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover shadow-lg rounded-t-lg lg:rounded-lg"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </span>
    </Link>
    <div>
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={post.createdAt} className="text-gray-500">
          {moment(post.createdAt).format('MMM DD, YYYY')}
        </time>
      </div>
      <div className="group relative max-w-xl">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <Link href={`/post/${post.slug}`}>
            <span>
              <span className="absolute inset-0" />
              {post.title}
            </span>
          </Link>
        </h3>
        <p className="mt-5 text-sm leading-6 text-gray-600">{post.excerpt}</p>
      </div>
      <div className="mt-6 flex border-t pt-6 border-gray-200">
        <div className="relative flex items-center gap-x-4">
          <Image
            unoptimized
            alt={post.author.name}
            height={30}
            width={30}
            className="align-middle rounded-full"
            src={post.author.photo.url}
          />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              {post.author.name}
            </p>
          </div>
        </div>
      </div>
    </div>
 </article>
);

export default PostCard;





