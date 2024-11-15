'use client';
import { Box, Container, Text, Flex, Progress, useColorMode, Button } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { useGetQuestionsBySubjectQuery } from '@/store/api/quizApi';
import AnswerOptions from './AnswerOptions';
import { nextQuestion, incrementScore, completeQuiz, resetQuiz } from '@/store/slices/quizSlice';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import { AnimatePresence, motion } from 'framer-motion';


const MotionBox = motion(Box)

const QuestionScreen = () => {
    const dispatch = useDispatch();
    const { colorMode } = useColorMode();
    const { selectedSubject, currentQuestion } = useSelector(
        (state: RootState) => state.quizReducer
    );

    const variants = {
        enter: {
            x: 3000,  // Enter from right
            opacity: 0
        },
        center: {
            x: 0,
            opacity: 1
        },
        exit: {
            x: 3000,  // Exit to left
            opacity: 0
        }
    };

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
            <LoadingSpinner />

        );
    }

    if (error || !questions || questions.length === 0) {
        return (
            <Box display="flex" justifyContent="center"
                alignItems="center" gap='1rem' h='100vh' flexDirection="column">
                <Text color="brand.red" >
                    {error ? 'Failed to load questions. Please try again.' : 'No questions available for this subject.'}
                </Text>
                <Button onClick={() => dispatch(resetQuiz())} bg="purple.500">Home</Button>
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
            setTimeout(() => {
                dispatch(completeQuiz());
            }, 1000);
        } else {
            dispatch(nextQuestion());
        }
    };

    return (
        <Box
            minH="100vh"
            w="100%"
            px={{ base: '0', md: '1rem', lg: '1rem' }}
            overflow='hidden'
            zIndex={10}
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
                            fontSize={{ base: '1rem', md: '1.5rem', lg: '2rem' }}
                            fontWeight="500"
                            color={colorMode === 'dark' ? "white" : 'gray.900'}
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
                            bg={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
                            borderRadius="full"
                            sx={{
                                '& > div': {
                                    transition: 'all 0.3s ease-in-out',
                                }
                            }}
                            mt={{ sm: '4rem', md: '6rem', xl: '8rem' }}
                        />
                    </Flex>

                    {/* Right Side Answers */}
                    <AnimatePresence mode='wait' initial={false} >
                        <MotionBox key={currentQuestion}
                            w={{ base: '100%', sm: '100%', md: '100%', lg: '25rem', xl: '30rem' }}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            variants={variants}
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.1 }
                            }}>
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
                                    currentQuestion={currentQuestion}
                                />
                            </Box>
                        </MotionBox>
                    </AnimatePresence>
                </Flex>

            </Container>
        </Box>
    );
};

export default QuestionScreen;