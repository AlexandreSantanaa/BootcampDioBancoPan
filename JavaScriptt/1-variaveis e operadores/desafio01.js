// desafio 01

// voce tera 3 variaveis, sendo elas:
// 1- preço combustivel 
// 2- gasto medio combustivel por km
// 3- distancia em km 

// imprima o valor que sera gastoo de combustivel para realizar a viagem

const precoCombustivel = 5.79;
let kmsPorLitros = 10;
let distanciaKm = 100;

let litrosConsumidos = distanciaKm/kmsPorLitros

let gastoCombustivel = litrosConsumidos*precoCombustivel

console.log("o gasto de combustivel foi de: R$", gastoCombustivel)