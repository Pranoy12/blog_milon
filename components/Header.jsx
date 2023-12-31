'use client';
import getCategories from '@server/getCategories';
import Image from 'next/image';
import Link from 'next/link'
import React, {useContext ,useEffect, useState} from 'react'

// const categories = [
//     {name: 'React', slug: 'react'},
//     {name: 'Web Development', slug: 'web-dev'}
// ]

const Header = () => {
    const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, []);


  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='border-b w-full inline-block border-blue-400 py-8'>
            <div className='md:float-left block hover:scale-110'>
                <Link href='/'>
                    {/* <Image src='../public/MILON.jpg' width={30} height={30} unoptimized alt='MILON'/> */}
                    <span className='cursor-pointer font-bold text-4xl text-white'>
                        <span className='text-white font-light container bg-red-500 rounded'>M</span>ilon
                    </span>
                    <p className='cursor-pointer font-bold text-4xl text-white'>Think<span className='text-black'>ink</span></p>
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer hover:text-gray-400'>
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header