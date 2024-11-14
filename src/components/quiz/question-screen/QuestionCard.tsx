'use client'
import { Box,  Text,  useColorMode } from '@chakra-ui/react';

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
   
    return (
        <Box
            w='100%'
            mb={1}
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
          
        </Box>
    )
}
export default QuestionCard;