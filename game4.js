function rockPaperScissors() {
    alert('Добро пожаловать в игру "Камень, ножницы, бумага"!');

    const arrObj = ['камень', 'ножницы', 'бумага'];
    const objSelect = arrObj[Math.floor(Math.random() * arrObj.length)];
    const userSelect = prompt('Выберите предмет (камень, ножницы, бумага)');

    if (userSelect === null) {
        alert("Вы вышли из игры. Спасибо за участие!");
        return;
    }

    function getResult(userSelect, objSelect) {
        if (userSelect === objSelect) return 'ничья';
        if (
            (userSelect === 'камень' && objSelect === 'ножницы') ||
            (userSelect === 'ножницы' && objSelect === 'бумага') ||
            (userSelect === 'бумага' && objSelect === 'камень')
        ) {
            return 'вы выиграли';
        }
        return 'вы проиграли';
    }

    const result = getResult(userSelect, objSelect);
    alert(`Вы выбрали: ${userSelect};\nКомпьютер выбрал: ${objSelect}.\nРезультат: ${result}`);
}


