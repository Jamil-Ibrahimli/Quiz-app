'use client';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadFromLocalStorage } from '@/utils/LocalStorage';
import { restoreState } from '@/store/slices/quizSlice';
import ClientOnly from '../client/ClientOnly';
import { LoadingSpinner } from '../common/LoadingSpinner';


export const QuizStateInitializer = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const savedState = loadFromLocalStorage();
        if (savedState) {
            dispatch(restoreState(savedState));
        }
        setIsLoading(false);
    }, [dispatch]);

    if (isLoading) { 
        return <LoadingSpinner/>
    }

    return <ClientOnly>{children}</ClientOnly>;
};

export default QuizStateInitializer