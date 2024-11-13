
export type QuizSubject = 'HTML' | 'CSS' | 'JavaScript' | 'Accessibility';

export interface QuizState {

    selectedSubject: QuizSubject | null;
    isDarkMode: boolean;
    currentQuestion: number;
    score: number;
    isQuizStarted: boolean;
    isQuizCompleted: boolean;
 

}

export type AnswerLetter = 'A' | 'B' | 'C' | 'D';

export interface Answer {
    letter: AnswerLetter;
    text: string;
}

export interface Question {
    question: string;
    answers: Answer[];
    correctAnswer: AnswerLetter;
}