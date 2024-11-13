import { loadFromLocalStorage } from '@/utils/LocalStorage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


export const useQuizState = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const savedState = loadFromLocalStorage();
        if (savedState) {
            dispatch({ type: 'quiz/restoreState', payload: savedState });
        }
    }, [dispatch]);
};