import { QuizState } from '../types/quiz';

const QUIZ_KEY = 'quiz_state';

export const saveToLocalStorage = (state: QuizState) => {
    if (typeof window !== 'undefined') { 
        try {
            localStorage.setItem(QUIZ_KEY, JSON.stringify(state));
        } catch (error) {
            console.error('Error saving to localStorage', error);
        }
    }
};


export const loadFromLocalStorage = (): QuizState | null => {
   
        try {
            const savedState = localStorage.getItem(QUIZ_KEY);
            return savedState ? JSON.parse(savedState) : null;
        } catch (error) {
            console.error('Error loading from localStorage', error);
            return null;
        }
 
};

export const clearLocalStorage = () => {

        try {
            localStorage.removeItem(QUIZ_KEY);
        } catch (error) {
            console.error('Error clearing localStorage', error);
        }
    
};