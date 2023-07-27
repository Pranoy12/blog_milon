import Categories from "@/components/Categories"
import PostCard from "@/components/PostCard"
import PostWidget from "@/components/PostWidget"
import Teacher from "@components/Teacher";
import Featured from "@sections/Featured";
import FeaturedPosts from "@sections/FeaturedPosts";
import getPosts from "@server/getPosts";
// import { getPosts } from "@services"

// const posts = [
//   {title: 'React Testing', excerpt: 'Learn React Testing'},
//   {title: 'React with Tailwind', excerpt: 'Learn React with Tailwind'},
// ]

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
          <Teacher posts = {posts}/>
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
        </div>
      </div>
    </main>

  )
}