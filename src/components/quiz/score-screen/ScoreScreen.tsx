'use client';
import { Box, Container, Flex, Text, Button, Image, useColorMode } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { resetQuiz } from '@/store/slices/quizSlice';

const ScoreScreen = () => {
    const dispatch = useDispatch();
    const { colorMode } = useColorMode();
    const { score, selectedSubject } = useSelector((state: RootState) => state.quizReducer);

    const getSubjectIcon = (subject: string) => {
        const icons = {
            HTML: '/icons/html-icon.png',
            CSS: '/icons/css-icon.png',
            JavaScript: '/icons/javascript-icon.png',
            Accessibility: '/icons/accessibility-icon.png'
        };
        return icons[subject as keyof typeof icons];
    };

    const handlePlayAgain = () => {
        dispatch(resetQuiz());
    };

    return (
        <Box
            minH="100vh"
            w="100%"
            bg={colorMode === 'dark' ? 'gray.900' : 'white'}
            px={{ base: '0', md: '1rem', lg: '1rem' }}
        >
            <Container
                maxW={{ base: '100%', md: '100%', lg: '72.5rem' }}
                pt={{ base: '4rem', md: '5rem', lg: '7rem' }}
            >
                <Flex
                    direction={{ base: 'column', lg: 'row' }}
                    justify={{ base: 'flex-start', lg: 'space-between' }}
                    gap={{ base: '2rem', lg: '8rem' }}
                    px={{ base: '1rem', md: '2rem', lg: 0 }}
                >
                    {/* Left side - Title */}
                    <Box maxW={{ lg: '45rem' }}>
                        <Text
                            fontSize={{ base: '2rem', md: '3rem', lg: '4rem' }}
                            fontWeight="300"
                            color={colorMode === 'dark' ? 'white' : 'gray.900'}
                            mb={4}
                        >
                            Quiz completed
                        </Text>
                        <Text
                            fontSize={{ base: '2rem', md: '3rem', lg: '4rem' }}
                            fontWeight="500"
                            color={colorMode === 'dark' ? 'white' : 'gray.900'}
                        >
                            You scored...
                        </Text>
                    </Box>

                    {/* Right side - Score Card */}
                    <Flex 
                        direction="column" 
                        align="center"
                        maxW={{ base: '100%', lg: '45rem' }}
                    >
                        <Box
                            bg={colorMode === 'dark' ? 'gray.800' : 'white'}
                            borderRadius="2xl"
                            boxShadow="lg"
                            p={8}
                            w="100%"
                            mb={6}
                        >
                            {/* Subject info */}
                            <Flex align="center" gap={4} mb={8}>
                                <Image
                                    src={getSubjectIcon(selectedSubject!)}
                                    alt={`${selectedSubject} icon`}
                                    w={{ base: '2.5rem', md: '3rem' }}
                                    h={{ base: '2.5rem', md: '3rem' }}
                                />
                                <Text
                                    fontSize={{ base: '1.2rem', md: '1.8rem' }}
                                    fontWeight="500"
                                    color={colorMode === 'dark' ? 'white' : 'gray.900'}
                                >
                                    {selectedSubject}
                                </Text>
                            </Flex>

                            {/* Score */}
                            <Flex direction="column" align="center">
                                <Text
                                    fontSize={{ base: '5rem', md: '7rem' }}
                                    fontWeight="500"
                                    color={colorMode === 'dark' ? 'white' : 'gray.900'}
                                    lineHeight="1"
                                    mb={4}
                                >
                                    {score}
                                </Text>
                                <Text
                                    fontSize={{ base: '1.2rem', md: '1.4rem' }}
                                    color="gray.500"
                                >
                                    out of 10
                                </Text>
                            </Flex>
                        </Box>

                        {/* Play Again Button */}
                        <Button
                            w="100%"
                            bg="brand.purple.500"
                            color="white"
                            py={{ base: "1.2rem", md: "1.4rem", lg: "1.6rem" }}
                            fontSize={{ base: "1.2rem", md: "1.4rem", lg: "1.6rem" }}
                            _hover={{
                                bg: "brand.purple.600"
                            }}
                            onClick={handlePlayAgain}
                        >
                            Play Again
                        </Button>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
};

export default ScoreScreen;