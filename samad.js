"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import necessary modules
var inquirer_1 = require("inquirer"); // For interactive command-line user interfaces
var chalk_1 = require("chalk"); // For styling terminal output
var chalk_animation_1 = require("chalk-animation"); // For animating terminal output
// Sample questions for the quiz
var questions = [
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
function startQuiz(questions) {
    return __awaiter(this, void 0, void 0, function () {
        var correctAnswers, _i, questions_1, question, answer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    correctAnswers = 0;
                    _i = 0, questions_1 = questions;
                    _a.label = 1;
                case 1:
                    if (!(_i < questions_1.length)) return [3 /*break*/, 4];
                    question = questions_1[_i];
                    return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                type: "list",
                                name: "answer",
                                message: question.question, // Display the question prompt
                                choices: question.choices, // Display the available choices
                            },
                        ])];
                case 2:
                    answer = (_a.sent()).answer;
                    // Check if the user's answer matches the correct answer
                    if (answer === question.answer) {
                        correctAnswers++;
                    }
                    else {
                        // If the answer is incorrect, display a message and end the quiz
                        console.log(chalk_1.default.red("Incorrect answer! You lose."));
                        return [2 /*return*/, { correct: correctAnswers, total: questions.length }];
                    }
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    // If all answers are correct, display a congratulatory message
                    console.log(chalk_1.default.green("Congratulations! You answered all questions correctly."));
                    return [2 /*return*/, { correct: correctAnswers, total: questions.length }];
            }
        });
    });
}
// Function to display chalk animation for welcome message
function showWelcomeAnimation() {
    var welcomeMessage = "Welcome to the Quiz!";
    var rainbow = chalk_animation_1.default.rainbow(welcomeMessage);
    rainbow.start();
    setTimeout(function () {
        rainbow.stop();
    }, 2000); // Animation stops after 2 seconds
}
// Function to display chalk animation
function showCompletionAnimation() {
    var completionMessage = "Quiz Complete!";
    var rainbow = chalk_animation_1.default.rainbow(completionMessage);
    rainbow.start();
    setTimeout(function () {
        rainbow.stop();
    }, 2000); // Animation stops after 2 seconds
}
// Function to ask user if they want to play again
function askToPlayAgain() {
    return __awaiter(this, void 0, void 0, function () {
        var playAgain;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            type: "confirm",
                            name: "playAgain",
                            message: "Do you want to play again?",
                            default: false,
                        },
                    ])];
                case 1:
                    playAgain = (_a.sent()).playAgain;
                    return [2 /*return*/, playAgain];
            }
        });
    });
}
// Function to display quiz result
function displayResult(result) {
    console.log(chalk_1.default.cyan("\nQuiz Result:"));
    console.log(chalk_1.default.yellow("Correct Answers: ".concat(result.correct)));
    console.log(chalk_1.default.blue("Total Questions: ".concat(result.total)));
    // Calculate and display percentage
    var percentage = (result.correct / result.total) * 100;
    console.log(chalk_1.default.green("Percentage: ".concat(percentage.toFixed(2), "%")));
}
// Main function to run the quiz
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var playAgain, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    playAgain = true;
                    _a.label = 1;
                case 1:
                    if (!playAgain) return [3 /*break*/, 4];
                    // Display welcome message with chalk animation
                    showWelcomeAnimation();
                    console.log(chalk_1.default.blue("\nAnswer the following questions:"));
                    return [4 /*yield*/, startQuiz(questions)];
                case 2:
                    result = _a.sent();
                    // Display quiz result
                    displayResult(result);
                    // Display chalk animation for quiz completion
                    showCompletionAnimation();
                    return [4 /*yield*/, askToPlayAgain()];
                case 3:
                    // Ask the user if they want to play again
                    playAgain = _a.sent();
                    return [3 /*break*/, 1];
                case 4:
                    console.log(chalk_1.default.yellow("Thanks for playing!"));
                    return [2 /*return*/];
            }
        });
    });
}
// Run the Quiz
main();
