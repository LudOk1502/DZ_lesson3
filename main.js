/*- створити функцію яка обчислює та повертає площу прямокутника висотою*/
function sPryamok(a, b) {
    return a * b;
}

let s = sPryamok(5, 8);
console.log(s);

/*- створити функцію яка обчислює та повертає площу кола*/
function sKola(r) {
    return 3.14 * (r ** 2);
}

let s2 = sKola(5);
console.log(s2)

/*- створити функцію яка обчислює та повертає площу циліндру*/
function sCylinder(r, h) {
    return 2 * 3.14 * r * (r + h);
}

let s3 = sCylinder(5, 9);
console.log(s3);

/*- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);*/
function minMax(arrayNum = []) {
    let min = arrayNum[0];
    let max = arrayNum[0];
    for (let i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] < min) {
            min = arrayNum[i];
        } else if (arrayNum[i] > max) {
            max = arrayNum[i];
        }
    }
    console.log(max);
    return min;
}

minMax([12, 4, 78, 23, 3, 9, 404]);

/*- створити функцію яка при створює блок з текстом. Текст задати через аргумент*/
function createDiv(text) {
    document.write(`<div>${text}</div>`);
}

createDiv('Hello');

/*- створити функцію яка при створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий*/
function createUl(text) {
    document.write(`<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>`);
}

createUl('Hello okten');

/*- створити функцію яка при створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*/
function createUl2(text, n) {
    document.write(`<ul>`);
    for (let i = 0; i < n; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`)
}

createUl2('Web university', 3);

/*- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список*/

function arrayMix(aMix = []) {
    document.write(`<ul>`);
    for (let i = 0; i < aMix.length; i++) {
        document.write(`<li>${aMix[i]}</li>`);
    }
    document.write(`</ul>`)
}

arrayMix([2, 'five', 7, true, 99]);
