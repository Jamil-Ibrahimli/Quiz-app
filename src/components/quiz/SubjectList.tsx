'use client';
import {  Image,Grid } from '@chakra-ui/react';
import SubjectCard  from './SubjectCard';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSubject } from '@/store/slices/quizSlice';
import { RootState } from '@/store';
import { QuizSubject } from '@/types/quiz';

export const SubjectList = () => {
  const dispatch = useDispatch();
  const selectedSubject = useSelector((state: RootState) => state.quizReducer.selectedSubject);

  
  const subjects: { type: QuizSubject; iconPath: string }[] = [
    { type: 'HTML', iconPath: '/icons/html-icon.png' },
    { type: 'CSS', iconPath: '/icons/css-icon.png' },
    { type: 'JavaScript', iconPath: '/icons/javascript-icon.png' },
    { type: 'Accessibility', iconPath: '/icons/accessibility-icon.png' },
  ];

  return (
    <Grid  w="100%"  gap="1rem" >
      {subjects.map(({ type, iconPath }) => (
        <SubjectCard
          key={type}
          subject={type}
          icon={
            <Image 
              src={iconPath} 
              alt={`${type} icon`}
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
            />
          }
          isSelected={selectedSubject === type}
          onClick={() => dispatch(setSelectedSubject(type))}
        />
      ))}
    </Grid>
  );
};

export default SubjectList
