import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/animated/section";
import GridItem from "../components/grid-item";
// Notion client
import { notion } from "../server/db/client";

const Home = (posts) => {
   return (
      <Box>
         <SimpleGrid columns={[1, 2, 3]} gap={6}>
            {posts.posts.map((post, index) => {
               const delay = index / 10;
               return (
                  <Section key={index} delay={delay}>
                     <GridItem
                        post={post}
                        id={post.id}
                        title={post.properties.name.title[0].plain_text}
                        thumbnail={post.properties.URL.url}
                     >
                        {post.properties.description.rich_text[0].plain_text}
                     </GridItem>
                  </Section>
               )
            })}
         </SimpleGrid>
      </Box>
   )
}

export default Home;

export const getServerSideProps = async () => {
   const dbID = "42572b66501d405798dfd90a51b13415"
   const response = await notion.databases.query({
      database_id: dbID
   });
   console.log(response);
   return {
      props: {
         posts: response.results
      }
   }
}

