const btns = document.querySelectorAll("button"),
      overlay = document.querySelector(".overlay");

// btn.onclick = function() { // данная функция не будет работать потому что она была переписана функцией снизу
//     alert("Click")
// };

// btn.onclick = function() { 
//     alert("second Click")
// };

let i = 0;
const deleteElement = (e)=>{
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if(i=1){
    //     btn.removeEventListener("click", deleteElement);
    // }

};

// btn.addEventListener("click", deleteElement);
// overlay.addEventListener("click", deleteElement);

btns.forEach(btn=>{ // эта стрелочная функция перебирает функции в массиве btns
    btn.addEventListener("click",deleteElement, {once:true /* once позволяет событию сработать 1 раз*/});
});

const link = document.querySelector("a");

link.addEventListener("click",(event)=>{
    event.preventDefault(); // отмена действия по умолчанию браузера

    console.log(event.target);
});