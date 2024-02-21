// desafio 02

// voce tera 5 variaveis, sendo elas:
// 1- preço etanol
// 2- preço gasolina 
// 3- tipo de combustivel que esta no seu carro;
// 4- gasto medio de combustivel no seu carro
// 5- distancia em km da viagem

// imprima o valor que sera gastoo de combustivel para realizar a viagem

let etanol = 5.79;
let gasolina = 6.66;
let tipoCombustivel = "gasolina"
let kmsPorLitros = 10
let distanciaKm = 100

let litrosConsumidos = distanciaKm/kmsPorLitros

let gastoCombustivel = (tipoCombustivel === "etanol")?litrosConsumidos*etanol:(tipoCombustivel === "gasolina")?litrosConsumidos*gasolina:"Combustivel invalido"

console.log(gastoCombustivel)