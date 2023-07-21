'use client';
import getCategories from '@server/getCategories';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, []);

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Categories</h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className='cursor-pointer block pb-3 mb-3 text-gray-500'>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories