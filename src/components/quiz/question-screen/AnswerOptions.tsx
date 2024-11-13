'use client'

import { useState,useEffect } from 'react';
import { Box, Button, Grid, Flex, Text, useColorMode } from '@chakra-ui/react';
import { Answer, AnswerLetter } from '@/types/quiz';
import { MdCheckCircle, MdCancel } from 'react-icons/md';

interface AnswersOptionsProps {
    answers: Answer[];
    onSubmit: (selectedAnswer: Answer['letter']) => void
    correctAnswer: AnswerLetter;
    onNext: () => void;
    currentQuestion: number;
}

const AnswerOptions = ({ answers, onSubmit, correctAnswer, onNext,currentQuestion }: AnswersOptionsProps) => {
    const [selectedAnswer, setSelectedAnswer] = useState<Answer['letter'] | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { colorMode } = useColorMode()
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        setSelectedAnswer(null);
        setIsSubmitted(false);
        setShowError(false);
    }, [currentQuestion]);

    const getLetterStyles = (letter: AnswerLetter) => {
        const baseStyles = {
            width: { base: '2.5rem', md: '3rem', lg: '3.5rem' },
            height: { base: '2.5rem', md: '3rem', lg: '3.5rem' },
            borderRadius: '0.8rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: { base: "1.2rem", md: "1.4rem", lg: "1.6rem" },
            fontWeight: "500",
            bg: colorMode === 'dark' ? 'gray.600' : 'gray.100',
            color: colorMode === 'dark' ? 'white' : 'brand.gray.900',
            transition: "all 0.2s ease-in-out",
        };

        if (isSubmitted) {
            if (letter === correctAnswer) {
                return {
                    ...baseStyles,
                    bg: 'brand.green',
                    color: 'white',
                };
            }
            if (letter === selectedAnswer && selectedAnswer !== correctAnswer) {
                return {
                    ...baseStyles,
                    bg: 'brand.red',
                    color: 'white',
                };
            }
            return {
                ...baseStyles,
                opacity: 0.5,
            };
        }

        if (selectedAnswer === letter) {
            return {
                ...baseStyles,
                bg: 'brand.purple.500',
                color: 'white',
            };
        }

        return baseStyles;
    };

    const getAnswerStyles = (letter: AnswerLetter) => {
        const baseStyles = {
            bg: colorMode === 'dark' ? 'gray.700' : 'white',
            borderColor: 'transparent',
            _hover: !isSubmitted ? {
                '.letter-box': {
                    bg: 'brand.purple.600',
                    color: 'white',
                }
            } : undefined
        };

        if (!isSubmitted) {
            if (selectedAnswer === letter) {
                return {
                    ...baseStyles,
                    borderColor: 'brand.purple.500',
                    _hover: {
                        '.letter-box': {
                            bg: 'brand.purple.500',
                            color: 'white',
                        }
                    }
                };
            }
            return baseStyles;
        }

        if (letter === correctAnswer) {
            return {
                ...baseStyles,
                borderColor: 'brand.green',
                _hover: undefined
            };
        }

        if (letter === selectedAnswer && selectedAnswer !== correctAnswer) {
            return {
                ...baseStyles,
                borderColor: 'brand.red',
                _hover: undefined
            };
        }

        return {
            ...baseStyles,
            opacity: 0.5,
            _hover: undefined
        };
    };
    const handleAnswerSelect = (letter: AnswerLetter) => {
        if (!isSubmitted) {
            setSelectedAnswer(letter);
            setShowError(false);
        }
    };
    const handleSubmit = () => {
        if (!selectedAnswer && !isSubmitted) {
            setShowError(true);
            return;
        }
        if (selectedAnswer && !isSubmitted) {
            setIsSubmitted(true);
            setShowError(false);
            onSubmit(selectedAnswer);
        } else if (isSubmitted) {
            onNext();
        }
    };

    return (
        <Box w="100%" >
            <Grid gap="1rem" mb="6">
                {answers.map((answer) => (
                    <Box
                        key={answer.letter}
                        as="button"
                        w="100%"
                        onClick={() => handleAnswerSelect(answer.letter)}
                        transition="all 0.3s ease-in-out"
                    >
                        <Flex
                            align="center"
                            justify="space-between"
                            borderRadius={{ base: "0.8rem", md: "1.2rem", lg: "1.4rem" }}
                            boxShadow="0px 4px 18px rgba(0, 0, 0, 0.1)"
                            border="3px solid"
                            {...getAnswerStyles(answer.letter)}

                            py={{ base: "1rem", md: "1.2rem", lg: "1.2rem" }}
                            px={{ base: "1rem", md: "1.2rem", lg: "1.2rem" }}
                            transition="all 0.2s ease-in-out"
                        >
                            <Flex align="center" gap={4}>
                                <Box
                                    {...getLetterStyles(answer.letter)}
                                    className="letter-box"
                                >
                                    {answer.letter}
                                </Box>

                                <Text
                                    fontSize={{ base: "1.1rem", md: "1.3rem", lg: "1.5rem" }}
                                    fontWeight="500"
                                    color={colorMode === 'dark' ? 'white' : 'brand.gray.900'}
                                >
                                    {answer.text}
                                </Text>
                            </Flex>

                            {isSubmitted && (
                                <Box fontSize="1.5rem">
                                    {answer.letter === correctAnswer ? (
                                        <MdCheckCircle color="#26D782" />
                                    ) : answer.letter === selectedAnswer ? (
                                        <MdCancel color="#EE5454" />
                                    ) : null}
                                </Box>
                            )}
                        </Flex>
                    </Box>
                ))}
            </Grid>


            <Button
                w="100%"
                bg="brand.purple.500"
                color="white"
                borderRadius={{ base: '5px', md: '10px', lg: '15px' }}
                py={{ base: "1.2rem", md: "1.4rem", lg: "2.6rem" }}
                fontSize={{ base: "1.2rem", md: "1.4rem", lg: "1.6rem" }}
                _hover={{
                    bg: "brand.purple.600"
                }}

                onClick={isSubmitted ? onNext : handleSubmit}
            >
                {isSubmitted ? 'Next Question' : 'Submit Answer'}
            </Button>
            {showError && (
                <Flex
                    justify="center"
                    align="center"
                    mt={4}
                    color="#EE5454"
                    gap={2}
                >
                    <Box as="span" color="#EE5454">
                        <MdCancel size={20} />
                    </Box>
                    <Text
                        fontSize={{ base: '0.875rem', md: '1rem' }}
                        color="#EE5454"
                    >
                        Please select an answer
                    </Text>
                </Flex>
            )}
        </Box>
    );

}

export default AnswerOptions