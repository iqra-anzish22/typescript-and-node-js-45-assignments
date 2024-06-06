"use strict";
// // Q17
// let guest: string[]=["Ali","Humza","Fahad","Talha","Samad"];
// console.log(`Due to limited space ,only tow people can invited for diner.`);
Object.defineProperty(exports, "__esModule", { value: true });
function creatCar(manfacture, model, optional) {
    return {
        manfacture,
        model,
        ...optional
    };
}
const mycar = creatCar("toyota", "Corolla", { color: "siver", year: "2023" });
console.log(mycar);
