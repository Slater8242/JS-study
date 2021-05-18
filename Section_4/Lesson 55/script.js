// "use strict";

// console.log("Запрос данных...");

// const req = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("подготовка данных...");
    
//         const product = {
//             name:"TV",
//             price: 2000
//         };
    
//         resolve(product); // получение данных
//         // reject(); // нет полученных данных
    
//     },2000);
// });

// req.then((product) => { // Then функция которые выполняется после получение данных
//     return new Promise((resolve, reject) => {
//         setTimeout( () =>{
//             product.status = "order";
//             resolve(product);
//         },2000);
//     });  
// }).then(data => {
//     data.modify = true;
//     return data;
    
// }).then((data) => {
//     console.log(data);
// }).catch(() => { // Catch  "ловит" ошибку и можно выполнять различные функции
//     console.log("Ошибка");
// }).finally(() => { 
//     console.log("finally");
// });

const test = time => {
    return new Promise((resolve) => {
        setTimeout( () => resolve(),time);
    });
};

// test(2000).then(() => console.log("2000 ms"));
// test(3000).then(() => console.log("3000 ms"));

// Promise.all([test(1000), test(2000)]).then(()=>{ // срабатывает после того как все функции выполнились
//     console.log("All");
// });

Promise.race([test(1000), test(2000)]).then(()=>{ // срабатывает после выполнение первой функции
    console.log("All");
});