class Pessoa{
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2024 - idade
    }


    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);  
    }
}

function compararPessoas(p1,p2){
    let resultado = (p1.idade > p2.idade)?
    `${p1.nome} é mais velha que ${p2.nome}`:
    (p1.idade == p2.idade)?
    `${p1.nome} tem a mesma idade de ${p2.nome}`:
    `${p2.nome} é mais velha que ${p1.nome}`

    console.log(resultado)
}

const xande = new Pessoa("Alexandre", 20);
const paulo = new Pessoa("Paulo", 30);

compararPessoas(xande, paulo)