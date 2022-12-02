const questionsArr = ['categories', 'nature', 'horizon'];
const questionsArrRus = ['категории', 'природа', 'горизонт'];
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
    horizon: [
        {
            question: "Horizon is a...",
            questionRussian: "Горизонт - это...",
            answers: [
                "a view from a window",
                "the sky",
                "landscape",
                "the entire earth's surface that we see in an open area"
            ],
            answersRussian: [
                "вид из окна",
                "небо",
                "пейзаж",
                "вся земная поверхность, которую мы видим на открытой местности",
            ],
            instruction: 'Choose the right answer.',
            instructionRussian: 'Выбери правильный ответ.',
            rightAnswerIndex: 3,
            hint: "Horizon is the entire earth's surface that we see in an open area.",
            hintRussian: "Горизонт - это вся земная поверхность, которую мы видим на открытой местности."
        },
        {
            question: "Skyline is a...",
            questionRussian: "Линия горизонта - это...",
            answers: [
                "land surface",
                "a view from a window",
                "the boundary of the horizon, where the sky converges with the earth's surface",
                "the sky"
            ],
            answersRussian: [
                "поверхность земли",
                "вид из окна",
                "граница горизонта, где небо сходится с земной поверхностью",
                "небо",
            ],
            instruction: 'Choose the right answer.',
            instructionRussian: 'Выбери правильный ответ.',
            rightAnswerIndex: 2,
            hint: "Boundary of the horizon, where the sky converges with the earth's surface.",
            hintRussian: "Граница горизонта, где небо сходится с земной поверхностью."
        },
        {
            question: "How can you get to the horizon line?",
            questionRussian: "Как можно добраться до линии горизонта?",
            answers: [
                "by swimming",
                "by walking",
                "by driving",
                "it is impossible"
            ],
            answersRussian: [
                "вплавь",
                "пешком",
                "на машине",
                "невозможно",
            ],
            instruction: 'Choose the right answer.',
            instructionRussian: 'Выбери правильный ответ.',
            rightAnswerIndex: 3,
            hint: "Impossible.",
            hintRussian: "Невозможно."
        }
    ],
    categories: [
        {
            question: "A dog is...",
            questionRussian: "Собака - это...",
            answers: [
                "furniture",
                "food",
                "fruit",
                "animal",
                "clothes",
                "transport"
            ],
            answersRussian: [
                "мебель",
                "еда",
                "фрукт",
                "животное",
                "одежда",
                "транспорт"
            ],
            instruction: 'Choose the right answer.',
            instructionRussian: 'Выбери правильный ответ.',
            rightAnswerIndex: 3,
            hint: "Animal.",
            hintRussian: "Животное."
        },
        {
            question: "A plate is...",
            questionRussian: "Тарелка - это...",
            answers: [
                "furniture",
                "food",
                "fruit",
                "animal",
                "clothes",
                "disehs",
                "transport"
            ],
            answersRussian: [
                "мебель",
                "еда",
                "фрукт",
                "животное",
                "одежда",
                "посуда",
                "транспорт"
            ],
            instruction: 'Choose the right answer.',
            instructionRussian: 'Выбери правильный ответ.',
            rightAnswerIndex: 5,
            hint: "Dishes.",
            hintRussian: "Посуда."
        },
        {
            question: "A boat is...",
            questionRussian: "Лодка - это...",
            answers: [
                "furniture",
                "food",
                "fruit",
                "animal",
                "clothes",
                "dishes",
                "transport"
            ],
            answersRussian: [
                "мебель",
                "еда",
                "фрукт",
                "животное",
                "одежда",
                "посуда",
                "транспорт"
            ],
            instruction: 'Choose the right answer.',
            instructionRussian: 'Выбери правильный ответ.',
            rightAnswerIndex: 6,
            hint: "Transport.",
            hintRussian: "Транспорт."
        },
        {
            question: "A jacket is...",
            questionRussian: "Куртка - это...",
            answers: [
                "furniture",
                "food",
                "fruit",
                "animal",
                "clothes",
                "dishes",
                "transport"
            ],
            answersRussian: [
                "мебель",
                "еда",
                "фрукт",
                "животное",
                "одежда",
                "посуда",
                "транспорт"
            ],
            instruction: 'Choose the right answer.',
            instructionRussian: 'Выбери правильный ответ.',
            rightAnswerIndex: 4,
            hint: "Clothes.",
            hintRussian: "Одежда."
        },
        {
            question: "A banana is...",
            questionRussian: "Банан - это...",
            answers: [
                "furniture",
                "food",
                "fruit",
                "animal",
                "clothes",
                "dishes",
                "transport",
                "vegetable",
            ],
            answersRussian: [
                "мебель",
                "еда",
                "фрукт",
                "животное",
                "одежда",
                "посуда",
                "транспорт",
                "овощ"
            ],
            instruction: 'Choose the right answer.',
            instructionRussian: 'Выбери правильный ответ.',
            rightAnswerIndex: 2,
            hint: "Fruit.",
            hintRussian: "Фрукт."
        },
        {
            question: "A bull is...",
            questionRussian: "Бык - это...",
            answers: [
                "furniture",
                "food",
                "fruit",
                "animal",
                "clothes",
                "dishes",
                "transport",
                "vegetable",
            ],
            answersRussian: [
                "мебель",
                "еда",
                "фрукт",
                "животное",
                "одежда",
                "посуда",
                "транспорт",
                "овощ"
            ],
            instruction: 'Choose the right answer.',
            instructionRussian: 'Выбери правильный ответ.',
            rightAnswerIndex: 3,
            hint: "Animal.",
            hintRussian: "Животное."
        },
        {
            question: "Bread is...",
            questionRussian: "Хлеб - это...",
            answers: [
                "furniture",
                "food",
                "fruit",
                "animal",
                "clothes",
                "dishes",
                "transport",
                "vegetable",
            ],
            answersRussian: [
                "мебель",
                "еда",
                "фрукт",
                "животное",
                "одежда",
                "посуда",
                "транспорт",
                "овощ"
            ],
            instruction: 'Choose the right answer.',
            instructionRussian: 'Выбери правильный ответ.',
            rightAnswerIndex: 1,
            hint: "Food.",
            hintRussian: "Еда."
        },
        {
            question: "A car is...",
            questionRussian: "Машина - это...",
            answers: [
                "furniture",
                "food",
                "fruit",
                "animal",
                "clothes",
                "dishes",
                "transport",
                "vegetable",
            ],
            answersRussian: [
                "мебель",
                "еда",
                "фрукт",
                "животное",
                "одежда",
                "посуда",
                "транспорт",
                "овощ"
            ],
            instruction: 'Choose the right answer.',
            instructionRussian: 'Выбери правильный ответ.',
            rightAnswerIndex: 6,
            hint: "Transport.",
            hintRussian: "Транспорт."
        },
        {
            question: "A table is...",
            questionRussian: "Стол - это...",
            answers: [
                "furniture",
                "food",
                "fruit",
                "animal",
                "clothes",
                "dishes",
                "transport",
                "vegetable",
            ],
            answersRussian: [
                "мебель",
                "еда",
                "фрукт",
                "животное",
                "одежда",
                "посуда",
                "транспорт",
                "овощ"
            ],
            instruction: 'Choose the right answer.',
            instructionRussian: 'Выбери правильный ответ.',
            rightAnswerIndex: 0,
            hint: "Furniture.",
            hintRussian: "Мебель."
        },
        {
            question: "A tomato is...",
            questionRussian: "Помидор - это...",
            answers: [
                "furniture",
                "food",
                "fruit",
                "animal",
                "clothes",
                "dishes",
                "transport",
                "vegetable",
            ],
            answersRussian: [
                "мебель",
                "еда",
                "фрукт",
                "животное",
                "одежда",
                "посуда",
                "транспорт",
                "овощ"
            ],
            instruction: 'Choose the right answer.',
            instructionRussian: 'Выбери правильный ответ.',
            rightAnswerIndex: 7,
            hint: "Vegetable.",
            hintRussian: "Овощ."
        },
        {
            question: "A t-shirt is...",
            questionRussian: "Майка - это...",
            answers: [
                "furniture",
                "food",
                "fruit",
                "animal",
                "clothes",
                "dishes",
                "transport",
                "vegetable",
            ],
            answersRussian: [
                "мебель",
                "еда",
                "фрукт",
                "животное",
                "одежда",
                "посуда",
                "транспорт",
                "овощ"
            ],
            instruction: 'Choose the right answer.',
            instructionRussian: 'Выбери правильный ответ.',
            rightAnswerIndex: 4,
            hint: "Clothes.",
            hintRussian: "Одежда."
        },
        {
            question: "Sneakers are...",
            questionRussian: "Кроссовки - это...",
            answers: [
                "furniture",
                "food",
                "fruit",
                "animal",
                "clothes",
                "dishes",
                "shoes",
                "transport",
                "vegetable",
            ],
            answersRussian: [
                "мебель",
                "еда",
                "фрукт",
                "животное",
                "одежда",
                "посуда",
                "обувь",
                "транспорт",
                "овощ"
            ],
            instruction: 'Choose the right answer.',
            instructionRussian: 'Выбери правильный ответ.',
            rightAnswerIndex: 6,
            hint: "Shoes.",
            hintRussian: "Обувь."
        },
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
const explanationText = document.querySelector('#explanationText');
let chosenSection = null;
let count = 0;
let chosenAnswer = 0;
let rightAnswerIsGiven = false;
let chosenLanguage = 'English';

const showSections = () => {
    let sectionNames = null;
    const rememberedLanguage = JSON.parse(localStorage.getItem('language'));
    if (rememberedLanguage != null) {
        chosenLanguage = rememberedLanguage;
    }

    if (chosenLanguage == 'English') {
        sectionNames = questionsArr;
        explanationText.textContent = "Use arrow keys to navigate the options. Hit 'Enter' to choose the answer. Hit 'Space' to change the question.";
    } else if (chosenLanguage == 'Russian') {
        sectionNames = questionsArrRus;
        explanationText.textContent = "Используйте клавиши стрелок, чтобы перемещаться между вариантами. Нажмите Enter, чтобы выбрать ответ. Нажмите Space, чтобы поменять вопрос.";
    }
console.log(chosenLanguage, sectionNames, rememberedLanguage);
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
    localStorage.setItem(`language`, JSON.stringify(chosenLanguage));

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

window.addEventListener('load', showSections);
document.querySelector('#sections').addEventListener('click', openExercise);
document.querySelector('#exitButton').addEventListener('click', returnToSections);
window.addEventListener('keydown', chooseAnswerWithArrows);
window.addEventListener('keydown', checkAnswer);
window.addEventListener('keydown', changeQuestion);
window.addEventListener('keydown', returnToSectionsWithKeyboard);
document.querySelector('#language').addEventListener('click', changeLanguage);
document.querySelector('#hint').addEventListener('click', showHint);