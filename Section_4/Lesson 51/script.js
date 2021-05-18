"use strict";

const person ={
    name: 'John',
    tel: "+744444",
    parents:{
        mom: "Irada",
        dad: "Rasim"
    }
};

const clone = JSON.parse(JSON.stringify(person));

clone.parents.mom = "ann";
console.log(person);
console.log(clone);