'use server';
import React from 'react'

  async function submitComment(obj) {
    console.log(obj);
    const { name, email, slug, comment} = obj;
    const response = await fetch(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
            createComment(
              data: {
                name: $name
                email: $email
                comment: $comment
                post: { connect: { slug: $slug } }
              }
            ) {
              id
            }
          }
            `,
            variables: {
                name: name,
                email: email,
                comment: comment,
                slug: slug,
              },
      }),
    });
    
    if (response.ok) {
        return response.json(); 
      } else {
        console.log('Failed to submit comment.'); 
      }
  }
  

export default submitComment