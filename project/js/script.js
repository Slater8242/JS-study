/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const adv = document.querySelector(".promo__adv");
adv.remove();

const genre = document.querySelector(".promo__genre");
genre.textContent= "драма";

const bg = document.querySelector(".promo__bg");
bg.style.cssText = "background:url('./img/bg.jpg') center center/cover no-repeat; background-position:top;";

const movieDB = {
    movies: [
        "Логан",
        "Одержимость",
        "Лига справедливости",
        "Ла-ла лэнд",
        
        "Скотт Пилигрим против..."
    ]
};

const movies = document.querySelectorAll(".promo__interactive-item");

const movieList = document.querySelector(".promo__interactive-list");
movieList.innerHTML = "";

movieDB.movies.sort();
movieDB.movies.forEach((film, i)=>{
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i+1} : ${film}
            <div class="delete"></div>
        </li>
    `;
});