'use client'

import { Box, Container } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import QuestionCard from './QuestionCard';
import AnswerOptions from './AnswerOptions';
import { Answer, AnswerLetter } from '@/types/quiz';
import { nextQuestion, incrementScore } from '@/store/slices/quizSlice';

const QuestionScreen = () => {
    const dispatch = useDispatch();
    const { currentQuestion } = useSelector((state: RootState) => state.quizReducer);

    const mockQuestion: {
        question: string;
        answers: Answer[];
        correctAnswer: AnswerLetter;
    } = {
        question: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
        answers: [
            { letter: 'A', text: '4.5:1' },
            { letter: 'B', text: '3:1' },
            { letter: 'C', text: '2.5:1' },
            { letter: 'D', text: '5:1' }
        ],
        correctAnswer: "A"
    };
    const handleSubmitAnswer = (selectedAnswer: Answer['letter']) => {
        if (selectedAnswer === mockQuestion.correctAnswer) {
            dispatch(incrementScore());
        }
        console.log('Selected answer:', selectedAnswer);
    };
    const handleNextQuestion = () => {
        dispatch(nextQuestion());
    };
    return (
        <Box
            minH="100vh"
            w="100%"
            pt="5rem"
            px={{ base: '0', md: '1rem', lg: '1rem' }}
        >
            <Container
                w={{ base: '100%', md: '100%', lg: '72.5rem' }}
                maxW={{ base: '100%', md: '100%', lg: '100%' }}
                display='flex'
                flexDirection={{base:'column',lg:'row'}}
                mt={{ base: '6rem', md: '8rem', lg: '5rem' }}
            >
                <QuestionCard
                    questionNumber={currentQuestion + 1}
                    totalQuestions={10}
                    question={mockQuestion.question}
                />
                <AnswerOptions
                    answers={mockQuestion.answers}
                    correctAnswer={mockQuestion.correctAnswer}
                    onSubmit={handleSubmitAnswer}
                    onNext={handleNextQuestion}
                />
            </Container>
        </Box>
    );
}

export default QuestionScreen;