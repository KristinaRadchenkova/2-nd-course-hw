// Задание 1

let array = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array.length; i++) {
    alert(array[i]);
    if (array[i] === 10) {
        break;
    }
}

// Задание 2
let array2 = [1, 5, 4, 10, 0, 3];
alert (array2.indexOf(4))

// Задание 3

let array3 = [1, 3, 5, 10, 20];
alert (array3.join (' '));

// Задание 4

let array4 = [];
for (let i = 0; i < 3; i++) {
    array4[i] = [];
    for (let j = 0; j < 3; j++) {
        array4[i][j] = 1;
    }
}
console.log(array4);

// Задание 5

array5 = [1, 1, 1];
for (let i = 0; i < 3; i++) {
    array5.push(2);
}
console.log(array5);

// Задание 6

array6 = [9, 8, 7, 'a', 6, 5];
array6.sort();
array6.pop();
console.log(array6);

// Задание 7

array7 = [9, 8, 7, 6, 5];
let answer = Number(prompt("Угадайте число"));
if (array7.includes(answer)) {
    alert('Угадал')
} else {
    alert('Не угадал')
}

// Задание 8

let array8 = 'abcdef';
alert(array8.split('').reverse().join(''))

// Задание 9

const array9 = [[1, 2, 3], [4, 5, 6]];
combArray9 = [...array9[0], ...array9[1]];
console.log(combArray9);

// Задание 10

const array10 = [1, 2, 8, 7, 3, 9, 5];
for (let i = 0; i < array10.length - 1; i++) {
    console.log(array10[i] + array10[i + 1]);
}

// Задание 11

function squareNum (nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] ** 2;
    }
    return nums;
}

console.log(squareNum([1, 2, 3, 4, 5]));

// Задание 12

function lenArr (str) {
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].length;
    }
    return str;
}

console.log(lenArr(['wbhhe', 'wenqw', '23']));

// Задание 13

function negativeNum (arr) {
    return arr.filter(item => item < 0);
}

const array13 = [13, -8, -2, 6, -11, -14, 9, 15];
console.log(negativeNum(array13));

// Задание 14

const arraw14 = [];
for (let i = 0; i < 10; i++) {
    let num1 = Math.floor(Math.random() * 10) + 1;
    arraw14.push(num1);
}
console.log(arraw14);

const arrawEven = arraw14.filter(item => item % 2 === 0);
console.log(arrawEven);

// Задание 15

let summ = 0;
const arraw15 = [];
for (let i = 0; i < 6; i++) {
    let num1 = Math.floor(Math.random() * 10) + 1;
    arraw15.push(num1);
    summ += num1;
 
}

    console.log(arraw15);

    average = summ / arraw15.length;
    console.log(average);