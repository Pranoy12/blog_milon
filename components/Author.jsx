import Image from 'next/image'
import React from 'react'

const Author = ({ author }) => {
  return (
    <>
    {author ? (
      <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20'>
      <div className='absolute left-0 right-0 -top-14 flex justify-center'>
          <Image
              alt={author.name}
              unoptimized
              height={50}
              width={80}
              className='align-middle rounded-full'
              src={author.photo.url}
          />
      </div>
      <h3 className='text-white my-4 text-xl font-bold'>{author.name}</h3>
      <p className='text-white '>{author.bio}</p>
  </div>    
    ) : (<div></div>)}
    </>
  )
}

export default Author