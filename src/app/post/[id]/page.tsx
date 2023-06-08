import { Icons } from "@/components/icons";
import { notion } from "@/server/notionClient";
import { Block } from "@/type/block";
import { Post } from "@/type/post";
import Image from 'next/image'

interface Props {
   params: {
      id: string
   }
}
export default async function Post({ params }: Props) {
   const response = await notion.pages.retrieve({
      page_id: params.id,
   });
   // get block children
   const blockChildren = await notion.blocks.children.list({
      block_id: params.id,
   });

   const blocks = blockChildren.results as Block[];
   const post = response as Post;

   let listNumber = 0;
   return (
      <div className="container max-w-4xl mx-auto">
         <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <Image
               className="rounded-lg"
               src={post.properties.URL.url}
               alt={post.id}
               width={486}
               height={686}
               style={{ objectFit: 'cover' }
               }
            />
            <div>
               <h1 className="text-6xl font-bold py-6">{post.properties.name.title[0].plain_text}</h1>
               <span className="line-clamp-2 text-sm text-ellipses ">
                  {post.properties.description.rich_text[0].plain_text}
               </span>
               <div className="flex gap-12 py-6">
                  {/* clock icon */}
                  <div className="flex gap-2">
                     <Icons.clock className="h-5 w-5" />
                     <span className="text-sm ">{post.properties.time_in_minutes.rich_text[0]?.plain_text}</span>
                  </div>
                  {/* people icon */}
                  <div className="flex gap-2">
                     <Icons.people className="h-5 w-5" />
                     <span className="text-sm ">{post.properties.servings.rich_text[0]?.plain_text}</span>
                  </div>
               </div>
            </div>
         </div>


         <div className="py-6">
            {blocks.map((block) => {

               if (block.type !== "numbered_list_item") {
                  listNumber = 0;
               }

               if (block.type === "paragraph") {

                  return (
                     // <p py={1} fontSize={12} key={block.id}>
                     <p className="py-6 text-sm" key={block.id}>
                        {block.paragraph.rich_text[0]?.plain_text}
                     </p>
                  );
               }

               if (block.type === "heading_1") {
                  return (
                     // <Heading variant="h1" fontSize={21} pt={4} pb={2} key={block.id}>
                     <h1 className="text-3xl font-bold py-4" key={block.id}>
                        {block.heading_1.rich_text[0].plain_text}
                     </h1>
                  )
               }

               if (block.type === "heading_2") {
                  return (
                     // <Heading variant="h2" fontSize={18} pt={4} pb={2} key={block.id}>
                     <h2 className="text-2xl font-bold py-4" key={block.id}>
                        {block.heading_2.rich_text[0].plain_text}
                     </h2>
                  )
               }

               if (block.type === "heading_3") {
                  return (
                     // <Heading variant="h3" fontSize={15} pt={2} pb={1} key={block.id}>
                     <h3 className="text-xl font-bold py-2" key={block.id}>
                        {block.heading_3.rich_text[0].plain_text}
                     </h3>
                  )
               }

               if (block.type === "bulleted_list_item") {
                  return (
                     // <Text py={1} fontSize={12} key={block.id}>
                     <p className="py-1 text-sm" key={block.id}>
                        {block.bulleted_list_item.rich_text[0]?.plain_text}
                     </p>
                  )
               }

               if (block.type === "numbered_list_item") {
                  listNumber++;
                  return (
                     // <Text py={1.5} fontSize={12} key={block.id}>
                     <span className="py-1 text-sm" key={block.id}>
                        {listNumber}. {block.numbered_list_item.rich_text[0]?.plain_text} <br />
                     </span>
                  )
               }
            })}

         </div>
      </div>
   )
}

