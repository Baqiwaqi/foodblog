import { SimpleGrid } from "@chakra-ui/react";

export default function ResponsiveGrid({ children }) {
  return (
    <SimpleGrid columns={[1, null, 2]} spacing={2}>
      {children}
    </SimpleGrid>
  );
}