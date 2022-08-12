import Image from "next/image";
import { Box, Container, Heading, Text, SimpleGrid, Icon } from "@chakra-ui/react";
import { BsPeople, BsClock } from "react-icons/bs";
export default function PostLayout({ children, meta }) {
  return (
    <Container maxW="container.lg">
      <SimpleGrid columns={[1, null, 2]} spacing={12} py={6}>
        <Image
          src={meta.thumbnail}
          alt={meta.title}
          className="grid-item-thumbnail"
          placeholder="blur"
          width="432px"
          height="686px"
          objectFit="cover"
          blurDataURL="https://developers.google.com/static/maps/documentation/streetview/images/error-image-generic.png"
          loading="lazy"
        />
        <Box>
          <Heading as='h1' size='3xl' py={6}>{meta.title}</Heading>
          <Text fontSize={14} py={6}>{meta.description}</Text>
          <Box display="flex" gap={12}>
            <Box display="flex" alignItems="center" gap={3}>
              <Icon as={BsClock} w={6} h={6} /><Text>{meta.time}</Text>
            </Box>
            <Box display="flex" alignItems="center" gap={3}>
              <Icon as={BsPeople} w={6} h={6} /><Text>{meta.servings}</Text>
            </Box>
          </Box>
        </Box>
      </SimpleGrid>

      {children}
    </Container>
  );
}
