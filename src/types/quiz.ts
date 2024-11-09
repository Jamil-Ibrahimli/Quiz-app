
export type QuizSubject = 'HTML' | 'CSS' | 'JavaScript' | 'Accessibility';

export interface QuizState {

    selectedSubject: QuizSubject | null;
    isDarkMode: boolean;
    currentQuestion: number;
    score: number;
    isQuizStarted: boolean;
    isQuizCompleted: boolean;

}
