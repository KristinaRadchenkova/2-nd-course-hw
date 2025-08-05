//ДЗ №3

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
} 