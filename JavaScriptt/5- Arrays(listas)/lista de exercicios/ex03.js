//3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

let nome =["vitor","alexandre","vinicius"]

for(let i = 0; i<nome.length; i++){
    (nome[i][0]==="v")?console.log(nome[i]):""
}