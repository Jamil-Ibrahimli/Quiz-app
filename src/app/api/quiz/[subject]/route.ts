import { NextResponse } from "next/server";

type QuizSubject = 'html' | 'css' | 'javascript' | 'accessibility';

interface QuizQuestion {
    id: number;
    question: string;
    answers: {
        letter: string;
        text: string;
    }[];
    correctAnswer: string;
}

const  quizData: Record<QuizSubject, QuizQuestion[]> = {
    "html": [
        {
            "id": 1,
            "question": "What does HTML stand for?",
            "answers": [
                { "letter": "A", "text": "Hyper Text Markup Language" },
                { "letter": "B", "text": "High Tech Modern Language" },
                { "letter": "C", "text": "Hyper Transfer Markup Language" },
                { "letter": "D", "text": "Hyper Text Modern Links" }
            ],
            "correctAnswer": "A"
        },
        {
            "id": 2,
            "question": "Which HTML element is used to define the main heading of a document?",
            "answers": [
                { "letter": "A", "text": "<header>" },
                { "letter": "B", "text": "<h1>" },
                { "letter": "C", "text": "<heading>" },
                { "letter": "D", "text": "<main>" }
            ],
            "correctAnswer": "B"
        },
        {
            "id": 3,
            "question": "What is the correct HTML element for inserting a line break?",
            "answers": [
                { "letter": "A", "text": "<break>" },
                { "letter": "B", "text": "<lb>" },
                { "letter": "C", "text": "<br>" },
                { "letter": "D", "text": "<newline>" }
            ],
            "correctAnswer": "C"
        },
        {
            "id": 4,
            "question": "Which HTML attribute is used to specify an alternate text for an image?",
            "answers": [
                { "letter": "A", "text": "alt" },
                { "letter": "B", "text": "title" },
                { "letter": "C", "text": "description" },
                { "letter": "D", "text": "caption" }
            ],
            "correctAnswer": "A"
        },
        {
            "id": 5,
            "question": "Which HTML element is used to create an unordered list?",
            "answers": [
                { "letter": "A", "text": "<ol>" },
                { "letter": "B", "text": "<list>" },
                { "letter": "C", "text": "<ul>" },
                { "letter": "D", "text": "<dl>" }
            ],
            "correctAnswer": "C"
        },
        {
            "id": 6,
            "question": "What is the correct HTML for creating a hyperlink?",
            "answers": [
                { "letter": "A", "text": "<link href='url'>link</link>" },
                { "letter": "B", "text": "<a url='url'>link</a>" },
                { "letter": "C", "text": "<hyperlink>url</hyperlink>" },
                { "letter": "D", "text": "<a href='url'>link</a>" }
            ],
            "correctAnswer": "D"
        },
        {
            "id": 7,
            "question": "Which HTML element defines navigation links?",
            "answers": [
                { "letter": "A", "text": "<navigation>" },
                { "letter": "B", "text": "<nav>" },
                { "letter": "C", "text": "<links>" },
                { "letter": "D", "text": "<menu>" }
            ],
            "correctAnswer": "B"
        },
        {
            "id": 8,
            "question": "What is the correct HTML for making text bold?",
            "answers": [
                { "letter": "A", "text": "<b>" },
                { "letter": "B", "text": "<bold>" },
                { "letter": "C", "text": "<strong>" },
                { "letter": "D", "text": "Both <b> and <strong> are correct" }
            ],
            "correctAnswer": "D"
        },
        {
            "id": 9,
            "question": "Which HTML attribute specifies an input field should be required?",
            "answers": [
                { "letter": "A", "text": "validate='required'" },
                { "letter": "B", "text": "required" },
                { "letter": "C", "text": "necessary='true'" },
                { "letter": "D", "text": "important='true'" }
            ],
            "correctAnswer": "B"
        },
        {
            "id": 10,
            "question": "Which HTML element is used to specify a footer for a document or section?",
            "answers": [
                { "letter": "A", "text": "<bottom>" },
                { "letter": "B", "text": "<section>" },
                { "letter": "C", "text": "<footer>" },
                { "letter": "D", "text": "<end>" }
            ],
            "correctAnswer": "C"
        }
    ],
    "css": [{
        "id": 1,
        "question": "What does CSS stand for?",
        "answers": [
            { "letter": "A", "text": "Cascading Style Sheets" },
            { "letter": "B", "text": "Colorful Style Sheets" },
            { "letter": "C", "text": "Creative Style System" },
            { "letter": "D", "text": "Computer Style Sheets" }
        ],
        "correctAnswer": "A"
    },
    {
        "id": 2,
        "question": "Which property is used to change the background color in CSS?",
        "answers": [
            { "letter": "A", "text": "color" },
            { "letter": "B", "text": "background-color" },
            { "letter": "C", "text": "bg-color" },
            { "letter": "D", "text": "color-background" }
        ],
        "correctAnswer": "B"
    },
    {
        "id": 3,
        "question": "How do you make text bold in CSS?",
        "answers": [
            { "letter": "A", "text": "font-weight: bold;" },
            { "letter": "B", "text": "text-decoration: bold;" },
            { "letter": "C", "text": "font-style: bold;" },
            { "letter": "D", "text": "weight: bold;" }
        ],
        "correctAnswer": "A"
    },
    {
        "id": 4,
        "question": "Which property is used to control the size of text in CSS?",
        "answers": [
            { "letter": "A", "text": "font-weight" },
            { "letter": "B", "text": "text-size" },
            { "letter": "C", "text": "font-size" },
            { "letter": "D", "text": "text-style" }
        ],
        "correctAnswer": "C"
    },
    {
        "id": 5,
        "question": "How can you center-align text in CSS?",
        "answers": [
            { "letter": "A", "text": "text-align: center;" },
            { "letter": "B", "text": "align: center;" },
            { "letter": "C", "text": "center-text: true;" },
            { "letter": "D", "text": "horizontal-align: center;" }
        ],
        "correctAnswer": "A"
    },
    {
        "id": 6,
        "question": "Which CSS property is used to make the text italic?",
        "answers": [
            { "letter": "A", "text": "font-weight: italic;" },
            { "letter": "B", "text": "font-style: italic;" },
            { "letter": "C", "text": "text-style: italic;" },
            { "letter": "D", "text": "italic: true;" }
        ],
        "correctAnswer": "B"
    },
    {
        "id": 7,
        "question": "What is the correct CSS syntax to change the font of an element?",
        "answers": [
            { "letter": "A", "text": "font: 'Arial';" },
            { "letter": "B", "text": "font-family: Arial;" },
            { "letter": "C", "text": "font-style: 'Arial';" },
            { "letter": "D", "text": "font-type: Arial;" }
        ],
        "correctAnswer": "B"
    },
    {
        "id": 8,
        "question": "How do you select an element with the ID 'main' in CSS?",
        "answers": [
            { "letter": "A", "text": ".main" },
            { "letter": "B", "text": "#main" },
            { "letter": "C", "text": "*main" },
            { "letter": "D", "text": "main" }
        ],
        "correctAnswer": "B"
    },
    {
        "id": 9,
        "question": "Which property is used to add spacing between elements?",
        "answers": [
            { "letter": "A", "text": "padding" },
            { "letter": "B", "text": "spacing" },
            { "letter": "C", "text": "margin" },
            { "letter": "D", "text": "border" }
        ],
        "correctAnswer": "C"
    },
    {
        "id": 10,
        "question": "How do you add a comment in CSS?",
        "answers": [
            { "letter": "A", "text": "// This is a comment" },
            { "letter": "B", "text": "# This is a comment" },
            { "letter": "C", "text": "/* This is a comment */" },
            { "letter": "D", "text": "<!-- This is a comment -->" }
        ],
        "correctAnswer": "C"
    }],
    "javascript": [{
        "id": 1,
        "question": "What is the correct syntax for referring to an external script called 'app.js'?",
        "answers": [
            { "letter": "A", "text": "<script href='app.js'></script>" },
            { "letter": "B", "text": "<script name='app.js'></script>" },
            { "letter": "C", "text": "<script src='app.js'></script>" },
            { "letter": "D", "text": "<script file='app.js'></script>" }
        ],
        "correctAnswer": "C"
    },
    {
        "id": 2,
        "question": "How do you create a function in JavaScript?",
        "answers": [
            { "letter": "A", "text": "function myFunction()" },
            { "letter": "B", "text": "function:myFunction()" },
            { "letter": "C", "text": "function = myFunction()" },
            { "letter": "D", "text": "myFunction function()" }
        ],
        "correctAnswer": "A"
    },
    {
        "id": 3,
        "question": "How do you call a function named 'myFunction'?",
        "answers": [
            { "letter": "A", "text": "call function myFunction()" },
            { "letter": "B", "text": "call myFunction()" },
            { "letter": "C", "text": "myFunction()" },
            { "letter": "D", "text": "Call.myFunction()" }
        ],
        "correctAnswer": "C"
    },
    {
        "id": 4,
        "question": "How can you add a single-line comment in JavaScript?",
        "answers": [
            { "letter": "A", "text": "// This is a comment" },
            { "letter": "B", "text": "<!-- This is a comment -->" },
            { "letter": "C", "text": "# This is a comment" },
            { "letter": "D", "text": "/* This is a comment */" }
        ],
        "correctAnswer": "A"
    },
    {
        "id": 5,
        "question": "What is the correct way to declare a JavaScript variable?",
        "answers": [
            { "letter": "A", "text": "var myVar;" },
            { "letter": "B", "text": "variable myVar;" },
            { "letter": "C", "text": "v myVar;" },
            { "letter": "D", "text": "myVar var;" }
        ],
        "correctAnswer": "A"
    },
    {
        "id": 6,
        "question": "Which operator is used to assign a value to a variable?",
        "answers": [
            { "letter": "A", "text": "*" },
            { "letter": "B", "text": "=" },
            { "letter": "C", "text": "-" },
            { "letter": "D", "text": "+" }
        ],
        "correctAnswer": "B"
    },
    {
        "id": 7,
        "question": "What will the following code output: console.log(typeof NaN);?",
        "answers": [
            { "letter": "A", "text": "'number'" },
            { "letter": "B", "text": "'NaN'" },
            { "letter": "C", "text": "'undefined'" },
            { "letter": "D", "text": "'object'" }
        ],
        "correctAnswer": "A"
    },
    {
        "id": 8,
        "question": "What is the output of '2' + 3 in JavaScript?",
        "answers": [
            { "letter": "A", "text": "5" },
            { "letter": "B", "text": "'23'" },
            { "letter": "C", "text": "undefined" },
            { "letter": "D", "text": "NaN" }
        ],
        "correctAnswer": "B"
    },
    {
        "id": 9,
        "question": "Which method can be used to round a number to the nearest integer in JavaScript?",
        "answers": [
            { "letter": "A", "text": "Math.ceil()" },
            { "letter": "B", "text": "Math.round()" },
            { "letter": "C", "text": "Math.floor()" },
            { "letter": "D", "text": "Math.rnd()" }
        ],
        "correctAnswer": "B"
    },
    {
        "id": 10,
        "question": "How do you find the length of a string in JavaScript?",
        "answers": [
            { "letter": "A", "text": "string.length()" },
            { "letter": "B", "text": "string.length" },
            { "letter": "C", "text": "length(string)" },
            { "letter": "D", "text": "len(string)" }
        ],
        "correctAnswer": "B"
    }],
    "accessibility": [{
        "id": 1,
        "question": "What does 'WCAG' stand for?",
        "answers": [
            { "letter": "A", "text": "Web Content Accessibility Guidelines" },
            { "letter": "B", "text": "Website Compliance Guide" },
            { "letter": "C", "text": "Web Compliance Guide" },
            { "letter": "D", "text": "World Compliance Guide" }
        ],
        "correctAnswer": "A"
    },
    {
        "id": 2,
        "question": "Which HTML attribute adds alternative text to images?",
        "answers": [
            { "letter": "A", "text": "title" },
            { "letter": "B", "text": "alt" },
            { "letter": "C", "text": "description" },
            { "letter": "D", "text": "src" }
        ],
        "correctAnswer": "B"
    },
    {
        "id": 3,
        "question": "Which element organizes content with headings?",
        "answers": [
            { "letter": "A", "text": "<div>" },
            { "letter": "B", "text": "<span>" },
            { "letter": "C", "text": "<section>" },
            { "letter": "D", "text": "<header>" }
        ],
        "correctAnswer": "C"
    },
    {
        "id": 4,
        "question": "What does ARIA improve?",
        "answers": [
            { "letter": "A", "text": "Website security" },
            { "letter": "B", "text": "Website speed" },
            { "letter": "C", "text": "Accessibility for disabled users" },
            { "letter": "D", "text": "SEO" }
        ],
        "correctAnswer": "C"
    },
    {
        "id": 5,
        "question": "Why use 'role' attributes?",
        "answers": [
            { "letter": "A", "text": "To style elements" },
            { "letter": "B", "text": "To add JavaScript" },
            { "letter": "C", "text": "To aid assistive tech" },
            { "letter": "D", "text": "For SEO" }
        ],
        "correctAnswer": "C"
    },
    {
        "id": 6,
        "question": "Which ARIA role indicates navigation?",
        "answers": [
            { "letter": "A", "text": "navigation" },
            { "letter": "B", "text": "banner" },
            { "letter": "C", "text": "main" },
            { "letter": "D", "text": "contentinfo" }
        ],
        "correctAnswer": "A"
    },
    {
        "id": 7,
        "question": "Why are heading levels important?",
        "answers": [
            { "letter": "A", "text": "For SEO" },
            { "letter": "B", "text": "For font size" },
            { "letter": "C", "text": "For screen readers" },
            { "letter": "D", "text": "For page load speed" }
        ],
        "correctAnswer": "C"
    },
    {
        "id": 8,
        "question": "What's the best way to label a form input?",
        "answers": [
            { "letter": "A", "text": "With a <label>" },
            { "letter": "B", "text": "With placeholder text" },
            { "letter": "C", "text": "With a title attribute" },
            { "letter": "D", "text": "Leave it unlabeled" }
        ],
        "correctAnswer": "A"
    },
    {
        "id": 9,
        "question": "Why avoid only using color for info?",
        "answers": [
            { "letter": "A", "text": "It may look unprofessional" },
            { "letter": "B", "text": "Colorblind users may miss it" },
            { "letter": "C", "text": "It slows down loading" },
            { "letter": "D", "text": "It lowers contrast" }
        ],
        "correctAnswer": "B"
    },
    {
        "id": 10,
        "question": "What should 'alt' be if the image is decorative?",
        "answers": [
            { "letter": "A", "text": "Describe the image" },
            { "letter": "B", "text": "Use filename" },
            { "letter": "C", "text": "Leave empty (alt='')" },
            { "letter": "D", "text": "Use 'decorative image'" }
        ],
        "correctAnswer": "C"
    }]
};
export async function GET(
    request: Request,
    { params }: { params: { subject: string } }
) {
    try {
        const subject = params.subject.toLowerCase() as QuizSubject;;
        const questions = quizData[subject];

        if (!questions) {
            return NextResponse.json(
                { error: 'Subject not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ questions });
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
