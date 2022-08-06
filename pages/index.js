import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { RecipesGridItem } from "../components/grid-item";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <Box>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={3}
        mb={6}
        align="center"
        shadow="md"
      >
        <Text>A simple food blog using next.js, chakra-ui, and mdx.</Text>
      </Box>
      <Box>
        <Heading as="h4" size="sm" mb={2}>
          New Recipes
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {posts.map((post) => (
            <RecipesGridItem
              key={post.slug}
              post={post}
              id={post.slug}
              title={post.data.title}
              thumbnail={post.data.thumbnail}
            >
              {post.data.description}
            </RecipesGridItem>
          ))}
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

  return { props: { posts: posts } };
}
