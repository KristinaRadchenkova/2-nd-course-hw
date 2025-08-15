function quiz() {
    alert("Добро пожаловать в викторину!");

    const quiz = [
        {
            question: "Какого цвета небо?",
            options: ["1. Красное", "2. Синее", "3. Зеленое"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let score = 0;
    for (let i = 0; i < quiz.length; i++) {
        let answer = parseInt(prompt(`${quiz[i].question}\n\n${quiz[i].options.join("\n")}\n\nВведите номер правильного ответа`));
        if (answer === quiz[i].correctAnswer) {
            alert("Правильно!");
            score++;
        }
        else {
            alert("Неправильно!");
        }
    }

    alert("Ваш счет: " + score + " из " + quiz.length);
}
