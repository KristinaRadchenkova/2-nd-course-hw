/* ДЗ №2 
 // 1 задание
let c = 10;
alert(c);
c = 20;
alert(c);
// 2 задание
let iphone = 2007;
alert(`Год выпуска первого iphone: ` + iphone);
// 3 задание
let creator = "Брендан Эйх"
alert(`Создатель JS: ` + creator);
// 4 задание
let num1 = 10;
let num2 = 2;
let summ = num1 + num2;
let razn = num1 - num2;
let umnojenie = num1 * num2;
let delenie = num1 / num2;
alert(`Сумма: ` + summ + `\n` + `Разность: ` + razn + `\n` + `Произведение: ` + umnojenie + `\n` + `Частное: ` + delenie);
// 5 задание
let num = 2;
let rezult = 2**5;
alert(`Результат возведения в степень: ` + rezult);
// 6 задание
let a = 9;
let b = 2;
let remainder = a % b;
alert(`Остаток от деления: ` + remainder);
// 7 задание
num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);
// 8 задание
let age = prompt("Сколько вам лет?");
alert(`Вам ${age} лет`);
// 9 задание
const user = {
   name: 'Bob',
   age: 32,
   isAdmin: true,
};
// 10 задание
let name = prompt("Как вас зовут?");
alert(`Привет, ${name}!`); */

/*ДЗ №3

// 1 задание
let password = 'пароль';
let answer = prompt('Введите пароль');
if (answer === password) { 
   alert('Пароль введён верно');
} else {
   alert('Пароль введён неправильно');
}

// 2 задание
let c = Number(prompt('Введите число'));
 5;
(c>0 && c<10) ? alert('Верно') : alert('Неверно');

// 3 задание
let d = Number(prompt('Введите число'));
let e = Number(prompt('Введите число'));
if (d>100 || e>100) {
   alert('Верно');
} else {
   alert('Неверно');
}

// 4 задание
let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));
//или
alert(+a + +b);

// 5 задание
let monthNumber = Number(prompt('Введите номер месяца'));
const january = 1;
const february = 2;
const march = 3;
const april = 4;
const may = 5;
const june = 6;
const july = 7;
const august = 8;
const september = 9;
const october = 10;
const november = 11;
const december = 12;
if (monthNumber < 1 || monthNumber > 12) {
   alert('Ошибка: введите число от 1 до 12');
} else {
switch (monthNumber) {
   case january:
      alert('Зима');
      break;
   case february:
      alert('Зима');
      break;
   case march:
      alert('Весна');
      break;
   case april:
      alert('Весна');
      break;
   case may:
      alert('Весна');
      break;
   case june:
      alert('Лето');
      break;
   case july:
      alert('Лето');
      break;
   case august:
      alert('Лето');
      break;
   case september:
      alert('Осень');
      break;
   case october:
      alert('Осень');
      break;
   case november:
      alert('Осень');
      break;
   case december:
      alert('Зима');
      break;

   default: 
   alert('Ввели что-то не то');
      break;
}
} */

//ДЗ №4

// 1 задание

// for (let hello = 1; hello < 3; hello++) {
//    alert('Привет');
// }

// // 2 задание
// for (let number = 1; number <= 5; number++) {
//    alert(number);
// }

// // 3 задание
// for (let number = 7; number <= 22; number++) {
//    alert(number);
// }

// // 4 задание
// const obj = {
//    Коля: '200',
//    Вася: '300',
//    Петя: '400'
// };

// for (let key in obj) {
//    if (obj.hasOwnProperty(key)) {
//       alert(`${key} - зарплата ${obj[key]} долларов`);
//    }
// }

// // 5 задание
// let num = 0;
// for (let number = 1000; number > 50; number /= 2) {
//  alert(number);
//  num ++;
// }
//  alert(num);



// // 6 задание
// let friday = 4;
// for (let friday = 4; friday <= 31; friday += 7) {
//    alert(`Сегодня пятница, ${friday}-е число. Не забудьте подготовить еженедельный отчёт!`);
// }






function Nikita() {
   let message = 3;
   return message;
}
let a = Nikita();
 console.log(a);