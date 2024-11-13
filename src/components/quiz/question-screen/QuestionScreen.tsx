'use client';
import { Box, Container, Spinner, Text, Flex, Progress, useColorMode } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { useGetQuestionsBySubjectQuery } from '@/store/api/quizApi';
import AnswerOptions from './AnswerOptions';
import { nextQuestion, incrementScore, completeQuiz } from '@/store/slices/quizSlice';

const QuestionScreen = () => {
    const dispatch = useDispatch();
    const { colorMode } = useColorMode();
    const { selectedSubject, currentQuestion } = useSelector(
        (state: RootState) => state.quizReducer
    );

    const {
        data: questions,
        isLoading,
        error,
        isFetching
    } = useGetQuestionsBySubjectQuery(selectedSubject!, {
        skip: !selectedSubject
    });
    
    if (isLoading || isFetching) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minH="100vh">
                <Spinner size="xxl" color="brand.purple.500" />
            </Box>
        );
    }

    if (error || !questions || questions.length === 0) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center">
                <Text color="brand.red">
                    {error ? 'Failed to load questions. Please try again.' : 'No questions available for this subject.'}
                </Text>
            </Box>
        );
    }

    const currentQuestionData = questions[currentQuestion];
    const totalQuestions = questions.length;

    const handleSubmitAnswer = (selectedAnswer: string) => {
        if (selectedAnswer === currentQuestionData.correctAnswer) {
            dispatch(incrementScore());
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestion === totalQuestions - 1) {
            dispatch(completeQuiz());
        } else {
            dispatch(nextQuestion());
        }
    };

    return (
        <Box
            minH="100vh"
            w="100%"
            bg={{ base: 'white', md: 'gray.50' }}
            px={{ base: '0', md: '1rem', lg: '1rem' }}
        >
            <Container
                maxW={{ base: '100%', md: '100%', lg: '72.5rem' }}
                pt={{ base: '4rem', md: '5rem', lg: '7rem' }}
            >
                <Flex
                    direction={{ base: 'column', lg: 'row' }}
                    justify={{ base: 'flex-start', lg: 'space-between' }}
                    gap={{ base: '1rem', lg: '4rem' }}
                >
                    {/* Left side - Question */}
                    <Flex
                        flexDirection='column'
                        w={{ base: '100%', lg: '30rem' }}
                        maxW={{ lg: '50rem' }}
                        px={{ base: '1rem', md: '2rem', lg: 0 }}
                    >
                        {/* Question count */}
                        <Text
                            color="gray.500"
                            fontSize={{ base: '0.875rem', md: '1rem' }}
                            fontStyle="italic"
                            mb={4}
                        >
                            Question {currentQuestion + 1} of {totalQuestions}
                        </Text>

                        {/* Question Text */}
                        <Text
                            fontSize={{ base: '1.25rem', md: '1.5rem', lg: '2rem' }}
                            fontWeight="500"
                            color="gray.900"
                            mb={8}
                            h={{ base: '4rem', lg: '10rem' }}
                        >
                            {currentQuestionData.question}
                        </Text>

                        {/* Progress Bar */}
                        <Progress
                            value={((currentQuestion + 1) / totalQuestions) * 100}
                            size="sm"
                            colorScheme="purple"
                            bg={colorMode === 'dark' ? 'gray.700' : 'gray.100'}
                            borderRadius="full"
                            sx={{
                                '& > div': {
                                    transition: 'all 0.3s ease-in-out',
                                }
                            }}
                        />
                    </Flex>

                    {/* Right Side Answers */}
                    <Box
                        flex="1"
                        maxW={{ lg: '45rem' }}
                        w='100%'
                    >
                        <AnswerOptions
                            answers={currentQuestionData.answers}
                            correctAnswer={currentQuestionData.correctAnswer}
                            onSubmit={handleSubmitAnswer}
                            onNext={handleNextQuestion}
                        />
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default QuestionScreen;