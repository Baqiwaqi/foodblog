import NextLink from "next/link";
import Image from "next/image";
import { Box, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";

const GridItem = ({ children, post, id, title, thumbnail }) => {
   return (
      <Box w="100%" borderRadius="lg" shadow="md" p={3} >
         <NextLink
            as={`/posts/${id}`}
            href={`/posts/[slug]`}
         >
            <LinkBox cursor="pointer">
               <Image
                  src={thumbnail}
                  alt={title}
                  className="grid-item-thumbnail"
                  placeholder="blur"
                  width="786px"
                  height="432px"
                  objectFit="cover"
                  blurDataURL="https://developers.google.com/static/maps/documentation/streetview/images/error-image-generic.png"
                  loading="lazy"
               />
               <LinkOverlay href={`/posts/${id}`}>
                  <Text mt={2} fontSize={20}>
                     {title}
                  </Text>
               </LinkOverlay>
               <Text fontSize={14} noOfLines={2} >{children}</Text>
            </LinkBox>
         </NextLink>
      </Box >
   );
};

export default GridItem;