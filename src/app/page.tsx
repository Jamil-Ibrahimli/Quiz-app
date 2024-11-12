'use client'

import QuestionScreen from '@/components/quiz/question-screen'
import SubjectList from '@/components/quiz/SubjectList'
import ThemeToggle from '@/components/theme/ThemeToggle'
import { RootState } from '@/store'
import { Box, Heading, Container, Text, Flex, useColorMode } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isQuizCompleted, isQuizStarted } = useSelector((state: RootState) => state.quizReducer)

  if (isQuizStarted && !isQuizCompleted) {
    return <QuestionScreen />
  }
  
  return (
    <Box h="100vh"
      w="100%"
      position="relative"
      bg={colorMode === 'dark' ? 'gray.900' : 'gray.100'}
      px={{ base: '0', md: '1rem', lg: '1rem' }}
      transition="all 0.3s ease-in-out"
    >

      <Container w={{ base: '100%', md: '100%', lg: '72.5rem' }}
        maxW={{ base: '100%', md: '100%', lg: '100%', xl: '100%' }}
        position='relative'
        border='0.1px solid transparent'

      >

        <Flex
          direction={{ base: 'column', lg: 'row' }}
          justify={{ base: 'left', md: 'left', lg: 'space-between' }}
          align={{ base: 'left', lg: 'flex-start' }}
          gap={{ base: '1rem', md: '2.5rem', lg: '3rem', xl: '5rem' }}
          mt={{ base: '6rem', md: '8rem', lg: '10rem' }}

        >
          {/* left side text */}
          <Box maxW={{ base: '100%', md: '100%', lg: '31.25rem' }}
            textAlign={{ base: 'left', lg: 'left' }}

          >
            <Heading
              fontSize={{ base: '1.5rem', md: '2.5rem', lg: '4rem' }}
              color={colorMode === 'dark' ? '#FFFFFF' : 'gray.900'}
              fontWeight="300"
              w={{ base: '100%', md: '100%', lg: '100%' }}
              mb={{ base: '1rem', md: '1.5rem', lg: '2rem' }}
              lineHeight={{ base: '1rem', md: '3rem', lg: '4rem' }}

            >
              Welcome to the
            </Heading>
            <Heading
              fontSize={{ base: '1.5rem', md: '2.5rem', lg: '4rem' }}
              color={colorMode === 'dark' ? '#FFFFFF' : 'gray.900'}
              fontWeight="500"
              w={{ base: 'auto', md: 'auto', lg: '29rem' }}
              lineHeight={{ base: '1rem', md: '3rem', lg: '4rem' }}
            >
              Frontend Quiz!
            </Heading>
            <Text
              color="gray.500"
              fontSize={{ base: '0.875rem', md: '1rem', lg: '1.2rem' }}
              fontStyle="italic"
              fontWeight={400}
              mt={{ base: '1.5rem', md: '2rem', lg: '3rem' }}
            >
              Pick a subject to get started
            </Text>
          </Box>
          {/* right side subjects */}
          <Box w={{ base: "100%", md: '100%', lg: '100%', xl: '100%' }}
            mx={{ base: 'auto', lg: '0' }}
          >
            <SubjectList />
          </Box>
        </Flex>
      </Container>

    </Box>
  )
}
