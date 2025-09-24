//ДЗ №4

// 1 задание

for (let hello = 1; hello < 3; hello++) {
   alert('Привет');
}

// 2 задание
for (let number = 1; number <= 5; number++) {
   alert(number);
}

// 3 задание
for (let number = 7; number <= 22; number++) {
   alert(number);
}

// 4 задание
const obj = {
   Коля: '200',
   Вася: '300',
   Петя: '400'
};

for (let key in obj) {
   if (obj.hasOwnProperty(key)) {
      alert(`${key} - зарплата ${obj[key]} долларов`);
   }
}

// 5 задание
let num = 0;
for (let number = 1000; number > 50; number /= 2) {
 alert(number);
 num ++;
}
 alert(num);



// 6 задание
let friday = 4;
for (let friday = 4; friday <= 31; friday += 7) {
   alert(`Сегодня пятница, ${friday}-е число. Не забудьте подготовить еженедельный отчёт!`);
}