import { Box, Heading, Text } from "@chakra-ui/react";

export default function Paragraph({ title, children }) {
  return (
    <Box>
      <Heading fontSize={16} py={4}>{title}</Heading>
      <Text fontSize={12} px={4}>
        {children}
      </Text>
    </Box>
  );
}
