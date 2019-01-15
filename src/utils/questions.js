import questions from '../data/questions';
import {getObservable} from '../utils/observable';

function randomChoiceQuestion(min, max) {
    let rand = min + Math.random() * (max - min +1);
    rand = Math.floor(rand);
    return questions[rand];
}

export function getTaskWindow() {
    const {question, answer} = randomChoiceQuestion(0, questions.length - 1);

    let form = document.createElement("div");
    form.id = "windowTask";
    let input = document.createElement("input");
    input.id = "answer";
    input.type = 'text';

    let questionText = document.createElement("p");
    questionText.innerHTML = question;

    const button = document.createElement("button");
    button.textContent = 'press me!'

    const observable = getObservable();

    button.addEventListener('click', () => {
        if(input.value == answer) {
            console.log('true');
            observable.trigger('Player:swing');
        } else {
            console.log('false');
        }
    });

    form.appendChild(questionText);
    form.appendChild(input);
    form.appendChild(button);

    return form;
}