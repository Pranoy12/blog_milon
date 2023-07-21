import Author from '@components/Author';
import Categories from '@components/Categories';
import PostCard from '@components/PostCard';
import PostWidget from '@components/PostWidget';
import React from 'react'

async function getCategoryPostDetails(slug) {
    const response = await fetch(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 10,
      },
      body: JSON.stringify({
        query: `
        query GetCategoryPost($slug: String!) {
            postsConnection(where: {categories_some: {slug: $slug}}) {
              edges {
                node {
                  author {
                    bio
                    name
                    id
                    photo {
                      url
                    }
                  }
                  createdAt
                  slug
                  title
                  excerpt
                  featuredImage {
                    url
                  }
                  categories {
                    name
                    slug
                  }
                }
              }
            }
          }
          `,
          variables: {
            slug: slug,
          },
      }),
    });
    const json = await response.json();
  
    return json.data.postsConnection.edges;
  }

  export default async function PostByCategory ({ params }) {
    const posts = await getCategoryPostDetails(params.slug);

  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='col-span-1 lg:col-span-8'>
          {posts.map((post,index) => (
            <div> 
              <PostCard key={index} post={post.node} />
              {/* <Author author={post.node.author} /> */}
            </div>
          ))}
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='relative lg:sticky top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}