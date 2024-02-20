const numero = 10

const numeroPar = (numero % 2) === 0;
"== -> ignora o tipo então 0 = '0' "
"=== -> considera o tipo então 0 = '0' esta errado "

if(numeroPar == true){
    console.log("Execcutei")
}

console.log(numeroPar)