'use client'
import { Box, Flex, Image, Text, Progress, useColorMode } from '@chakra-ui/react';
import { QuizSubject } from '@/types/quiz';

interface QuestionCardProps {
    questionNumber: number;
    totalQuestions: number;
    question: string;
}
const QuestionCard = ({
    questionNumber,
    totalQuestions,
    question,
}: QuestionCardProps) => {
    const { colorMode } = useColorMode()
    const getSubjectIcon = (subject: QuizSubject) => {
        const icons = {
            HTML: '/icons/html-icon.png',
            CSS: '/icons/css-icon.png',
            JavaScript: '/icons/javascript-icon.png',
            Accessibility: '/icons/accessibility-icon.png'
        };
        return icons[subject];
    };
    return (
        <Box
            w='100%'
            mb={8}
            px={{ base: '1.2rem', md: '2rem', lg: '2.5rem' }}
        >
            <Text color="gray.500"
                fontSize={{ base: '0.875rem', md: '1rem', lg: '1.2rem' }}
                fontStyle={"italic"}
                mb={4}
            >
                Question {questionNumber} of {totalQuestions}
            </Text>
            <Text
                fontSize={{ base: '1.2rem', md: '1.5rem', lg: '2rem' }}
                fontWeight='500'
                color={colorMode === 'dark' ? 'white' : 'brand.gray.900'}
                mb={{base:"1rem",md:'6rem',lg:'10rem'}}
            >
                {question}
            </Text>
            <Progress
                value={(questionNumber / totalQuestions) * 100}
                size="sm"
                colorScheme="purple"
                bg={colorMode === 'dark' ? 'gray.700' : 'gray.100'}
                borderRadius="full"
                
            />
        </Box>
    )
}
export default QuestionCard;