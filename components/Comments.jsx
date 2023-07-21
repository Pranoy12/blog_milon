'use client';
import  parse  from 'html-react-parser';
import moment from 'moment';
import { Comment } from 'postcss';
import React, { useEffect, useState } from 'react'


const Comments = ({ comment }) => {
  // console.log(comment);
  // const comment = await getComments(slug);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(comment);
  }, [])


  return (
    <>
      {comment.length>0 && (
        <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
          <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
            {comments.length}
            {' '}
            Comments
          </h3>
          {comments.map((comment) => (
            <div key={comment.createdAt} className='border-b border-gray-100 mb-4 pb-4'>
              <p className='mb-4'>
                <span className='font-semibold'>{comment.name}</span>
                {' '}
                <span className='text-xs'>on</span>
                {' '}
                <span className='text-xs'>{moment(comment.createdAt).format('MMM DD, YYYY')}</span>
              </p>
              <p className='whitespace-pre-line text-gray-600 w-full'>
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Comments