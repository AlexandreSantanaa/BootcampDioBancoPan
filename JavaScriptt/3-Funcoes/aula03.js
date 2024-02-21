
function calcularImc(peso, altura){
    return peso / (altura * altura);
}

function classificarImc(imc){
    if (imc < 18.5) {
        resultado = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        resultado =  "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        resultado =  "Acima do peso";
    } else if (imc >= 30 && imc < 40) {
        resultado =  "Obeso";
    } else {
        resultado =  "Obesidade Grave";
    }

    return resultado
}


function main(){
    let imc= calcularImc(90, 1.80)
    console.log(classificarImc(imc))
}

main();