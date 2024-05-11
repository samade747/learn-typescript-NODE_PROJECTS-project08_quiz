// Import necessary modules
import inquirer from "inquirer"; // For interactive command-line user interfaces
import chalk from "chalk"; // For styling terminal output
import chalkAnimation from "chalk-animation"; // For animating terminal output

// Define types for question and answer
type Question = {
    question: string; // The question itself
    choices: string[]; // Possible choices for the answer
    answer: string; // Correct answer
};

// Define type for quiz result
type QuizResult = {
    correct: number; // Number of correct answers
    total: number; // Total number of questions
};


// Sample questions for the quiz
const questions: Question[] = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris",
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        choices: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
        answer: "William Shakespeare",
    },
    {
        question: "What is the largest mammal?",
        choices: ["Elephant", "Whale", "Giraffe", "Hippo"],
        answer: "Whale",
    },
    {
        question: "What is the chemical symbol for water?",
        choices: ["H2O", "CO2", "NaCl", "O2"],
        answer: "H2O",
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
        answer: "Leonardo da Vinci",
    },
];

// Function to start the quiz
async function startQuiz(questions: Question[]): Promise<QuizResult> {
    let correctAnswers = 0;

    // Loop through each question
    for (const question of questions) {
        // Ask the question and await user input
        const { answer } = await inquirer.prompt([
            {
                type: "list",
                name: "answer",
                message: question.question, // Display the question prompt
                choices: question.choices, // Display the available choices
            },
        ]);

        // Check if the user's answer matches the correct answer
        if (answer === question.answer) {
            correctAnswers++;
        } else {
            // If the answer is incorrect, display a message and end the quiz
            console.log(chalk.red("Incorrect answer! You lose."));
            return { correct: correctAnswers, total: questions.length };
        }
    }

    // If all answers are correct, display a congratulatory message
    console.log(chalk.green("Congratulations! You answered all questions correctly."));
    return { correct: correctAnswers, total: questions.length };
}

// Function to display chalk animation for welcome message
function showWelcomeAnimation() {
    const welcomeMessage = "Welcome to the Quiz!";
    const rainbow = chalkAnimation.rainbow(welcomeMessage);

    rainbow.start();
    setTimeout(() => {
        rainbow.stop();
    }, 2000); // Animation stops after 2 seconds
}

// Function to display chalk animation
function showCompletionAnimation() {
    const completionMessage = "Quiz Complete!";
    const rainbow = chalkAnimation.rainbow(completionMessage);

    rainbow.start();
    setTimeout(() => {
        rainbow.stop();
    }, 2000); // Animation stops after 2 seconds
}

// Function to ask user if they want to play again
async function askToPlayAgain(): Promise<boolean> {
    const { playAgain } = await inquirer.prompt([
        {
            type: "confirm",
            name: "playAgain",
            message: "Do you want to play again?",
            default: false,
        },
    ]);
    return playAgain;
}

// Function to display quiz result
function displayResult(result: QuizResult) {
    console.log(chalk.cyan(`\nQuiz Result:`));
    console.log(chalk.yellow(`Correct Answers: ${result.correct}`));
    console.log(chalk.blue(`Total Questions: ${result.total}`));

    // Calculate and display percentage
    const percentage = (result.correct / result.total) * 100;
    console.log(chalk.green(`Percentage: ${percentage.toFixed(2)}%`));
}

// Main function to run the quiz
async function main() {
    let playAgain = true;
    while (playAgain) {
        // Display welcome message with chalk animation
        showWelcomeAnimation();

        console.log(chalk.blue("\nAnswer the following questions:"));

        // Start the quiz
        const result = await startQuiz(questions);

        // Display quiz result
        displayResult(result);

        // Display chalk animation for quiz completion
        showCompletionAnimation();

        // Ask the user if they want to play again
        playAgain = await askToPlayAgain();
    }

    console.log(chalk.yellow("Thanks for playing!"));
}

// Run the Quiz
main();