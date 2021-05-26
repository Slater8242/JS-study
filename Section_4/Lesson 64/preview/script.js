'use strict';

// localStorage.setItem("number","5"); // устанавливает имя и value объекта

// // localStorage.removeItem("number"); // удаляет выбранный объект
// localStorage.clear(); // всё удаляет

// console.log(localStorage.getItem("number")); //получение выбраноого объекта

const checkbox = document.querySelector("#checkbox"),
      form = document.querySelector("form"),
      change = document.querySelector("#color");

if (localStorage.getItem("isChecked")) {
    checkbox.checked = true;

}

if (localStorage.getItem("bg") === "changed") {
    form.style.backgroundColor = "red";
}
      
checkbox.addEventListener("change", ()=>{
    localStorage.setItem("isChecked",true);
});

change.addEventListener("click",()=>{
    if (localStorage.getItem("bg") === "changed") {
        localStorage.removeItem("bg");
        form.style.backgroundColor = "#fff";
    }else{
        localStorage.setItem("bg","changed");
        form.style.backgroundColor = "red";
    }
});

const person ={
    name: "alex",
    age: 25
};

// const serializePerson =JSON.stringify(person);
localStorage.setItem("alex",person);
console.log(localStorage.getItem("alex"));

