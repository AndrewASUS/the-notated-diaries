import React, { useEffect, useState } from "react";
import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import { useStoryStore } from "../store/story";
import ProductCard from "../components/ProductCard";


const HomePage = () => {
    const { getStories, stories } = useStoryStore();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        getStories();
    }, [getStories]);

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev < stories.length - 1 ? prev + 1 : prev
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    if (!stories || stories.length === 0) {
        return (
            <Container maxW="container.md" py={12}>
                <Text
                    fontSize="xl"
                    fontWeight="bold"
                    textAlign="center"
                    mt={10}
                >
                    No stories found 😢
                </Text>
            </Container>
        );
    }

    const slideWidthPercentage = 100 / stories.length;

    return (
        <Container maxW="container.md" py={12}>
            <Text
                fontSize="2xl"
                fontWeight="bold"
                textAlign="center"
                mb={6}
                color="blue.500"
            >
                Current Notations
            </Text>

            <Box
                position="relative"
                width="100%"
                maxW="680px"
                mx="auto"
                userSelect="none"
                mt={6}
            >
                <Box overflow="hidden" width="100%" mx="auto">
                    <Flex
                        width={`${stories.length * 100}%`} 
                        transform={`translateX(-${
                            currentIndex * slideWidthPercentage
                        }%)`}
                        transition="transform 0.4s ease-in-out"
                    >
                        {stories.map((story) => (
                            <Box
                                key={story._id}
                                width={`${slideWidthPercentage}%`}
                                flexShrink={0}
                                display="flex"
                                justifyContent="center"
                                px={2}
                                py={4} 
                                alignItems="flex-start" 
                            >
                                <ProductCard story={story} />
                            </Box>
                        ))}
                    </Flex>
                </Box>

                <Button
                    position="absolute"
                    top="50%"
                    colorScheme="blue"
                    onClick={prevSlide}
                    isDisabled={currentIndex === 0}
                    size="sm"
                    zIndex={10}
                    left={{ base: "5px", md: "-50px" }}
                    transform="translateY(-50%)"
                    width="40px"
                >
                    Prev
                </Button>

                <Button
                    position="absolute"
                    top="50%"
                    colorScheme="blue"
                    onClick={nextSlide}
                    isDisabled={currentIndex === stories.length - 1}
                    size="sm"
                    zIndex={10}
                    right={{ base: "5px", md: "-50px" }}
                    transform="translateY(-50%)"
                    width="40px"
                >
                    Next
                </Button>
            </Box>
        </Container>
    );
};

export default HomePage