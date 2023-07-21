import React from 'react'

async function getRecentPosts() {
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
            query GetPostDetails() {
                  posts (
                    orderBy: createdAt_ASC
                    last:3
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
      }),
    });
    const json = await response.json();
  
    return json.data.posts;
  }

export default getRecentPosts