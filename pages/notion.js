import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/animated/section";
import { NotionGridItem } from "../components/grid-item";
// Notion client
import { Client } from "@notionhq/client";

const notion = new Client({
   auth: "secret_MDPxaQwOwwakhVNOHhBH53aRwixax7ERiYoY7JStd9s"
});


const NotionBlogPage = (posts) => {
   return (
      <Box>
         <Heading>Notion Blog Page</Heading>
         <Box>
            <SimpleGrid columns={[1, 2, 3]} gap={6}>
               {posts.posts.map((post, index) => {
                  const delay = index / 10;
                  return (
                     <Section key={index} delay={delay}>
                        <NotionGridItem
                           post={post}
                           id={post.id}
                           title={post.properties.Name.title[0].plain_text}
                           thumbnail={post.properties.URL.url}
                        >
                           {post.properties.description.rich_text[0].plain_text}
                        </NotionGridItem>
                     </Section>
                  )
               })}
            </SimpleGrid>
         </Box>
         <Box>
            <pre>{JSON.stringify(posts, null, 2)}</pre>
         </Box>
      </Box>
   )
}

export default NotionBlogPage

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



