import { Box, Heading, Text, chakra, Flex } from "@chakra-ui/react";

const ProductCard = ({ story }) => {
  return (
    <Flex justify="center" align="center">
      <Box
        as="figure"
        my={8}
        px={4}
        py={6}
        borderLeft="4px solid"
        borderColor="gray.300"
        bg="gray.50"
        rounded="md"
        boxShadow="md"
        color="gray.600"
        width={{ base: "80%", md: "600px" }}
        maxW="100%"
      >
        <Heading mb={4}>{story.title}</Heading>

        <chakra.blockquote>
          <Text fontStyle="italic" mb={4}>
            {story.entry}
          </Text>
        </chakra.blockquote>

        <Text as="figcaption" fontSize="sm" color="gray.600" textAlign="right">
          — <cite>{story.consultant}</cite>
        </Text>
      </Box>
    </Flex>
  );
};

export default ProductCard