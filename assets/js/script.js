// 1) Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:
    // поле, що зберігає радіус кола;
    // get-властивість, яке повертає радіус кола;
    // set-властивість, що встановлює радіус кола;
    // get-властивість, яке повертає діаметр кола;
    // метод, що обчислює площу кола;
    // метод, що обчислює довжину кола.
    // Продемонструй роботу властивостей і методів.
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get radiusCircle() {
        return this.radius;
    }
    set radiusCircle(radius) {
        this.radius = radius;
    }
    get diameterCircule() {
        return this.radius * 2;
    }
    calcArea() {
        return (this.radius ** 2 * Math.PI).toFixed(2);
    }
    calcLenght() {
        return (2 * Math.PI * this.radius).toFixed(2);
    }
}
let myCircul = new Circle(10);
console.log(`Radius: ${myCircul.radiusCircle}`)
console.log(`Diameter: ${myCircul.diameterCircule}`)
console.log(`Area: ${myCircul.calcArea()}`)
console.log(`Lenght: ${myCircul.calcLenght()}`)
console.log(`-------`)
myCircul.radiusCircle = 75;
console.log(`Radius: ${myCircul.radiusCircle}`)
console.log(`Diameter: ${myCircul.diameterCircule}`)
console.log(`Area: ${myCircul.calcArea()}`)
console.log(`Lenght: ${myCircul.calcLenght()}`)
console.log(`---------------------------------`)

let paint = document.querySelector('.circle');
paint.style.width=`${myCircul.diameterCircule}px`;
paint.style.height=`${myCircul.diameterCircule}px`;


// 2) Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:

// поле, яке зберігає колір маркера;
// поле, яке зберігає кількість чорнил у маркері (у відсотках);
// метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться доти, доки в маркері є чорнило; один не пробільний символ — це 0,5 % чорнил у маркері).
// Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера й додай метод для заправки.

// Продемонструй роботу написаних методів.
const txtItem = document.querySelector('.textarea__item');
let txtItemLimit = txtItem.getAttribute('maxlength');
let txtCounter = document.querySelector('.textarea__counter span');
txtCounter.innerHTML = txtItemLimit;

txtItem.addEventListener('keyup', txtSetCounter);

function txtSetCounter(e) {
    if (e.code !== 'Space') {
        const txtCounterResult = txtItemLimit - txtItem.value.length;
        txtCounter.innerHTML = txtCounterResult;
    } 
}

class Marker {
    constructor(color) {
        this.color = color;
    }
}

let redMarker = new Marker('red');
txtItem.style.color=`${redMarker.color}`;
redMarker.getItem()


class NextMarker extends Marker {
    constructor (args, fullColor) {
        super(args);

        this.fullColor = fullColor;
    }
}

let blueMarker = new NextMarker('blue');
blueMarker.fullColor = txtItemLimit * 2;
console.log(blueMarker)


// limit = txtItem.setAttribute('maxlength', blueMarker.fullColor);
// console.log(limit)
