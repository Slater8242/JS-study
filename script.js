// Переменные и строгий режим (Раздел 2 урок 2)
"use strict";
// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log(obj);

// console.log(name);
// var name = 'Ivan';

// {
//     var result = 15
// }

// console.log(result);

// // Классификация типов данных (Раздел 2 урок 3)
// let number = 4.6;

// console.log(4/0);

// const persone = "5";

// const bool = false;

// let und;
// console.log(und);

// const obj = {
//     name: "John",
//     age: 34,
//     isMarried: false
// };

// // console.log(obj.name);
// console.log(obj["name"]); 

// let arr = ["plum.png", "orange.jpg", 6,"apple.bmp", {}, []];
// console.log(arr[0]);

// Просто общение с пользователем (Раздел 2 урок 4)
// alert("hello");

// const result = confirm("Are you here?");
// console.log(result);
// const answer = prompt ("Вам есть 18?","18");  //Всегда в виде строки
// const answer1 = +prompt ("Вам есть 18?","18");  //Всегда в виде числа
// console.log(answer); //показывает ответ пользователя
// console.log(typeof (answer)); //показывает тип переммынных
// console.log(answer1 + 5);

// const answers = [];

// answers [0] = prompt ("Как ваше имя?","");  
// answers [1] = prompt ("Как ваше фамилия?","");  
// answers [2] = prompt ("Сколько вам лет",""); 
// document.write(answers);

// Интерполяция (Раздел 2 урок 5)

// const category = "toys";

// console.log(`https://someurl/${category}/5`);

// const user = "Riad";
// alert(`Привет ${user}`)

// Операторы (Раздел 2 урок 6)

// console.log("arr" + ' - object');
// console.log(4 + "5");
// let incr = 10,
//     decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log(2*4 = 8) // присвоение

// console.log(2*4 == 8) // равенство

// console.log(2*4 === 8) // строгое равенство

//Логические операторы
// && //оператор и (and)
// || //оператор или (or)

const isChecked = true,
      isClose = true;
    
console.log(isChecked && isClose);