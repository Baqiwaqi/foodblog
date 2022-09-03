import { Box, Heading, Text } from "@chakra-ui/react";

const Paragraph = (props) => {
  return (
    <Box>
      <Heading fontSize={16} py={4}>{props.title}</Heading>
      <Text fontSize={12} px={4}>
        {props.children}
      </Text>
    </Box>
  );
}

export default Paragraph;
