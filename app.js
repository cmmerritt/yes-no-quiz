// import functions and grab DOM elements

import { countsAsYes } from '../utils.js';

const quizStartButton = document.getElementById('quiz-start-button');
const testResults = document.getElementById('test-results');

// initialize state

// set event listeners to update state and DOM

quizStartButton.addEventListener('click', () => {
    console.log('button clicked');
    alert('Welcome to the quiz!');
    
    const takeTheQuiz = confirm('Do you want to start the quiz?');
    if (!takeTheQuiz) {
        alert('OK! Explore the site, but stay away from big teeth.');
        return;
    }

    const name = prompt('What is your name?');

    let score = 0;

    const answerOne = prompt('Did the Giganotosaurus live in present-day Italy?');
    if (!countsAsYes(answerOne)) score++;

    const answerTwo = prompt('Was the Giganotosaurus larger than the T. rex?');
    if (countsAsYes(answerTwo)) score++;

    const answerThree = prompt('Was the Giganotosaurus an herbivore?');
    if (!countsAsYes(answerThree)) score++;

    const userResults = `Greetings, ${name}. Your score is ${score} out of 3.`;

    testResults.textContent = userResults;

});