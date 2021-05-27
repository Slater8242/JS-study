"use strict";

const person = {
    name: 'John',
    age: 21,

    get userAge() { // возвращает 
        return this.age;
    },

    set userAge(number) { // устанавливает
        this.age = number;
    }
};

console.log(person.userAge);
console.log(person.userAge= 30);