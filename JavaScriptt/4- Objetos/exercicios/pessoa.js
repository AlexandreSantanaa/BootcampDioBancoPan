    /*
    2) Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
    do seu IMC;
    */

    class Pessoa {
        nome;
        peso;
        altura;

        constructor(nome, peso, altura) {
            this.nome = nome;
            this.peso = peso;
            this.altura = altura
        }

        calcularImc() {
        return this.peso / (this.altura*this.altura)
        }

        dizerImc() {
            let imc = this.calcularImc()
            return `Eu sou o ${this.nome} e meu IMC é de ${imc}`
        }

        classificarImc(){
            let resultado
            
            if (this.imc < 18.5) {
                resultado = "Abaixo do peso";
            } else if (this.imc >= 18.5 && this.imc < 25) {
                resultado =  "Peso normal";
            } else if (this.imc >= 25 && this.imc < 30) {
                resultado =  "Acima do peso";
            } else if (this.imc >= 30 && this.imc < 40) {
                resultado =  "Obeso";
            } else {
                resultado =  "Obesidade Grave";
            }
        
            return resultado
        }
    }

    const pessoa01 = new Pessoa("jose", 70, 1.75)
    console.log(pessoa01.dizerImc(), " e eu tenho", pessoa01.classificarImc())