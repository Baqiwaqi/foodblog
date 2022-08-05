import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <Box>
      <Container maxW="container.sm">
        <Heading>Food Blog</Heading>
        <Text>A simple food blog using next.js, chakra-ui, and mdx.</Text>
        <Box>
          {posts.map((post) => (
            <Box key={post.slug}>
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
                href={`/posts/[slug]`}
              >
                <Heading>{post.data.title}</Heading>
              </Link>
              <Text>{post.data.descritption}</Text>
            </Box>
          ))}
        </Box>
      </Container>
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
