// faça um algoritmo que dado 3 notas tiradsa por um aluno, calcule e imprima a media 
// media < 5 = reprovado
// media > 5 e < 7 recuperação
// media > 7 passou 

let nota01 = 5;
let nota02 = 7;
let nota03 = 8;
let media = (nota01+nota02+nota03)/3

if(media<5){
    console.log("Reprovado com media ", media)
}else if(media > 5 && media < 7){
    console.log("recuperação com media ", media)
}else{
    console.log("aprovado com media ", media)
}