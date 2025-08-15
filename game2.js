function gameTwo() {
    alert ('Добро пожаловать в игру "Простая арифметика"!');

    function generateTask() {
        let num1 = Math.floor(Math.random() * 100) + 1;
        let num2 = Math.floor(Math.random() * 100) + 1;
        let operations = ['+', '-', '*', '/'];
        let operation = operations[Math.floor(Math.random() * operations.length)];

        if (operation === '/') {
            num2 = Math.floor(Math.random() * 99) + 1;}

        return { num1, num2, operation };
    }

    function calculateResult(num1, num2, operation) {
        switch (operation) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return parseFloat((num1 / num2).toFixed(2));
            default:
                return null;
        }
    }

    let { num1: number1, num2: number2, operation: operat } = generateTask();

    let taskString = `${number1} ${operat} ${number2}`;

    let result = calculateResult(number1, number2, operat);

    while (true) {
        let answer = Number(prompt(`Напишите ответ на задачу: ${taskString}`));

        if (Math.abs(answer - result) < 0.01) {
            alert('Правильно!');
            break;
        } else {
            alert('Неправильно! Попробуйте снова.');
        }
    }
}