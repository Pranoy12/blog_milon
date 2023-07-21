import React from 'react'

async function getSimilarPosts(categories,slug) {
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
            query GetPostDetails($slug: String!, $categories: [String!]) {
                  posts (
                    where: { slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
                    last: 3
                  ) {
                    title
                    featuredImage {
                      url
                    }
                    createdAt
                    slug
                  }
                }
          `,
          variables: {
            slug: slug,
            categories: categories,
          },
      }),
    });
    const json = await response.json();
  
    return json.data.posts;
  }
  
export default getSimilarPosts