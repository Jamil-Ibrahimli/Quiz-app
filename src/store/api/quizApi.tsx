import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { QuizSubject } from '@/types/quiz';

interface QuizResponse {
    questions: {
        id: number;
        question: string;
        answers: {
            letter: string;
            text: string;
        }[];
        correctAnswer: string;
    }[];
}

export const quizApi = createApi({
    reducerPath: 'quizApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: '/api/quiz'
    }),
    endpoints: (builder) => ({
        getQuestionsBySubject: builder.query<QuizResponse['questions'], QuizSubject>({
            query: (subject) => `/${subject.toLowerCase()}`,
           
            transformResponse: (response: QuizResponse) => response.questions,
        }),
    }),
});

export const { useGetQuestionsBySubjectQuery } = quizApi;