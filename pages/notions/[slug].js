import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { notion } from "../../server/db/client";

const ReceiptPage = ({ receipt, blockChildren }) => {
   return (
      <Box>
         <Heading>Notion Page</Heading>
         <Box>
            <pre>{JSON.stringify(receipt, null, 2)}</pre>
         </Box>
         <Box>
            <pre>{JSON.stringify(blockChildren, null, 2)}</pre>
         </Box>
      </Box>
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
