"use strict";

// new RegExp("pattern","flags");

// /pattern/flags 

// const ans = prompt("Введите ваше число");

// const reg = /\d/;
// console.log(ans.match(reg));

const str = "My name is R2D2";
console.log(str.match(/\D/g));

// \D - NOT digits
// \W - NOT words

// \d - digits
// \w - words
// \s - spaces (пробелы)

// i - вне зависимости от регистра
// g - global - найти несколько вхождений
// m - многострочний режим


// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt("password");

// console.log(pass.replace(/\./g, "*"));

// console.log("12-34-56".replace(/\-/g, ":"));

