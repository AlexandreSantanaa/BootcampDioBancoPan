//2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
let numero = [10,20,30,40,50,11]

for(let i=0; i<numero.length; i++){
    (numero[i]%2==0)?console.log("é par ",numero[i]):console.log("é impar ",numero[i])
   
}