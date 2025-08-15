// 1 задание

let str = 'js';
alert(str.toUpperCase())

// 2 задание

function start (arr, str) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().startsWith(str.toLowerCase())){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
const products = ['МоЛоКо Бородинский', 'Молоко Молочник', 'Коровка Молоко', 
'Груша Конференция'];

const search = 'молоко';
alert(start(products, search))

// 3 задание

let num = 32.58884;
const arr = [];
arr.push (Math.floor(num));
arr.push (Math.ceil(num));
arr.push (Math.round(num));
alert(arr)

// 4 задание

let minimum = Math.min (52, 53, 49, 77, 21, 32);
let maximum = Math.max (52, 53, 49, 77, 21, 32);
alert(`Минимальное число: ` + minimum + `\n` + `Максимальное число: ` + maximum)

// 5 задание

function randomNum () {
    const randomNumber =Math.floor(Math.random() * 10) + 1;
    return randomNumber;
}

alert(randomNum())

// 6 задание

function fromTo (num) {
    let arr = [];
    for (let i = 0; i < (num / 2); i++) {
        arr.push (Math.floor(Math.random() * num) + 1);
    }
    return arr;
}

alert(fromTo(3))

// 7 задание

function getRandomInRange(min, max) {
    if (min > max) {
        [min, max] = [max, min]; 
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNum = getRandomInRange(5, 10);
console.log(randomNum);

// 8 задание

let date = new Date();
alert(date)

// 9 задание

let currentDate = new Date();
let newDate = currentDate.setDate(currentDate.getDate() + 73);
newDate = new Date(newDate);
alert(newDate)

// 10 задание

function formatDate (date) {
    if (!date) {
        date = new Date();
    }

arrMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
arrWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

let day = date.getDate();
let month = arrMonth[date.getMonth()];
let year = date.getFullYear();
let week = arrWeek[date.getDay()];

const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

if (hours < 10) {
    hours = '0' + hours;
}

if (minutes < 10) {
    minutes = '0' + minutes;
}

if (seconds < 10) {
    seconds = '0' + seconds;
}



return `Дата: ${day} ${month} ${year} - это ${week} \nВремя: ${hours}:${minutes}:${seconds}`;

}

alert(formatDate(new Date()));




