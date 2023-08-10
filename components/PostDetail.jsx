'use client';
import moment from 'moment'
import React from 'react'
import { RichText } from "@graphcms/rich-text-react-renderer"
import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share';

const PostDetail = ({ post }) => {
  
  const richTextContent = post.content.raw;
  const copyToClipboard = e => {
    navigator.clipboard.writeText(`https://milon-blog.vercel.app/post/${post.slug}`)
  }

  return (
    <div className='bg-white shadow-lg rounded-lg lg:p-8 p-12 mb-8'>
        <div className='relative overflow-hidden shadow-md mb-6'>
            <img 
                src={post.featuredImage.url}
                alt={post.title}
                className='object-top h-full w-full rounded-t-lg'
            />
        </div>
        <div className='px-4 lg:px-0'>
            <div className='w-full'>
            <div className='text-right'>
                  {/* <span className='text-xs ml-5'></span> */}
                  <button onClick={copyToClipboard}>
                  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 18 2 C 16.35499 2 15 3.3549904 15 5 C 15 5.1909529 15.021791 5.3771224 15.056641 5.5585938 L 7.921875 9.7207031 C 7.3985399 9.2778539 6.7320771 9 6 9 C 4.3549904 9 3 10.35499 3 12 C 3 13.64501 4.3549904 15 6 15 C 6.7320771 15 7.3985399 14.722146 7.921875 14.279297 L 15.056641 18.439453 C 15.021555 18.621514 15 18.808386 15 19 C 15 20.64501 16.35499 22 18 22 C 19.64501 22 21 20.64501 21 19 C 21 17.35499 19.64501 16 18 16 C 17.26748 16 16.601593 16.279328 16.078125 16.722656 L 8.9433594 12.558594 C 8.9782095 12.377122 9 12.190953 9 12 C 9 11.809047 8.9782095 11.622878 8.9433594 11.441406 L 16.078125 7.2792969 C 16.60146 7.7221461 17.267923 8 18 8 C 19.64501 8 21 6.6450096 21 5 C 21 3.3549904 19.64501 2 18 2 z M 18 4 C 18.564129 4 19 4.4358706 19 5 C 19 5.5641294 18.564129 6 18 6 C 17.435871 6 17 5.5641294 17 5 C 17 4.4358706 17.435871 4 18 4 z M 6 11 C 6.5641294 11 7 11.435871 7 12 C 7 12.564129 6.5641294 13 6 13 C 5.4358706 13 5 12.564129 5 12 C 5 11.435871 5.4358706 11 6 11 z M 18 18 C 18.564129 18 19 18.435871 19 19 C 19 19.564129 18.564129 20 18 20 C 17.435871 20 17 19.564129 17 19 C 17 18.435871 17.435871 18 18 18 z"/></svg>
                  </button>
                  <WhatsappShareButton className='ml-8'
                    url={`https://milon-blog.vercel.app/post/${post.slug}`} >
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                  <FacebookShareButton
                    url={`https://milon-blog.vercel.app/post/${post.slug}`} >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                  <LinkedinShareButton
                    url={`https://milon-blog.vercel.app/post/${post.slug}`} >
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
                  <TelegramShareButton 
                    url={`https://milon-blog.vercel.app/post/${post.slug}`} >
                    <TelegramIcon size={32} round />
                  </TelegramShareButton>
                </div>
                {/* <div className='flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
                  {post.author ? (
                    <div>
                      <img  
                    alt={post.author.name}
                    height="30px"
                    width="30px"
                    className='align-middle rounded-full'
                    src={post.author.photo.url}
                    />
                    <p className='inline align-middle text-gray-700 ml-2 text-lg'>{post.author.name}</p>
                    </div>
                  ): (<div></div>)}
                </div>
                <div className='font-medium text-gray-700'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{moment(post.createdAt).format('MMM DD,YYYY')}</span>
                </div> */}
            </div>
            <div className='lg:flex items-baseline'>
                <h1 className='mb-8 text-3xl font-semibold'>
                    {post.title}
                </h1>
                
            </div>
            {/* {console.log(richTextContent)} */}
            {post.content && (
              <RichText
                content={richTextContent}
                references={post?.content?.raw?.references}
              />
            )}
        </div>
    </div>
  )
}

export default PostDetail