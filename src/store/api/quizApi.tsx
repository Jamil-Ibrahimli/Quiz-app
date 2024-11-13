import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { QuizSubject } from '@/types/quiz';

export interface QuizQuestion {
    id: number;
    question: string;
    answers: {
        letter: 'A' | 'B' | 'C' | 'D';
        text: string;
    }[];
    correctAnswer: 'A' | 'B' | 'C' | 'D';
}

export const quizApi = createApi({
    reducerPath: 'quizApi',
    baseQuery: fetchBaseQuery({

        baseUrl: 'http://localhost:3001/'
    }),
    endpoints: (builder) => ({
        getQuestionsBySubject: builder.query<QuizQuestion[], QuizSubject>({
            query: (subject) => subject.toLowerCase(),

            transformResponse: (response: QuizQuestion[]) => {
                if (!response) {
                    throw new Error('No questions found');
                }
                return response;
            },

            keepUnusedDataFor: 300,
        }),
    }),
});

export const { useGetQuestionsBySubjectQuery } = quizApi;