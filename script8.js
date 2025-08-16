// Задание 1
const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

function sortCallback (a, b) {
   return a.age - b.age;
}


// Допишите колбэк для sort, изучите, как работает колбэк, в документации
console.log(people.sort(sortCallback));

// Задание 2

function isPositive(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function isMale(people) {
    const newArr = [];
    for (let i = 0; i < people.length; i++) {
        if (people[i].gender === 'male') {
            newArr.push(people[i]);
        }
    }
    return newArr;
}

function filter(arr, callback) {
    return callback(arr);
}

console.log(filter([3, -4, 1, 9], isPositive));

const people1 = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people1, isMale));

// Задание 3

function sec30() {
    const tm = setInterval(() => {
        date = new Date();
        console.log(date);
    }, 3000);
    setTimeout(() => {
        clearInterval(tm);
        console.log("Прошло 30 секунд")
    }, 30000);
}

sec30();

// Задание 4

function delayForSecond(callback) {
    setTimeout(() => {
    callback();
}, 1000);}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

// Задание 5

// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log('Привет, ${name}!');
}

delayForSecond(() => sayHi('Глеб'));