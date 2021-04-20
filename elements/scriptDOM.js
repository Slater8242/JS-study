'use strict';

const box = document.getElementById("box"); 
console.log(box);

const buttons = document.getElementsByTagName("button"); // Там где у нас есть ElementS даёт нам массив
console.log(buttons);

const circles = document.getElementsByClassName("circle"); 
console.log(circles);

const hearts = document.querySelectorAll(".heart");

hearts.forEach(item =>{
    console.log(item);
});

const oneHeart = document.querySelector(".heart");
console.log(oneHeart);