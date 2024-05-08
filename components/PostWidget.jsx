// import React, { useState, useEffect } from 'react';
// import moment from 'moment';
// import Link from 'next/link';

// import { getRecentPosts, getSimilarPosts } from '../services'

// const PostWidget = (categories, slug) => {
//   const [relatedPosts, setRelatedPosts] = useState([]);

//   useEffect(() => {
//     if(slug) {
//       getSimilarPosts(categories, slug)
//         .then((result) => setRelatedPosts(result))
//     } else {
//       getRecentPosts()
//         .then((result) => setRelatedPosts(result))
//     }
//   }, [slug])

//   console.log(relatedPosts)

//   return (
//     <div className='bg-white'>
//       PostWidget
//     </div>
//   )
// }

// export default PostWidget

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

// import { grpahCMSImageLoader } from '../util';
import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="bg-gray-200 shadow-lg rounded-lg p-8 pb-12 mb-8 mt-10">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {relatedPosts.map((post, index) => (
        <Link href={`/post/${post.slug}`} key={index} className="flex items-center w-full mb-4 transform transition-transform duration-200 hover:scale-105">
          <div className="w-16 flex-none">
            <Image
              // loader={grpahCMSImageLoader}
              alt={post.title}
              height={60}
              width={60}
              unoptimized
              className="align-middle rounded-full"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <div className="text-md" key={index}>{post.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostWidget;
