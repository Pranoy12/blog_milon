import React from 'react'
import Comments from './Comments';

async function getComments(slug) {
    // console.log(slug);
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
            query GetComments($slug: String!) {
                  comments(where: {post: {slug: $slug}}) {
                    name
                    createdAt
                    comment
                  }
                }
          `,
          variables: {
            slug: slug,
          },
      }),
    });
    const json = await response.json();

    // console.log(json.data.comments);
  
    return json.data.comments;
  }

export default async function CommentsStart ({ slug }) {
    // console.log(slug);
    const comment = await getComments(slug);
    // console.log(comment);
    
  return (
    <div><Comments comment={comment}/></div>
  )
}