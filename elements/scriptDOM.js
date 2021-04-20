'use strict';

// Получение элементов со странницы (Раздел 2 урок 22)

// const box = document.getElementById("box"); 
// console.log(box);

// const buttons = document.getElementsByTagName("button"); // Там где у нас есть ElementS даёт нам массив
// console.log(buttons);

// const circles = document.getElementsByClassName("circle"); 
// console.log(circles);

// const hearts = document.querySelectorAll(".heart");

// hearts.forEach(item =>{
//     console.log(item);
// });

// const oneHeart = document.querySelector(".heart");
// console.log(oneHeart);

// Получение элементов со странницы (Раздел 2 урок 23)

// const box = document.getElementById("box"),
//       buttons = document.getElementsByTagName("button"),
//       circles = document.getElementsByClassName("circle"),
//       hearts = document.querySelectorAll(".heart"),
//       oneHeart = document.querySelector(".heart"),
//       wrapper = document.querySelector(".wrapper");

// box.style.backgroundColor= "blue";
// box.style.width= "500px";

// box.style.cssText = "background-color: blue; width: 500px;"

// buttons[1].style.borderRadius = "100%"
// circles[0].style.backgroundColor = "red";

// for (let i = 0; i <hearts.length; i++)  { // перебирание элементов циклами
//     hearts[i].style.width = "200px";
// }

// hearts.forEach(item => { // перебирание элементов forEach
//     item.style.backgroundColor = "blue";
// });

// const div = document.createElement("div"); // создаёт новый HTML элемент
// const text = document.createTextNode("Тут был я"); //Редко используется

// div.classList.add("black"); // добавляет класс black в выбранный элемент div

// wrapper.append(div); // добавляет новый див в конец дива wrapper
// wrapper.appendChild(div); //устаревшый вариант
// wrapper.prepend(div); // добавляет новый див в начало дива wrapper

// hearts[0].before (div); // before добавляет элемент до выбранного элемента  
// hearts[0].after(div); // after добавляет элемент после выбранного элемента

// wrapper.insertBefore(div,hearts[0]); 
/* устаревшый вариант добавление елемента до. 
Первый аргумент элемент который будет заменён ,второй элемент который заменяет выбранный элемент*/

// circles[0].remove(); // удаляет выбранный элемент
// wrapper.removeChild(hearts[1]); //устаревшый вариант удаление елемента . 

// hearts[0].replaceWith(circles[0]); // позволяет заменять выбранный элемент на другой 
// wrapper.replaceChild(circles[0],hearts[0]); //устаревшый вариант замены елемента

// div.innerHTML = "<h1>hello world</h1>"; // позволяет нам внедрять HTML элементы и они будут видны в консоле

// div.textContent = "hello"; // позволяет нам добавлять текстовый контент или получать от пользователя

// div.insertAdjacentHTML("afterend","<h2>Hello</h2>") 
/* позволяет нам добавлять специальный элемент перед или после выбранного элемента */

