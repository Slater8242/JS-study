"use strict";

// function showThis(a,b) { 
//     console.log(this);
//     function sum(){
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4,5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum:function(){
//         function shout(){
//             console.log(this);
//         }
//         shout();
//     }
// };

// function user (name,id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }

// let Ivan = new user("ivan",21);

// function sayName (surname){
//     console.log(this);
//     console.log(this.name + " " + surname);
// }

// const user = {
//     name: "john"
// };

// sayName.call(user , "Ashrafov");
// sayName.apply(user, ["Ashrafov"])

// function count(num){
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));


// 1) Обычная функция = window, если use strict - undefined
// 2) Контекст у методов объекта - сам объект
// 3) This в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind

const btn = document.querySelector("button");

btn.addEventListener("click",function() {
    console.log(this);
});

btn.addEventListener("click",(e) =>{
    e.target.style.backgroundColor = "red"
});

const obj = {
    num: 5,
    sayNumber: function () {
        const say = ()=>{
            console.log(this);
        }
        say();
    }
};

obj.sayNumber(); 

const double = a => a * 2 ;

console.log(double(4));