import Head from 'next/head'
import { getRecentPosts } from '../services'; // Make sure to import getRecentPosts
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import {PostCard, Categories, PostWidget, LogoCloud, Facebook, HomePagePostCard, Section, LandingPagePostCard, ImageCta, Mission} from '../components'
import { getPosts } from '../services'
import ImageCarousel from '../components/ImageCarousel'
import Link from 'next/link'

export default function Home({ posts }) {
  const carouselImages = [
    '/Image_Carousel_Vilca.JPG',
    '/Image_Carousel_Mountain_1.JPG',
    '/Image_Carousel_Mountain_2.JPG',
 ];

  return (
    // <div className="container mx-auto px-10 mb-8 ">
    <div>
      <Head>
        <title>Vilcabamba</title>
        <meta name="description" content="built buy Jeevan Morgkan Kress-Jones" />
        <link rel="icon" href="/logo.PNG" />
      </Head>
      <ImageCarousel images={carouselImages} />
      {/* <Section /> */}
      <LogoCloud />
      <ImageCta />
      <Mission />
      <div className="bg-white py-24 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link href="/posts">
            <div className="mx-auto max-w-xs text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Publicaciones</h2>
              {/* <p className="bg-gray-600 mt-2 text-lg leading-8 rounded bg-white/10 px-2 py-1 font-semibold text-white shadow-sm hover:bg-gray-400"> */}
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Lorem ipsum dolor sit amet
                <span aria-hidden="true"> → </span>
              </p>
            </div>
          </Link>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* {posts.map((post) => <LandingPagePostCard post={post.node} key={post.title} />)} */}
            {posts.map((post, index) => <LandingPagePostCard key={index} post={post.node} />)}
          </div>
        </div>
      </div>
      <Facebook />
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  
  const limitedPosts = posts.slice(0, 3);

  return {
    props: {
      posts:limitedPosts
    }
  }
}


// export async function getStaticProps() {
//   try {
//     const posts = await getRecentPosts(); // Use getRecentPosts to fetch the most recent posts

//     return {
//       props: {
//         posts // Pass the fetched posts as props to your component
//       }
//     }
//   } catch (error) {
//     console.error("Failed to fetch recent posts:", error);
//     return {
//       props: {
//         posts: [] // Return an empty array in case of error
//       }
//     }
//   }
// }


