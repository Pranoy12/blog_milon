// import moment from 'moment'
// import Link from 'next/link'
// import React from 'react'

import getMainPost from "@server/getMainPost";
import moment from "moment";
import Link from "next/link";

// const Teacher = ({ posts }) => {
//   return (
//     <div className='bg-white shadow-lg rounded-lg p-8 mb-10' style={{ backgroundImage: "url(https://media.graphassets.com/ldZGw2EuSIqYnzUS7FL9)", opacity: 0.5 }}>
//       {/* <h3 className='text-xl mb-8 font-semibold border-b pb-4'>My Mentor</h3> */}
//       <div className='mb-10 pb-5'></div>
//       {posts.map((post) => {
//   if (post.node.slug === "teacher") {
//     return (
//       <div key={post.node.title} className='flex items-center w-full mb-20'>

//         <div className='flex-grow ml-4'>

//           <Link key={post.node.title} href={`/post/${post.node.slug}`} className='text-md text-black-500 font-bold'> 
//             {post.node.title}
//             <div>
//                 <span className='text-xs'>Click to Read</span>
//             </div>
//           </Link>
//         </div>
//       </div>
//     );
//   } else {
//     return null; // Render nothing for other posts
//   }
// })}

//     </div>
//   )
// }

// export default Teacher


export default async function Teacher () {
  const post = await getMainPost('teacher');

  return (
    <div className="relative h-72 filter grayscale mb-10 hover:scale-110">
    <div className="absolute rounded-lg bg-no-repeat bg-cover shadow-md inline-block w-full h-72" style={{ backgroundImage: `url('${post.featuredImage.url}')` }} />
    <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
    <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
      <p className="text-white mb-4 text-shadow font-semibold text-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
      <p className="text-white mb-4 text-shadow text-2xl text-center">
        {post.title}
      </p>
      <div className="text-sm text-gray-400">
          Click to read
        </div>
      <div className="flex items-center absolute bottom-5 w-full justify-center">
        {post.author ? (
          <div>
            <Image
          unoptimized
          alt={post.author.name}
          height={30}
          width={30}
          className="align-middle drop-shadow-lg rounded-full"
          src={post.author.photo.url}
        />
        <p className="inline align-middle text-white text-shadow ml-2 font-medium">{post.author.name}</p>
          </div>
        ) : (<div></div>)}
      </div>
    </div>
    <Link href={`/post/${post.slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link>
  </div>
  )
}