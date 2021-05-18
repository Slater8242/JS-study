"use strict";

// filter

// const names = ["Ivan", "Riad", "Anna", "Ksenia"];

// const shortnames = names.filter(function (name){
//     return name.length<5;
// });
// console.log(shortnames);

// map

// let answers = ["ivAn","AnnA","Hello"];

// // const result = answers.map(item => item.toLowerCase());
// answers = answers.map(item => item.toLowerCase()); // можно переписать массив

// console.log(answers);

// every/some

// const some = [4,"lol","wew"], 
//       every = [4,5,6];

// console.log(some.some(item => typeof(item) === "number")); 
// // Если есть хотя бы одна данная совпадает с типом, True
// console.log(every.every(item => typeof(item) === "number")); 
// // Если все данные совпадают с типом - True

// reduce 

// const arr =[4,5,6,2,9,1,3,7];
//                         //0     4
//                         //4     5
//                         //9     6
//                         //15     5
// // const res = arr.reduce((sum,current)=> sum + current);
// const res = arr.reduce((sum,current)=> sum + current,3); // Цифра 3 показывает начальное число

// // const arr =["apples","pear","plum"];

// // const res = arr.reduce((sum,current)=> `${sum}, ${current}`);

// console.log(res);

// const obj = {
//     ivan: "persone",
//     anna: "persone",
//     dog: "animal",
//     cat: "animal"
// };

// const newArr = Object.entries(obj)
// .filter(item => item[1] == "persone")
// .map(item =>item[0]);

// console.log(newArr);