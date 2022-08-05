import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function PostLayout({ children, meta }) {
  return (
    <Box>
      <Container maxW="container.md">
        <Box>
          <Heading>{meta.title}</Heading>
          <Text>{meta.description}</Text>
        </Box>
        {children}
      </Container>
    </Box>
  );
}
