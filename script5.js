// // Задание №1

// function minimal (firstNum, secondNum) {
//     if (firstNum < secondNum) {
//         return firstNum;
//     } else {
//         return secondNum;
//     }
// }

// alert (`Минимальное число: ` + minimal(prompt('Введите первое число'), prompt('Введите второе число')))

// // Задание №2

// function parity (number) {
//     if (number % 2 === 0) {
//         return 'Четное';
//     } else {
//         return 'Нечетное';
//     }
// }

// alert (parity(prompt('Введите число')))

// Задание №3

// 1 пункт

// function squareNumber (number) {
//     console.log(number ** 2);
// }

// squareNumber(prompt("Введите число для возведения в квадрат"))

// // 2 пункт

// function numberSquare (number) {
//     return (number ** 2);
// }

// alert (numberSquare(prompt("Введите число для возведения в квадрат")))

// // Задание 4

// function userAge () {
//     let age = prompt("Сколько вам лет?");
//     age = parseInt(age);

//     if  (age < 0) {
//         alert ("Вы ввели неправильное значение")
//     } else if (age >= 0 && age <= 12) {
//         alert ("Привет, друг!");
//     } else {
//         alert ("Добро пожаловать!")
//     }
// }

// userAge()

// Задание 5

function checkNumber (firstNum, secondNum) {
    if (isNaN(firstNum) || isNaN(secondNum)) {
        return "Одно или оба значения не являются числами";
    } else {
        return (`Произведение чисел: ` + firstNum * secondNum);
    }
}

alert (checkNumber(prompt("Введите первое число"), prompt("Введите второе число")))

// Задание 6

function cubeNumber () {
    let num = prompt ("Введите число");
    num = parseInt(num);

    if (isNaN(num)) {
        return "Переданный параметр не является числом";
    } else {
        let cube = num ** 3;
        return `Число ${num} в кубе равно ${cube}`;
    }
}

alert (cubeNumber())

// Задание 7

const circle1 = {
    radius: 5,
    getArea: function () {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 7,
    getArea: function () {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    }
};

alert (circle1.getArea());
alert (circle2.getPerimeter());