'use client'
import { Box, useColorMode, Image } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import QuestionScreen from '@/components/quiz/question-screen/QuestionScreen';
import ScoreScreen from '@/components/quiz/score-screen/ScoreScreen';
import WelcomeScreen from '@/components/quiz/welcome-screen/WelcomeScreen';
import { SlideAnimation } from '@/components/animations/SlideAnimation';

const Home = () => {
  const { colorMode } = useColorMode();
  const { isQuizCompleted, isQuizStarted } = useSelector(
    (state: RootState) => state.quizReducer
  );

  const getCurrentScreen = () => {
    if (isQuizStarted && !isQuizCompleted) {
      return {
        component: <QuestionScreen />,
        id: 'quiz'
      };
    }
    if (isQuizStarted && isQuizCompleted) {
      return {
        component: <ScoreScreen />,
        id: 'quiz'
      };
    }
    return {
      component: <WelcomeScreen />,
      id: 'welcome'
    };
  };

  const currentScreen = getCurrentScreen();

  return (
    <Box
      minH='100vh'
      h="100vh"
      w="100%"
      position="relative"
      bg={colorMode === 'dark' ? 'gray.900' : 'gray.100'}
      px={{ base: '0', md: '1rem', lg: '1rem' }}
      transition="all 0.3s ease-in-out"
    >

      <Image
        src='/Ellipse 8.png'
        alt="Circle Background 1"
        position="absolute"
        top={0}
        left={0}
        width="400px"
        opacity="0.1"
        display={{ base: 'none', md: 'block', lg: 'block' }} // Hiden on mobile
      />

      <Image
        src='/Ellipse 9.png'
        alt="Circle Background 2"
        position="absolute"
        bottom={0}
        right={0}
        width="500px"
        opacity="0.1"
        display={{ base: 'none', md: 'none', lg: 'block' }} // Only desktop
      />
      <Image
        src='/Ellipse 8  mobile-dark.png'
        alt="Mobile Background Light"
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        objectFit="cover"
        opacity="0.1"
        display={{ base: 'block', md: 'none', lg: "none" }}  // Only on mobile
      />

      <SlideAnimation id={currentScreen.id}>
        {currentScreen.component}
      </SlideAnimation>
    </Box>
  );
};

export default Home;