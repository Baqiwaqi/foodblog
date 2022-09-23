import { ChakraProvider, Heading } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import Layout from "../components/layouts/main";

const components = {
  h1: (props) => <Heading {...props} />,
};

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider>
      <Layout router={router}>
        <MDXProvider components={components}>
          <Component {...pageProps} />
        </MDXProvider>
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
