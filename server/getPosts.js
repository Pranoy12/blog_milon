import React from 'react'

async function getPosts() {
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
            query MyQuery {
                  postsConnection {
                    edges {
                      node {
                        author {
                          bio
                          name
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
      }),
    });
    const json = await response.json();
  
    return json.data.postsConnection.edges;
  }

export default getPosts