import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({ post }) => {
  // console.log(post);
  if (post.slug != 'teacher') {
    return (
      <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
          <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
            <img 
              src={post.featuredImage.url} 
              alt={post.title}
              // className='absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg ease-in  hover:h-full hover:w-full hover:object-contain transition duration-500 cursor-pointer'
              className='absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
              // className='h-auto max-w-lg mx-auto transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0'
            />
          </div>
          <h1 className='transition duration-100 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semiblod'>
            <Link href={`/post/${post.slug}`}>
              {post.title}
            </Link>
          </h1>
          <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
            <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-12'>
              {post.author ? (
              <div> 
                <img  
                alt={post.author.name}
                height="30px"
                width="30px"
                className='align-middle rounded-full ml-12'
                src={post.author.photo.url}
              />
              <div className='flex flex-row'>
                <svg fill="#000000" height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-302.08 -302.08 1116.16 1116.16" xmlSpace="preserve">

                  <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                  <g id="SVGRepo_iconCarrier"> <g> <g> <path d="M446.029,0L130.498,267.303l-20.33,66.646c-8.624,7.369-19.857,11.39-32.017,11.391c-4.776,0-9.583-0.622-14.293-1.848 l-14.438-3.761L0,512l172.268-49.421l-3.759-14.438c-4.454-17.1-0.883-34.137,9.54-46.309l66.648-20.331L512,65.971L446.029,0z M136.351,441.068l-61.413,17.618l42.732-42.732L96.045,394.33l-42.731,42.732l17.627-61.444c2.401,0.202,4.807,0.303,7.21,0.303 c16.215-0.001,31.518-4.56,44.35-13.043l26.609,26.609C139.202,404.41,134.73,422.458,136.351,441.068z M173.977,371.102 l-33.079-33.078l10.109-33.14l56.109,56.109L173.977,371.102z M235.003,345.632l-68.636-68.636l46.828-39.671l61.478,61.478 L235.003,345.632z M236.61,217.492L444.314,41.535l26.152,26.152L294.509,275.391L236.61,217.492z"/> </g> </g> </g>

                </svg>
                <span className='inline align-middle text-gray-700 text-lg mt-2'>{post.author.name}</span>
              </div>
              </div>
              ) : (<div></div>)}
            </div>
            <div className='font-medium text-gray-700'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{moment(post.createdAt).format('MMM DD,YYYY')}</span>
            </div>
          </div>
          <p className='text-center text-sm text-gray-700 px-4 lg:px-20 mb-8'>{post.excerpt}</p>
          <div className='text-center text-sm'>
            <Link href={`/post/${post.slug}`}>
              <span className='transiton duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 font-medium text-white px-8 py-3 cursor-pointer rounded-full'>
                Continue Reading
              </span>
            </Link>
          </div>
      </div>
    )
  }
  
}

export default PostCard