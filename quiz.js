// Simple JavaScript Quiz Game (Console Version)

// Predefined questions and answers stored in an array of objects
const quiz = [
  { question: "What is the chemical symbol gold", answer: "Au" },
  { question: "How many days in leap year?", answer: "366" },
  { question: "How many heart does an Octopus have?", answer: "3" },
  { question: "Who wrote play Romeo and Juliet?", answer: "William Shakesspeare" },
  { question: "What famous play feature the line:To Be or Not To Be", answer: "Hamlet" }
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
