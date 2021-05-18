"use strict";

const btns = document.querySelectorAll("button"),
      wrapper = document.querySelector(".btn-block");

// console.log(btns[0].classList.length); // даёт массив класс находящийся в этом элементе
// console.log(btns[0].classList.item(0)); // показывает имя первого класса
// console.log(btns[i].classList.add("red", "something") // добавляет заданный класс
// console.log(btns[0].classList.remove("blue")); // убирает заданный класс
// console.log(btns[0].classList.toggle("blue")); // вкл/выкл заданный класс

// for (let i = 1; i < btns.length; i++) {
//     console.log(btns[i].classList.add("red", "something")); 
// }

// for (let i = 0; i < btns.length; i++) {
//     if (btns[i].classList.contains("red")) { // если в данном элементе есть такой класс то...
//         console.log("IT'S ALIVE")
//     }
// }

btns[0].addEventListener("click", ()=>{
    // if (!btns[1].classList.contains("red")) {
    //     btns[1].classList.add("red");
    // }else{
    //     btns[1].classList.remove("red");
    // }
    btns[1].classList.toggle("red")
});

// wrapper.addEventListener("click", (e)=>{
//     if (e.target && e.target.tagName == "BUTTON") { 
/* позволяет делегировать элемент , если новый элемент добавляется то он также исполняет ту 
же функцию как и остальные элементы */
//         console.log("hello world")
//     }
// });

wrapper.addEventListener("click", (e)=>{
    if (e.target && e.target.matches("button.red") /*== "BUTTON"*/) {
        console.log("hello world")
    }
});

const btn = document.createElement("button");
btn.classList.add("red");
wrapper.append(btn);