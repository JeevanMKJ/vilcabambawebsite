import { PostCard } from '../components'
import { getPosts } from '../services'

export default function posts({ posts }) {
  console.log("Posts are somewhewre");
  return (
    <div className="container mx-auto px-10 mb-8 ">
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
        {posts.map((post, index) => <PostCard post={post.node} key={index} />)}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            {/* <PostWidget /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  
  return {
    props: {
      posts
    }
  }
}

// export async function getStaticPaths() {
//   const posts = await getPosts()

//   return {
//     paths: posts.map(({ node: { slug }}) => ({ params: { slug }})),
//     fallback: false,
//   }
// }