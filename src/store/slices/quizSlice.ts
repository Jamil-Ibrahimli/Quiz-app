import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuizState, QuizSubject } from "@/types/quiz";
import { saveToLocalStorage,clearLocalStorage, } from "@/utils/LocalStorage";

const initialState: QuizState = {
    selectedSubject: null,
    isDarkMode: false,
    currentQuestion: 0,
    score: 0,
    isQuizStarted: false,
    isQuizCompleted: false,
}

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setSelectedSubject: (state, action: PayloadAction<QuizSubject>) => {
            state.selectedSubject = action.payload
            state.isQuizStarted = true;
            state.isQuizCompleted = false;
            state.currentQuestion = 0;
            state.score = 0;
            saveToLocalStorage(state);
        },
        toggleTheme: (state) => {
            state.isDarkMode = !state.isDarkMode
        },
        nextQuestion: (state) => {
            if (state.currentQuestion < 9) {
                state.currentQuestion += 1;
                saveToLocalStorage(state);
            } else {
                state.isQuizCompleted = true;
                saveToLocalStorage(state);
            }
        },
        incrementScore: (state) => {
            state.score += 1;
            saveToLocalStorage(state);
        },
        completeQuiz: (state) => {
            state.isQuizCompleted = true;
            saveToLocalStorage(state);
        },
        restoreState: (state, action: PayloadAction<QuizState>) => {
            return action.payload; 
        },

        resetQuiz: (state) => {
            clearLocalStorage();
            return initialState
        }

    }

})

export const {
    setSelectedSubject,
    toggleTheme,
    nextQuestion,
    incrementScore,
    completeQuiz,
    restoreState,
    resetQuiz,

} = quizSlice.actions;

export default quizSlice.reducer;