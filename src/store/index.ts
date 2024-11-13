
import { configureStore } from "@reduxjs/toolkit";
import quizReducer from './slices/quizSlice';
import { quizApi } from "./api/quizApi";

export const store = configureStore({

    reducer: {
        quizReducer,
        [quizApi.reducerPath]: quizApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(quizApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;