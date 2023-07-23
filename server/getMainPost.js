import React from 'react'

async function getMainPost(slug) {
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
            query GetPostDetails($slug: String!) {
                  post(where: {slug: $slug}) {
                        createdAt
                        slug
                        title
                        excerpt
                        featuredImage {
                          url
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
  
    return json.data.post;
  }

export default getMainPost