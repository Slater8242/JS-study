"user strict";

class User {
    #surname;
    constructor(name, age, surname){
        this.name = name;
        this._age = age;
        // this.#surname = surname;
    }

    // #surname = "Ashr";

    say =() => {
        console.log(`Имя пользователя ${this.name}${this.#surname}, возраст ${this._age}`);
    }

    get surname(){
        return this.#surname;
    }

    set surname(surname){
        this.#surname = surname;
    }

    get age(){
        return this._age;
    }

    set age(age){
        if (typeof age === 'number' && age>0 && age<110) {
            this._age = age;
        }else{
            console.log("Недопустимое значение");
        }
    }
}

const riad = new User("Riad",21);
// console.log(riad.surname);

riad.surname = "AShrafov";
console.log(riad.surname);

// console.log(riad.name);
// console.log(riad.age);
riad.age = 99;
console.log(riad.age);

riad.say();