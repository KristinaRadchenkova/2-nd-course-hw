const min = 1;
const max = 100;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

function guessNumber() {
    return parseInt(prompt("Введите число от 1 до 100"), 10);
}

function startGame() {
    alert('Добро пожаловать в игру "Угадай число!"');
    let guess;
    while (true) {
        guess = guessNumber();
        if (guess === randomNumber) {
            alert("Поздравляю, вы угадали!");
            break;
        }
        else {
            alert(guess < randomNumber ? "Загаданное число больше" : "Загаданное число меньше");
        }
    }
}