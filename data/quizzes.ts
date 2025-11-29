import { QuizData } from "@/types/quiz";

export const quizData: QuizData = {
  html: {
    name: "HTML",
    icon: "🌐",
    questions: [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Tech Modern Language",
          "Home Tool Markup Language",
          "Hyperlinks and Text Markup Language",
        ],
        correct: 0,
      },
      {
        question: "Which HTML tag is used for the largest heading?",
        options: ["<heading>", "<h6>", "<h1>", "<head>"],
        correct: 2,
      },
      {
        question: "Which tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<hyperlink>"],
        correct: 1,
      },
      {
        question:
          "What is the correct HTML element for inserting a line break?",
        options: ["<break>", "<lb>", "<br>", "<newline>"],
        correct: 2,
      },
      {
        question:
          "Which attribute is used to provide alternative text for an image?",
        options: ["title", "alt", "src", "longdesc"],
        correct: 1,
      },
      // --- Extra HTML Questions ---
      {
        question:
          "Which element is used to define the document's structure and contents for the browser?",
        options: ["<body>", "<head>", "<meta>", "<title>"],
        correct: 0,
      },
      {
        question:
          "In HTML5, which tag is used to specify a footer for a document or section?",
        options: ["<bottom>", "<footer>", "<end>", "<section>"],
        correct: 1,
      },
    ],
  },
  css: {
    name: "CSS",
    icon: "🎨",
    questions: [
      {
        question: "What does CSS stand for?",
        options: [
          "Creative Style Sheets",
          "Cascading Style Sheets",
          "Computer Style Sheets",
          "Colorful Style Sheets",
        ],
        correct: 1,
      },
      {
        question: "Which property is used to change the background color?",
        options: ["color", "bgcolor", "background-color", "bg-color"],
        correct: 2,
      },
      {
        question: 'How do you select an element with id "demo"?',
        options: [".demo", "#demo", "*demo", "demo"],
        correct: 1,
      },
      {
        question: "Which property is used to change text color?",
        options: ["text-color", "font-color", "color", "text-style"],
        correct: 2,
      },
      {
        question: "What is the default position value in CSS?",
        options: ["relative", "fixed", "static", "absolute"],
        correct: 2,
      },
      // --- Extra CSS Questions ---
      {
        question:
          "Which CSS property is used to control the space between the element's content and its border?",
        options: ["margin", "spacing", "padding", "border-spacing"],
        correct: 2,
      },
      {
        question: "Which selector selects all elements?",
        options: ["#", ".", "*", "@"],
        correct: 2,
      },
    ],
  },
  javascript: {
    name: "JavaScript",
    icon: "⚡",
    questions: [
      {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "Mozilla"],
        correct: 1,
      },
      {
        question: "How do you declare a variable in JavaScript?",
        options: ["variable x", "v x", "var x", "x :="],
        correct: 2,
      },
      {
        question: "Which operator is used for strict equality?",
        options: ["==", "===", "=", "!="],
        correct: 1,
      },
      {
        question: "What is the correct way to write an array?",
        options: [
          'var colors = "red", "green"',
          'var colors = (1:"red", 2:"green")',
          'var colors = ["red", "green"]',
          "var colors = {red, green}",
        ],
        correct: 2,
      },
      {
        question: 'How do you call a function named "myFunction"?',
        options: [
          "call myFunction()",
          "myFunction()",
          "call function myFunction",
          "execute myFunction()",
        ],
        correct: 1,
      },
      // --- Extra JavaScript Questions ---
      {
        question:
          "Which built-in method adds one or more elements to the end of an array and returns the new length?",
        options: ["last()", "push()", "pop()", "add()"],
        correct: 1,
      },
      {
        question:
          "Which statement is used to execute a block of code if a specified condition is true?",
        options: ["switch", "while", "for", "if"],
        correct: 3,
      },
    ],
  },
  react: {
    name: "React",
    icon: "⚛️",
    questions: [
      {
        question: "What is React?",
        options: [
          "A JavaScript library for building UIs",
          "A database",
          "A programming language",
          "A CSS framework",
        ],
        correct: 0,
      },
      {
        question: "What is JSX?",
        options: [
          "A JavaScript extension",
          "A syntax extension for JavaScript",
          "A new programming language",
          "A CSS preprocessor",
        ],
        correct: 1,
      },
      {
        question: "How do you create a component in React?",
        options: [
          "function Component() {}",
          "create Component() {}",
          "component Component() {}",
          "new Component() {}",
        ],
        correct: 0,
      },
      {
        question: "What hook is used for state management?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        correct: 1,
      },
      {
        question: "What is the virtual DOM?",
        options: [
          "A lightweight copy of the actual DOM",
          "A new browser API",
          "A database",
          "A CSS framework",
        ],
        correct: 0,
      },
      // --- Extra React Questions ---
      {
        question:
          "What is the primary way to pass data to a Component in React?",
        options: ["State", "Props", "Context", "Redux"],
        correct: 1,
      },
      {
        question:
          "Which hook is used for side effects in functional components?",
        options: ["useReducer", "useState", "useCallback", "useEffect"],
        correct: 3,
      },
    ],
  },
};
