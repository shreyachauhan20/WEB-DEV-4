// Simple JavaScript Quiz Game (Console Version)

// Predefined questions and answers stored in an array of objects
const quiz = [
  { question: "What is the capital of India?", answer: "delhi" },
  { question: "Which planet is known as the Red Planet?", answer: "mars" },
  { question: "What is 5 multiplied by 6?", answer: "30" },
  { question: "Who wrote 'Harry Potter'?", answer: "j.k. rowling" },
  { question: "What is the largest mammal on Earth?", answer: "blue whale" }
];

// Score counter
let score = 0;

// Function to run the quiz
function startQuiz() {
  alert("Welcome to the Quiz! Answer the following questions.");

  for (let i = 0; i < quiz.length; i++) {
    let userInput = prompt(quiz[i].question);

    // If user pressed Cancel
    if (userInput === null) {
      alert("You exited the quiz!");
      return;
    }

    // Normalize input
    userInput = userInput.toLowerCase().trim();

    // Check answer
    if (userInput === quiz[i].answer) {
      alert("Correct!");
      score++;
    } else {
      alert("Wrong! The correct answer is: " + quiz[i].answer);
    }
  }

  // Final score
  alert("Quiz Completed!\nYour final score is: " + score + "/" + quiz.length);
}

// Start the quiz
startQuiz();