import Author from '@components/Author'
import Categories from '@components/Categories'
import Comments from '@components/Comments'
import CommentsForm from '@components/CommentsForm'
import CommentsStart from '@components/CommentsStart';
import Loader from '@components/Loader'
import PostDetail from '@components/PostDetail'
import PostWidget from '@components/PostWidget'
import getPostDetails from '@server/getPostDetails';
import getPosts from '@server/getPosts';
// import { useRouter } from 'next/router'
import React from 'react'


export default async function PostDetails ({ params }) {
  const post = await getPostDetails(params.slug);
  // console.log(post);
  // const router = useRouter();

  // if(router.isFallback) {
  //   return <Loader />
  // }

  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='col-span-1 lg:col-span-8'>
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <CommentsStart slug={post.slug} />
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='relative lg:sticky top-8'>
            <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)}/>
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

// export async function getStaticPaths() {
//   const posts = await getPosts();

//   return {
//     paths: posts.map(({node: {slug}}) => ({params: {slug}})),
//     fallback: true,
//   }
// }