'use client'

import SubjectList from '@/components/quiz/SubjectList'
import ThemeToggle from '@/components/theme/ThemeToggle'
import { Box, Heading, Container, Text, Flex,useColorMode } from '@chakra-ui/react'

export default function Home() {
  const {colorMode,toggleColorMode}=useColorMode()
  return (
    <Box minH="100vh"  position="relative" bg={colorMode==='dark'?'gray.900':'gray.100'}>
      <Container maxW="72.5rem" pt={["40px", "80px", "140px"]} position='relative' >
        <ThemeToggle />
        <Flex
          direction={["column", "column", "row"]}
          justify="space-between"
          align={["flex-start", "flex-start", "flex-start"]}
          gap={["40px", "40px", "80px"]}
          w='72.5rem'
        >
          {/* left side -headings */}
          <Box maxW={["100%", "100%", "500px"]} >
            <Heading
              fontSize={["2.25rem", "2.5rem", "4rem"]}
              color={colorMode==='dark'?'#FFFFFF':'gray.900'}
              fontWeight="300"
              w="28rem"
              mb={2}
              >
              Welcome to the
            </Heading>
            <Heading
              fontSize={["2.25rem", "2.5rem", "4rem"]}
              color={colorMode==='dark'?'#FFFFFF':'gray.900'}
              fontWeight="500"
              w="29rem"
              lineHeight='4rem'
            >
              Frontend Quiz!
            </Heading>
            <Text
              color="gray.500"
              fontSize="1.2rem"
              fontStyle="italic"
              fontWeight={400}
              mt='3rem'
            >
              Pick a subject to get started
            </Text>
          </Box>
          {/* Right side- quiz subjects */}
          <Box w={["100%", "100%", "460"]}>
            <SubjectList />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
