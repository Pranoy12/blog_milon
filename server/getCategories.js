import React from 'react'

async function getCategories() {
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
            query GetCategories {
                  categories {
                    name
                    slug
                  }
                }
          `,
      }),
    });
    const json = await response.json();
  
    return json.data.categories;
  }

export default getCategories