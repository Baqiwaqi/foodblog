import path from "path";
import fs from "fs";
import matter from "gray-matter";
import {
   Box,
   SimpleGrid,
   Heading,
   Text,
   useColorModeValue,
} from "@chakra-ui/react";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import { RecipesGridItem } from "../components/grid-item";
import Section from "../components/animated/section";

export default function Home({ posts }) {
   return (
      <Box>
         <Box>
            <SimpleGrid columns={[1, 2, 3]} gap={6}>
               {posts.map((post, index) => {
                  const delay = index / 10;
                  return (
                     <Section key={index} delay={delay}>
                        <RecipesGridItem
                           post={post}
                           id={post.slug}
                           title={post.data.title}
                           thumbnail={post.data.thumbnail}
                        >
                           {post.data.description}
                        </RecipesGridItem>
                     </Section>
                  )
               })}
            </SimpleGrid>
         </Box>
      </Box>
   );
}

export async function getStaticProps({ params }) {
   const posts = postFilePaths.map((filePath) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
      const { content, data } = matter(source);

      return {
         content,
         data,
         filePath,
      };
   });

   return {
      props: {
         posts: posts
      }
   };
}
