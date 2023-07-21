import Categories from "@/components/Categories"
import PostCard from "@/components/PostCard"
import PostWidget from "@/components/PostWidget"
import Featured from "@sections/Featured";
import FeaturedPosts from "@sections/FeaturedPosts";
// import { getPosts } from "@services"

// const posts = [
//   {title: 'React Testing', excerpt: 'Learn React Testing'},
//   {title: 'React with Tailwind', excerpt: 'Learn React with Tailwind'},
// ]


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



export default async function Home() {
  const posts = await getPosts();
  // console.log(posts);
  return (
    <main className="container mx-auto px-10 mb-8">
      <Featured />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
              <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
        </div>
      </div>
    </main>

  )
}