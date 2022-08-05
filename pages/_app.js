import "../styles/globals.css";
import { ChakraProvider, Heading } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";

const components = {
  h1: (props) => <Heading {...props} />,
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  );
}

export default MyApp;
