const questionsArr = ['nature', 'prepositions', 'test'];
const questions = {
    nature: [
        {   
            question: "Wind is...",
            questionRussian: "Ветер - это...",
            answers: [
                "a flash of light",
                "a movement of air",
                "a very loud noise in the sky",
                "water falling from the sky"
            ],
            answersRussian: [
                "вспышка света",
                "движение воздуха",
                "очень громкий шум в небе",
                "вода, падающая с неба"
            ],
            instruction: 'Choose the right answer',
            instructionRussian: 'Выбери правильный ответ',
            rightAnswerIndex: 1
        },
        {
            question: "Rain is...",
            questionRussian: "Дождь - это...",
            answers: [
                "a flash of light",
                "a movement of air",
                "water falling from the sky",
                "a very loud noise in the sky"
            ],
            answersRussian: [
                "вспышка света",
                "движение воздуха",
                "вода, падающая с неба",
                "очень громкий шум в небе"
            ],
            instruction: 'Choose the right answer',
            instructionRussian: 'Выбери правильный ответ',
            rightAnswerIndex: 2
        },
        {
            question: "Very strong and destructive winds is called...",
            questionRussian: "Очень сильный и разрушительный ветер называют...",
            answers: [
                "thunder",
                "lightning",
                "rain",
                "hurricane"
            ],
            answersRussian: [
                "гром",
                "молния",
                "дождь",
                "ураган"
            ],
            instruction: 'Choose the right answer',
            instructionRussian: 'Выбери правильный ответ',
            rightAnswerIndex: 3
        },
        {
            question: "Bright flashes in the sky are...",
            questionRussian: "Яркие вспышки на небе - это...",
            answers: [
                "rain",
                "thunder",
                "lightning",
                "wind"
            ],
            answersRussian: [
                "дождь",
                "гром",
                "молния",
                "ветер"
            ],
            instruction: 'Choose the right answer',
            instructionRussian: 'Выбери правильный ответ',
            rightAnswerIndex: 2
        },
        {
            question: "A strong rumble and crackling during a lightning strike is...",
            questionRussian: "Сильный грохот и треск во время удара молнии - это...",
            answers: [
                "thunder",
                "wind",
                "rain",
                "lightning"
            ],
            answersRussian: [
                "гром",
                "ветер",
                "дождь",
                "молния",
            ],
            instruction: 'Choose the right answer',
            instructionRussian: 'Выбери правильный ответ',
            rightAnswerIndex: 0
        }
    ],
    prepositions: [
        {}
    ],
    test: [
        {}
    ]
};
const sections = document.querySelector('#sections');
const exercise = document.querySelector('#exercise');
const sectionTitle = document.querySelector('#sectionTitle');
const question = document.querySelector('#question');
const answers = document.querySelector('#answers');
const message = document.querySelector('#message');
const instruction = document.querySelector('#instruction');
let chosenSection = null;
let count = 0;
let chosenAnswer = 0;
let rightAnswerIsGiven = false;


const showSections = () => {
    for (let i = 0; i < questionsArr.length; i+=2) {
        if (i+1 < questionsArr.length-1) {
            sections.innerHTML += `
            <div class='row'>     
                <div class='column'> <button class='sectionButton'>${questionsArr[i]}</button> </div>
                <div class='column'> <button class='sectionButton'>${questionsArr[i+1]}</button> </div>
            </div>`;  
        } else {
            sections.innerHTML += `
            <div class='row'>     
                <div class='column'> <button class='sectionButton'>${questionsArr[i]}</button> </div>
            </div>`;  
        }
    }
};

const showPossibleAnswers = () => {
    let result = '';

    for (let i = 0; i < questions[chosenSection][count].answers.length; i++) {
        if (i == 0) {
            result += `<button class='possibleAnswer selectedAnswer'>${questions[chosenSection][count].answers[i]}</button>`;
        } else {
            result += `<button class='possibleAnswer'>${questions[chosenSection][count].answers[i]}</button>`;
        }
    }

    answers.innerHTML = result;
}

const openExercise = (event) => {
    if (event.target.tagName == 'BUTTON') {
        chosenSection = event.target.textContent;
        sections.className = 'hidden';
        exercise.className = 'verticalContainer';
        sectionTitle.textContent = chosenSection.toUpperCase();
        instruction.textContent = questions[chosenSection][count].instruction;
        question.textContent = questions[chosenSection][count].question;
        showPossibleAnswers();
    }
}

const chooseAnswerWithArrows = (event) => {
    if (chosenSection != null && !rightAnswerIsGiven) {
        const possibleAnswers = document.querySelectorAll('.possibleAnswer');

        if (event.key == 'ArrowUp') {
            if (chosenAnswer > 0) {
                chosenAnswer--;
            }
        } else if (event.key == 'ArrowDown') {
            if (chosenAnswer < questions[chosenSection][count].answers.length-1) {
                chosenAnswer++;
            }
        }
  
        for (let i = 0; i < questions[chosenSection][count].answers.length; i++) {
            if (i == chosenAnswer) {
                if (possibleAnswers[i].className == 'possibleAnswer selectedWrongAnswer') {
                    possibleAnswers[i].className = 'possibleAnswer selectedWrongAnswer';
                } else if (possibleAnswers[i].className == 'possibleAnswer wrongAnswer') {
                    possibleAnswers[i].className = 'possibleAnswer selectedWrongAnswer';
                } else {
                    possibleAnswers[i].className = 'possibleAnswer selectedAnswer';
                }
            } else {
                if (possibleAnswers[i].className == 'possibleAnswer selectedWrongAnswer') {
                    possibleAnswers[i].className = 'possibleAnswer wrongAnswer';
                } else if (possibleAnswers[i].className == 'possibleAnswer wrongAnswer') {
                    possibleAnswers[i].className = 'possibleAnswer wrongAnswer';
                } else {
                    possibleAnswers[i].className = 'possibleAnswer';
                }
            }
        }
    }
}

const checkAnswer = (event) => {
    if (chosenSection != null && event.key == 'Enter') {
        const possibleAnswers = document.querySelectorAll('.possibleAnswer');

        if (chosenAnswer == questions[chosenSection][count].rightAnswerIndex) {
            message.textContent = 'Good job! Press "space" to change question';
            possibleAnswers[chosenAnswer].className = 'possibleAnswer rightAnswer';
            rightAnswerIsGiven = true;
        } else {
            message.textContent = 'Try again!';
            possibleAnswers[chosenAnswer].className = 'possibleAnswer selectedWrongAnswer';
        }
    }
}

const changeQuestion = (event) => {
    if (rightAnswerIsGiven == true && event.key == ' ') {
        if (count < questions[chosenSection].length-1) {
            count++;
            chosenAnswer = 0;
            instruction.textContent = questions[chosenSection][count].instruction;
            question.textContent = questions[chosenSection][count].question;
            message.textContent = '';
            rightAnswerIsGiven = false;
            showPossibleAnswers();
        } else if (count == questions[chosenSection].length-1) {
            returnToSections();
        }
    } 
}


const returnToSections = () => {
    sections.className  = 'verticalContainer';
    exercise.className  = 'hidden';
    chosenSection = null;
    count = 0;
    sectionTitle.textContent = '';
    answers.innerHTML = '';
    chosenAnswer = 0;
    message.textContent = '';
    instruction.textContent = '';
    rightAnswerIsGiven = false;
}

window.addEventListener('DOMContentLoaded', showSections);
document.querySelector('#sections').addEventListener('click', openExercise);
document.querySelector('#exitButton').addEventListener('click', returnToSections);
window.addEventListener('keydown', chooseAnswerWithArrows);
window.addEventListener('keydown', checkAnswer);
window.addEventListener('keydown', changeQuestion);