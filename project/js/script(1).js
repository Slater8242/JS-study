/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Одержимость",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelector(".promo__adv"),
    movies = document.querySelectorAll(".promo__interactive-item"),
    movieList = document.querySelector(".promo__interactive-list"),
    movieInput = document.querySelector(".adding__input");

    const deleteAdv = () => {
        
        adv.remove();
    }

    const makeChanges = () =>{
        const genre = document.querySelector(".promo__genre");
        genre.textContent= "драма";
    
        const bg = document.querySelector(".promo__bg");
        bg.style.cssText = "background:url('./img/bg.jpg') center center/cover no-repeat; background-position:top;";
    }
    
    const sortArr = (arr) => {
        arr.sort();
    }
    
    function addMovie (ev){
        ev.preventDefault();
        let newMovie = movieInput.value;

        if(newMovie){
            if(newMovie.length > 21){
                newMovie = `${newMovie.substring(0,22)}...`;
            }
            movieDB.movies.push(newMovie);
            console.log(movieDB.movies);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }
        
        const checkbox = document.querySelector(".checkbox").checked

        if (checkbox == true) {
            console.log("Добавляем любимый фильм");
        }  
        
    }

    function createMovieList(films,parent) { 
        parent.innerHTML = "";
        sortArr(films);

        films.forEach((film, i)=>{
            parent.innerHTML += `
                <li class="promo__interactive-item">${i+1} : ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll(".delete").forEach((btn,i) => {
            btn.addEventListener("click",()=>{
                btn.parentElement.remove();
                movieDB.movies.splice(i,1);
                createMovieList(movieDB.movies, movieList);
            });
        });
    }

    document.getElementById("confirm").addEventListener("click",addMovie);

    
    
    // document.getElementsByClassName

    deleteAdv();
    makeChanges();
    createMovieList(movieDB.movies, movieList);
});

