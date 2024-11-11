import { QuizSubject } from "@/types/quiz";
import { Box, Flex, useColorModeValue, Text, useColorMode } from "@chakra-ui/react";

interface SubjectCardProps {
    subject: QuizSubject;
    icon: React.ReactNode;
    isSelected: boolean;
    onClick: () => void;
}

const SubjectCard = ({ subject, icon, isSelected, onClick }: SubjectCardProps) => {

    const bgColor = useColorModeValue('white', 'brand.gray.900')
    const borderColor = isSelected ? 'brand.purple.500' : 'brand.gray.100';
    const {colorMode}=useColorMode()

    return (
        <Box
            as="button"
            w="full"
            onClick={onClick}
            transition={'all 0.5s'}
        >
            <Flex
                align="center"
                borderRadius="0.8rem"
                boxShadow="0px 4px 18px rgba(0, 0, 0, 0.2)"
                _hover={{ boxShadow: "0px 4px 18px rgba(150, 75, 204, 0.58)" }}
                w='35rem'
                p='1.2rem'
                gap='2rem'
                bg={colorMode === 'dark' ? 'gray.700' : 'white'}
            >
                <Box mr={4} w='3.5rem' h='3.5rem'>
                    {icon}
                </Box>
                <Text fontSize='1.8rem'
                    fontWeight='500'
                    lineHeight='1.8rem'
                    color={colorMode === 'dark' ? 'white' : 'gray.800'}

                >
                    {subject}
                </Text>
            </Flex>
        </Box >
    )
}

export default SubjectCard
