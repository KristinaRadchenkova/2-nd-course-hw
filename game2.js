function gameTwo() {
    alert ('Добро пожаловать в игру "Простая арифметика"!');

    function generateTask() {
        let num1 = Math.floor(Math.random() * 100) + 1;
        let num2 = Math.floor(Math.random() * 100) + 1;
        let operations = ['+', '-', '*', '/'];
        let operation = operations[Math.floor(Math.random() * operations.length)];
        return { num1, num2, operation };
    }

    let { num1: number1, num2: number2, operation: operat } = generateTask();

    let taskString = `${number1} ${operat} ${number2}`;

    let rezult = Math.floor(eval(taskString));

    while (true) {
        let answer = Number(prompt(`Напишите ответ на задачу: ${taskString}`));
        if (answer === rezult) {
            alert('Правильно!');
            break;
        } else {
            alert('Неправильно!');
        }
    }
}