let number;
let counter=0;
let startButton = document.querySelector('.startButton')
let buttons = document.querySelector('.buttons')

startButton.addEventListener('click',handleStart){

}

function randomNumber() {
    number = Math.floor(Math.random() * 4 + 1)
    return number;
}

function changeTile() {
    randomNumber()
    document.querySelector(`.button${number}`)
    
}
