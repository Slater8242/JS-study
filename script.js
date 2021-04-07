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

// const isChecked = true,
//       isClose = true;
    
// console.log(isChecked && isClose);

// Задание : Практика 1 (Раздел 2 урок 7)
// const numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели","");  //Всегда в виде числа
// const questions= []; //  my version
// questions [0] = prompt ("Один из последних просмотренных фильмов?","");
// questions [1] = +prompt ("На сколько оцените его?","");
// questions [2] = prompt ("Один из последних просмотренных фильмов?","");
// questions [3] = +prompt ("На сколько оцените его?","");

// const personalMovideDb = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt ("Один из последних просмотренных фильмов?",""),
//       b = +prompt ("На сколько оцените его?",""),
//       c = prompt ("Один из последних просмотренных фильмов?",""),
//       d = +prompt ("На сколько оцените его?","");

// personalMovideDb.movies[a] = b;
// personalMovideDb.movies[c] = d;
// console.log(personalMovideDb);

// Условия (Раздел 2 урок 8)

// if (4==4){
//     console.log("ok!");
// }else{
//     console.log("Error");
// }

// if (4==9){
//     console.log("ok!");
// }else{
//     console.log("Error");
// }

// const num = 50;

// if (num<49){
//     console.log("Error");
// }else if (num > 100){
//     console.log("Много");
// }else{
//     console.log("ok!");
// }

// //  Тернарный оператор
// (num === 50) ? console.log("ok!") : console.log("Error");

// const num = 50;

// switch(num){
//     case 49:
//         console.log("Not correct");
//         break;
//     case 100:
//         console.log("Not correct");
//         break;
//     case 50:
//         console.log("Correct");
//         break;
//     default:
//         console.log("Not this time");
//         break;
// }

// Циклы (Раздел 2 урок 8)

// let num = 50;

// while (num<=55){
//     console.log(num);
//     num++;
// }

// do{
//     console.log(num);
//     num++;
// }
// while (num<55);

// for (let i=1; i<8; i++) {
//     console.log(i);
// }

// for (let i=1; i<8; i++) {
//     console.log(num);
//     num++;
// }

// for (let i=1; i<10; i++) {
//     if(i==6){
//         // break; // остановит цикл когда переменная дойдёт до 6
//         continue; // пропускает шаг не прерывая цикл
//     }
//     console.log(i);
// }

//  Задание : Практика 2 (Раздел 2 урок 9)

