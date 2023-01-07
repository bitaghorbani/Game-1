
let activitySectionIndex = 0;

let newGameButton;
let rollDiceButton;

let scoresElements = [];
let sectionElements = [];
let lastScoreElements = [];

document.addEventListener('DOMContentLoaded', function (event){

    // ! boolean
    // false ==> true
    // true ==> false

    let diceImage = document.querySelector('#dice');

    if(!diceImage) {
        console.log("Error!'diceImage' does not exit.")
    }
    
    //************
    newGameButton = document.querySelector('#btn-new-game');

    if(!newGameButton) {
        console.log("Error!'newGameButton' does not exit.")
    }
    //************

    //************
    rollDiceButton = document.querySelector('#btn-roll-dice');

    if(!rollDiceButton) {
        console.log("Error!'rollDiceButton' does not exit.")
    }
    //************

    //************
    let scores1Element = document.querySelector('#scores-1');

    if(!scores1Element) {
        console.log("Error!'scores1Element' does not exit.");
    } else {
        scoresElements.push(scores1Element);
    }
    //************

    //************
    let scores2Element = document.querySelector('#scores-2');

    if(!scores2Element) {
        console.log("Error!'scores2Element' does not exit.");
    } else {
        scoresElements.push(scores2Element);
    }
    //************

    //************
    let section1Element = document.querySelector('#section-1');

    if(!section1Element) {
        console.log("Error!'section1Element' does not exit.");
    } else {
        sectionElements.push(section1Element);
    }
    //************

    //************
    let section2Element = document.querySelector('#section-2');

    if(!section2Element) {
        console.log("Error!'section2Element' does not exit.");
    } else {
        sectionElements.push(section2Element);
    }
    //************

    //************
    let lastScore1Element = document.querySelector('#last-score-1');

    if(!lastScore1Element) {
        console.log("Error!'lastScore1Element' does not exit.");
    } else {
        lastScoreElements.push(lastScore1Element);
    }
    //************

    //************
    let lastScore2Element = document.querySelector('#last-score-2');

    if(!lastScore2Element) {
        console.log("Error!'lastScore2Element' does not exit.");
    } else {
        lastScoreElements.push(lastScore2Element);
    }
    //************

    //************
    //************
    //************

    newGameButton.addEventListener('click', function () {

        rollDiceButton.style.display = 'block';
    })

    rollDiceButton.addEventListener('click', function () {

        console.log('rollDiceButton');

        diceImage.style.display = 'block';

        let randomInteger = getRandomIntegerFromOneTo(6);
        console.log(randomInteger);

        let newFileName = 'dice-' + randomInteger +'.png';

        diceImage.setAttribute('src' ,newFileName);
        console.log(lastScoreElements);
        let activeLastScoreElement = lastScoreElements[activitySectionIndex];

        activeLastScoreElement.outerText = randomInteger;
    })
})

function getRandomIntegerFromOneTo(number) {
    let result = Math.floor(Math.random() * number) + 1;

    return result;
}

