import { QuizSubject } from "@/types/quiz";
import { Box, Flex, useColorModeValue, Text, useColorMode } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setSelectedSubject } from "@/store/slices/quizSlice";

interface SubjectCardProps {
    subject: QuizSubject;
    icon: React.ReactNode;
    isSelected: boolean;
    
}

const SubjectCard = ({ subject, icon, isSelected }: SubjectCardProps) => {
    const bgColor = useColorModeValue('white', 'brand.gray.900')
    const borderColor = isSelected ? 'brand.purple.500' : 'brand.gray.100';
    const { colorMode } = useColorMode()
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setSelectedSubject(subject));
    };

    return (
        <Box
            as="button"
            w="full"
            onClick={handleClick}
            transition="all 0.3s ease-in-out"
        >
            <Flex
                align="center"
                borderRadius={{ base: "0.8rem", sm: "1rem", md: "1.2rem", lg: "1.4rem", xl: "1.2rem" }}
                boxShadow="0px 4px 18px rgba(0, 0, 0, 0.2)"
                _hover={{
                    boxShadow: "0px 4px 18px rgba(155, 68, 218, 0.69)",
                    transform: "translateY(-3px)"
                }}
                w={{
                    base: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "100%",
                    xl: "100%"
                }}
                maxW={{
                    base: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "100%"
                }}
                py={{
                    base: "1rem",
                    sm: "1.2rem",
                    md: "1.2rem",
                    lg: "1.2rem",
                    xl: "1.2rem"
                }}
                px={{
                    base: "1.2rem",
                    sm: "1.3rem",
                    md: "1.4rem",
                    lg: "1.5rem",
                    xl: "1.6rem"
                }}
                gap={{
                    base: "1rem",
                    sm: "1.2rem",
                    md: "1.4rem",
                    lg: "1.6rem",
                    xl: "2rem"
                }}
                bg={colorMode === 'dark' ? 'gray.700' : 'white'}
                transition="all 0.2s ease-in-out"
                position="relative"

            >
                <Box
                    w={{
                        base: '2.5rem',
                        sm: '2.5rem',
                        md: '3rem',
                        lg: '3.5rem',
                        xl: '3.5rem'
                    }}
                    h={{
                        base: '2.5rem',
                        sm: '2.5rem',
                        md: '3rem',
                        lg: '3.5rem',
                        xl: '3.5rem'
                    }}
                    display='flex'
                    alignItems='center'
                    justifyContent='center'

                >
                    {icon}
                </Box>
                <Text
                    fontSize={{
                        base: '1rem',
                        sm: '1.2rem',
                        md: '1.4rem',
                        lg: '1.6rem',
                        xl: '1.8rem'
                    }}
                    fontWeight='500'
                    lineHeight={{
                        base: '1rem',
                        sm: '1.2rem',
                        md: '1.4rem',
                        lg: '1.6rem',
                        xl: '1.8rem'
                    }}
                    color={colorMode === 'dark' ? 'white' : 'gray.800'}
                >
                    {subject}
                </Text>
            </Flex>
        </Box>
    )
}

export default SubjectCard;