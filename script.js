const cels = 10;
const fareng = cels * 9 / 5 + 32;
console.log(fareng);

let days =  30;
let hours = days * 24;
let min = hours * 60
console.log('Днів:', hours);
console.log('Хвилин:', min);

let health = 100;
let energy = 100;
let newHealth = health - 10;
let newEnergy = energy - 15;
console.log('HP:', newHealth);
console.log('Energy:',newEnergy);


let sum = 1000;
let discount = 0.10;
let finalDiscount = sum * discount;
const price = sum - finalDiscount;
console.log('Price:', price);


const num = Math.floor(4.6);
console.log(num);


const num2 = parseFloat(1.2);
console.log(num2);


const num3 = parseInt(1.8);
console.log(num3);


const koren = Math.sqrt(16);
console.log('koren:', koren)


let Numb = 56;
let textNumb = '34.5';

let newTextNumb = parseInt(textNumb);
console.log(newTextNumb);

let newNumb = Numb.toString();
console.log(newNumb);
