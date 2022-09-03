import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";

import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import path from "path";
import CustomLink from "../../components/custom-link";
import Layout from "../../components/layouts/posts";
import ResponsiveGrid from "../../components/responsive-grid";
import { Heading, Text, Box } from "@chakra-ui/react";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";


export const ParagraphSection = (props) => {
  return (
    <Box>
      <Heading fontSize={16} py={4}>{props.title}</Heading>
      <Text fontSize={12} px={4}>
        {props.children}
      </Text>
    </Box>
  );
}

const components = {
  a: CustomLink,
  h2: (props) => (<Heading variant="h2" fontSize={18} py={4}{...props} />),
  h3: (props) => (<Heading variant="h3" fontSize={15} py={4} {...props} />),
  p: (props) => (<Text py={2} fontSize={12} {...props} />),
  li: (props) => (<Box as="li" py={1.5} fontSize={12} {...props} />),
  Paragraph: (props) => (<ParagraphSection {...props} />),
  ResponsiveGrid: (props) => (<ResponsiveGrid {...props} />),
  Head,
};

export default function PostPage({ source, frontMatter }) {
  return (
    <Layout meta={frontMatter}>
      <MDXRemote {...source} components={components} />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
