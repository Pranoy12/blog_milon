import React from 'react'
import FeaturedPosts from './FeaturedPosts';

async function getFeaturedPosts() {
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
        query GetCategoryPost() {
          posts(where: {featuredPost: true}) {
            author {
              name
              photo {
                url
              }
            }
            featuredImage {
              url
            }
            title
            slug
            createdAt
          }
        }
          `,
      }),
    });
    const json = await response.json();
  
    return json.data.posts;
  }

export default async function Featured () {

    const posts = await getFeaturedPosts();
    // console.log(posts);

  return (
    <div><FeaturedPosts posts= {posts}/></div>
  )
}
