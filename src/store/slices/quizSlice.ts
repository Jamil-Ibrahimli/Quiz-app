import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuizState, QuizSubject } from "@/types/quiz";

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
        },
        toggleTheme: (state) => {
            state.isDarkMode = !state.isDarkMode
        },
        startQuiz: (state) => {
            state.isQuizStarted = true;
            state.isQuizCompleted = false;
            state.currentQuestion = 0;
            state.score = 0;
        },
        nextQuestion: (state) => {
            state.currentQuestion += 1;
        },
        incrementScore: (state) => {
            state.score += 1;
        },
        completeQuiz: (state) => {
            state.isQuizCompleted = true;
        },
        resetQuiz: (state) => {
            return initialState
        }

    }

})

export const {
    setSelectedSubject,
    toggleTheme,
    startQuiz,
    nextQuestion,
    incrementScore,
    completeQuiz,
    resetQuiz,

} = quizSlice.actions;

export default quizSlice.reducer;