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
            state.isQuizStarted = true;
            state.isQuizCompleted = false;
            state.currentQuestion = 0;
            state.score = 0;
        },
        toggleTheme: (state) => {
            state.isDarkMode = !state.isDarkMode
        },
        nextQuestion: (state) => {
            if (state.currentQuestion < 9) {
                state.currentQuestion += 1;
            } else {
                state.isQuizCompleted = true;
            }
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
    nextQuestion,
    incrementScore,
    completeQuiz,
    resetQuiz,

} = quizSlice.actions;

export default quizSlice.reducer;