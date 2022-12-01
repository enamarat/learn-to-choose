const questionsArr = ['nature', 'test1', 'test2', 'test3'];
const questionsArrRus = ['природа', 'тест1', 'тест2', 'тест3'];
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
            instruction: 'Choose the right answer.',
            instructionRussian: 'Выбери правильный ответ.',
            rightAnswerIndex: 1,
            hint: "Wind is a movement of air.",
            hintRussian: "Ветер - это движение воздуха"
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
            instruction: 'Choose the right answer.',
            instructionRussian: 'Выбери правильный ответ.',
            rightAnswerIndex: 2,
            hint: "Rain is water falling from the sky.",
            hintRussian: "Дождь - это вода, падающая с неба."
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
            instruction: 'Choose the right answer.',
            instructionRussian: 'Выбери правильный ответ.',
            rightAnswerIndex: 3,
            hint: "Hurricane is a very strong and destructive wind.",
            hintRussian: "Ураган - это очень сильный и разрушительный ветер."
        },
        {
            question: "Bright flash in the sky is a...",
            questionRussian: "Яркая вспышка на небе - это...",
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
            instruction: 'Choose the right answer.',
            instructionRussian: 'Выбери правильный ответ.',
            rightAnswerIndex: 2,
            hint: "Lightning is a bright flash the sky.",
            hintRussian: "Молния - это яркая вспышка в небе."
        },
        {
            question: "A strong rumble and crackling during a lightning strike is a...",
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
            instruction: 'Choose the right answer.',
            instructionRussian: 'Выбери правильный ответ.',
            rightAnswerIndex: 0,
            hint: "Thunder is a strong rumble and crackling during a lightning strike.",
            hintRussian: "Гром - это сильный грохот и треск во время удара молнии."
        }
    ],
    test1: [
        {}
    ],
    test2: [
        {}
    ],
    test3: [
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
const hint = document.querySelector('#hint');
const hintText = document.querySelector('#hintText');
const language = document.querySelector('#language');
let chosenSection = null;
let count = 0;
let chosenAnswer = 0;
let rightAnswerIsGiven = false;
let chosenLanguage = 'English';

const showSections = () => {
    let sectionNames = null;
    if (chosenLanguage == 'English') {
        sectionNames = questionsArr;
    } else if (chosenLanguage == 'Russian') {
        sectionNames = questionsArrRus;
    }

    for (let i = 0; i < sectionNames.length; i+=2) {
        if (i+1 < sectionNames.length) {
            sections.innerHTML += `
            <div class='row'>     
                <div class='column'> <button class='sectionButton'>${sectionNames[i]}</button> </div>
                <div class='column'> <button class='sectionButton'>${sectionNames[i+1]}</button> </div>
            </div>`;  
        } else {
            sections.innerHTML += `
            <div class='row'>     
                <div class='column'> <button class='sectionButton'>${sectionNames[i]}</button> </div>
            </div>`;  
        }
    }
};

const showPossibleAnswers = () => {
    let result = '';
    let answersToCheck = null;

    if (chosenLanguage == 'English') {
        answersToCheck = questions[chosenSection][count].answers;
    } else if (chosenLanguage == 'Russian') {
        answersToCheck = questions[chosenSection][count].answersRussian;
    }

    for (let i = 0; i < answersToCheck.length; i++) {
        if (i == 0) {
            result += `<button class='possibleAnswer selectedAnswer'>${answersToCheck[i]}</button>`;
        } else {
            result += `<button class='possibleAnswer'>${answersToCheck[i]}</button>`;
        }
    }

    answers.innerHTML = result;
}

const openExercise = (event) => {
    if (event.target.tagName == 'BUTTON') {
        if (chosenLanguage == 'English') {
            chosenSection = event.target.textContent;
            sectionTitle.textContent = chosenSection.toUpperCase();
            instruction.textContent = questions[chosenSection][count].instruction;
            question.textContent = questions[chosenSection][count].question;
            hint.textContent = "Hint";
        } else if (chosenLanguage == 'Russian') {
            let pos = questionsArrRus.indexOf(event.target.textContent);
            chosenSection = questionsArr[pos];
            sectionTitle.textContent = questionsArrRus[pos].toUpperCase();
            instruction.textContent = questions[chosenSection][count].instructionRussian;
            question.textContent = questions[chosenSection][count].questionRussian;
            hint.textContent = "Подсказка";
        }

        sections.className = 'hidden';
        exercise.className = 'verticalContainer';
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
            if (chosenLanguage == 'English') {
                message.textContent = 'Good job! Press "space" to change question.';
            } else if (chosenLanguage == 'Russian') {
                message.textContent = 'Молодец! Нажми "пробел", чтобы поменять вопрос.';
            }
            
            possibleAnswers[chosenAnswer].className = 'possibleAnswer rightAnswer';
            rightAnswerIsGiven = true;
        } else {
            if (chosenLanguage == 'English') {
                message.textContent = 'Try again!';
            } else if (chosenLanguage == 'Russian') {
                message.textContent = 'Попробуй снова!';
            }
            possibleAnswers[chosenAnswer].className = 'possibleAnswer selectedWrongAnswer';
        }
    }
}

const changeQuestion = (event) => {
    if (rightAnswerIsGiven == true && event.key == ' ') {
        if (count < questions[chosenSection].length-1) {
            count++;
            chosenAnswer = 0;
            if (chosenLanguage == 'English') {
                instruction.textContent = questions[chosenSection][count].instruction;
                question.textContent = questions[chosenSection][count].question;
                hint.textContent = 'Hint';
            } else if (chosenLanguage == 'Russian') {
                instruction.textContent = questions[chosenSection][count].instructionRussian;
                question.textContent = questions[chosenSection][count].questionRussian;
                hint.textContent = 'Подсказка';
            }
            
            hintText.style.display = 'none';
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
    hint.textContent = 'Hint';
    hintText.style.display = 'none';
}

const returnToSectionsWithKeyboard = (event) => {
    if (event.key == 'Escape' && chosenSection != null) {
        returnToSections();
    } 
}

const changeLanguage = () => {
    if (chosenLanguage == 'English') {
        chosenLanguage = "Russian";
        language.textContent = 'Eng';
    } else {
        chosenLanguage = "English";
        language.textContent = 'Rus';
    }

    if (chosenSection == null) {
        sections.innerHTML = '';
        showSections();
    }
}

const showHint = () => {
    if (chosenLanguage == 'English') {
        const words = questions[chosenSection][count].hint.split(' ');
        if (hint.textContent == 'Hint') {
            hint.textContent = 'Hide';
            hintText.style.display = 'block';
            hintText.innerHTML = `<span class='keyWord'>${words[0]}</span> ${questions[chosenSection][count].hint.slice(words[0].length)}`;
        } else if (hint.textContent == 'Hide') {
            hint.textContent = 'Hint';
            hintText.style.display = 'none';
        }
    } else if (chosenLanguage == 'Russian') {
        const words = questions[chosenSection][count].hintRussian.split(' ');
        if (hint.textContent == 'Подсказка') {
            hint.textContent = 'Спрятать';
            hintText.style.display = 'block';
            hintText.innerHTML = `<span class='keyWord'>${words[0]}</span> ${questions[chosenSection][count].hintRussian.slice(words[0].length)}`;
        } else if (hint.textContent == 'Спрятать') {
            hint.textContent = 'Подсказка';
            hintText.style.display = 'none';
        }
    }
}

window.addEventListener('DOMContentLoaded', showSections);
document.querySelector('#sections').addEventListener('click', openExercise);
document.querySelector('#exitButton').addEventListener('click', returnToSections);
window.addEventListener('keydown', chooseAnswerWithArrows);
window.addEventListener('keydown', checkAnswer);
window.addEventListener('keydown', changeQuestion);
window.addEventListener('keydown', returnToSectionsWithKeyboard);
document.querySelector('#language').addEventListener('click', changeLanguage);
document.querySelector('#hint').addEventListener('click', showHint);