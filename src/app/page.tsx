import { notion } from '@/server/notionClient';
import { Post } from '@/type/post';
import Image from 'next/image'
import Link from 'next/link';

export const revalidate = 60;

export default async function Home() {
   const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID as string,
   })

   const posts = response.results as Post[]

   return (
      <div className="container">
         <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {/* <pre>
               {JSON.stringify(response.results, null, 2)}
            </pre> */}

            {posts.map((post: Post) => {
               return (
                  <Link
                     key={post.id}
                     href={`/post/${post.id}`}
                  >
                     <div
                        className="flex flex-col p-4 border border-secondary rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out cursor-pointer"
                     >
                        <Image
                           className="rounded-lg"
                           src={post.properties.URL.url}
                           alt={post.id}
                           width={486}
                           height={132}
                           style={{ objectFit: 'cover' }}
                        />
                        <h2
                           className='text-lg font-semibold mb-2'
                        >{post.properties.name.title[0].plain_text}</h2>
                        {/* truncate */}
                        <span className="line-clamp-2 text-sm text-ellipses ">
                           {post.properties.description.rich_text[0].plain_text}
                        </span>
                     </div>
                  </Link>
               )
            }
            )}
         </div>
      </div >
   )
}
