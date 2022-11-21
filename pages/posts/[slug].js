import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { notion } from "../../server/db/client";
import LayOut from "../../components/layouts/notions";

const ReceiptPage = ({ receipt, blockChildren }) => {
   const { properties } = receipt;
   let listNumber = 0;

   return (
      <LayOut
         thumbnail={properties.URL?.url}
         title={properties.name.title[0]?.plain_text}
         description={properties.description.rich_text[0]?.plain_text}
         time={properties.time_in_minutes.rich_text[0]?.plain_text}
         servings={properties.servings.rich_text[0]?.plain_text}
      >
         {blockChildren.results.map((block) => {

            if (block.type !== "numbered_list_item") {
               listNumber = null;
            }

            if (block.type === "paragraph") {

               return (
                  <Text py={1} fontSize={12} key={block.id}>
                     {block.paragraph.rich_text[0]?.plain_text}
                  </Text>
               );
            }

            if (block.type === "heading_2") {
               return (
                  <Heading variant="h2" fontSize={18} pt={4} pb={2} key={block.id}>
                     {block.heading_2.rich_text[0].plain_text}
                  </Heading>
               )
            }

            if (block.type === "heading_3") {
               return (
                  <Heading variant="h3" fontSize={15} pt={2} pb={1} key={block.id}>
                     {block.heading_3.rich_text[0].plain_text}
                  </Heading>
               )
            }

            if (block.type === "bulleted_list_item") {
               return (
                  <Text py={1} fontSize={12} key={block.id}>
                     - {block.bulleted_list_item.rich_text[0]?.plain_text}
                  </Text>
               )
            }

            if (block.type === "numbered_list_item") {
               listNumber++;
               return (
                  <Text py={1.5} fontSize={12} key={block.id}>
                     {listNumber}. {block.numbered_list_item.rich_text[0]?.plain_text}
                  </Text>
               )
            }
         })}
      </LayOut >
   )
}

export default ReceiptPage

export const getServerSideProps = async (context) => {
   // get slug from context
   const { slug } = context.query;
   // get notion page
   const response = await notion.pages.retrieve({
      page_id: slug
   });
   // get block children
   const blockChildren = await notion.blocks.children.list({
      block_id: slug
   });
   console.log(blockChildren);
   return {
      props: {
         receipt: response,
         blockChildren: blockChildren
      }
   }

}
