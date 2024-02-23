/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro{
    marca;
    cor;
    gastoMedioCombustivelKmRodado;

    constructor(marca, cor, valorMedioCombustivelKmRodado){
        this.marca = marca;
        this.cor = cor;
        this.valorMedioCombustivelKmRodado = valorMedioCombustivelKmRodado;
    }

    valorGastoCombustivel(distancia, precoCombustivel){
        let gasto = precoCombustivel*distancia*this.valorMedioCombustivelKmRodado
        
        return gasto
    }
    
}

const carro01 = new Carro("fiat", "azul", 1/10)
console.log(carro01.valorGastoCombustivel(10, 10))
