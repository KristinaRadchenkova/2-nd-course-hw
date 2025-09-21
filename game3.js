function reverseString() {
    let invertedStr = prompt('Введите текст');
    
    if (invertedStr === null) {
        alert("Игра завершена. Спасибо за игру!");
        return;
    }
    
    let reversedStr = invertedStr.split('').reverse().join('');
    alert(reversedStr);
}