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
         <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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

               switch (block.type) {
                  case "paragraph":
                     return <Paragraph block={block} />;
                  case "heading_1":
                     return <Heading1 block={block} />;
                  case "heading_2":
                     return <Heading2 block={block} />;
                  case "heading_3":
                     return <Heading3 block={block} />;
                  case "bulleted_list_item":
                     return <BulletedListItem block={block} />;
                  case "numbered_list_item":
                     return (
                        listNumber++,
                        <NumberedListItem block={block} listNumber={listNumber} />
                     );
                  default:
                     return null;
               }
            })}
         </div>
      </div>
   )
}


const Paragraph = ({ block }: { block: Block }) => <p className="py-6 text-sm" key={block.id}>{block.paragraph.rich_text[0]?.plain_text}</p>;
const Heading1 = ({ block }: { block: Block }) => <h1 className="text-3xl font-bold py-4" key={block.id}>{block.heading_1.rich_text[0].plain_text}</h1>;
const Heading2 = ({ block }: { block: Block }) => <h2 className="text-2xl font-bold py-4" key={block.id}>{block.heading_2.rich_text[0].plain_text}</h2>;
const Heading3 = ({ block }: { block: Block }) => <h3 className="text-xl font-bold py-2" key={block.id}>{block.heading_3.rich_text[0].plain_text}</h3>;
const BulletedListItem = ({ block }: { block: Block }) => <p className="py-1 text-sm" key={block.id}>{block.bulleted_list_item.rich_text[0]?.plain_text}</p>;
const NumberedListItem = ({ block, listNumber }: { block: Block, listNumber: number }) => <span className="py-1 text-sm" key={block.id}>{listNumber}. {block.numbered_list_item.rich_text[0]?.plain_text} <br /></span>;
