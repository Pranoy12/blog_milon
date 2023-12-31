'use client';
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Link from 'next/link'
import getRecentPosts from '@server/getRecentPosts';
import getSimilarPosts from '@server/getSimilarPosts';

function PostWidget({ categories, slug}) {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if(slug) {
      getSimilarPosts(categories,slug)
        .then((result) => setRelatedPosts(result))
    } 
    else {
      getRecentPosts()
        .then((result) => setRelatedPosts(result))
    }
  }, [categories,slug])

  // console.log(relatedPosts);

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {relatedPosts.map((post) => {
        if(post.slug != 'teacher') {
          return (
            <div key={post.title} className='flex items-center w-full mb-4'>
              <div className='w-16 flex-none'>
                <img 
                  alt={post.title}
                  height='60px'
                  width='60px'
                  className='align-middle rounded-full'
                  src={post.featuredImage.url}
                />
              </div>
              <div className='flex-grow ml-4'>
                <p className='text-gray-500 text-sm'>
                  {moment(post.createdAt).format('MMM DD,YYYY')}
                </p>
                <Link key={post.title} href={`/post/${post.slug}`} className='text-sm text-gray-500'> 
                  {post.title}
                </Link>
              </div>
            </div>
          )
        }
        else {
          return null;
        }
        })}
    </div>
  )
}

export default PostWidget