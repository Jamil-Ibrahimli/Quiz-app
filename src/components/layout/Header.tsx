'use client'
import { Box, Flex, Container, Image, Text, useColorMode } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import ThemeToggle from '../theme/ThemeToggle';
import { QuizSubject } from '@/types/quiz';

const Header = () => {
    const { colorMode } = useColorMode();
    const { selectedSubject, isQuizStarted } = useSelector((state: RootState) => state.quizReducer);

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

        <Box position='fixed' w='100%' zIndex={10} >
            <Container
                display='flex'
                pt={{ base: '1.6rem', md: '2rem' }}
                position='relative'
                w={{ base: '100%', md: '100%', lg: '72.5rem' }}
                h={{ base: '2rem', md: '2.5rem', lg: '3rem' }}
                maxW={{ base: '100%', md: '100%', lg: '100%', xl: '100%' }}
                justifyContent='space-between' alignContent='start'
            >
                {(isQuizStarted && selectedSubject) ? (<Flex align="center" gap={4}>
                    <Image
                        src={getSubjectIcon(selectedSubject)}
                        alt={`${selectedSubject} icon`}
                        w={{ base: '2rem', md: '2.5rem', lg: '3rem' }}
                        h={{ base: '2rem', md: '2.5rem', lg: '3rem' }}
                    />
                    <Text
                        fontSize={{ base: '1.2rem', md: '1.5rem', lg: '1.8rem' }}
                        fontWeight="500"
                        color={colorMode === 'dark' ? 'white' : 'brand.gray.900'}
                    >
                        {selectedSubject}
                    </Text>
                </Flex>) : <div></div>}
                <ThemeToggle />
            </Container>
        </Box>
    )
}

export default Header
