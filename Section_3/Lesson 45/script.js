"use strict";

function user(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.call = function () {
        console.log(`Hello ${this.name},I am your method. You called me?`);
    };
}

const Riad = new user("Riad", 21);
const Alex = new user("Alex", 20);

user.prototype.exit = function() {
    console.log(`${this.name} Logged out`);
};

Riad.call();
Alex.exit();

console.log(Riad);
console.log(Alex);