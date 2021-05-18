"use strict";

const inputRub = document.querySelector("#rub"),
      inputUsd = document.querySelector("#usd");

inputRub.addEventListener("input",()=> {
    const request = new XMLHttpRequest();

    // request.open(method,url, async, login, password); // собирает настройки которые помогут сделать запрос в будущем
    request.open("GET","js/current.json");
    request.setRequestHeader("Content-type","application/json; charset=utf-8");
    request.send();

    // Свойства запроса .open()
    // status //Статус запроса
    // statusText // текст статуса запроса
    // response // ответ от сервера
    // readyState // текущее состояние запроса

    // События 
    request.addEventListener("readystatechange",()=>{ // отслеживает статус готовности нашего запроса
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        }else{
            inputUsd.value = "Что-то пошлое не так";
        }
    });
});