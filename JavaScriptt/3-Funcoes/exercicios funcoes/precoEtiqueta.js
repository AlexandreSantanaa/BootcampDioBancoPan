
function  tipoPagamento(tipoPag, precoProduto){
    let resultado = (tipoPag === "Debito")?
    precoProduto-precoProduto*0.1:
    (tipoPag ==="PixOuDinheiro")?
    precoProduto-precoProduto*0.15:
    (tipoPag ==="duasVezes")?
    precoProduto:(tipoPag === "acimaDeDuasVezez")?
    precoProduto+precoProduto*0.01:
    "essa opção não existe"

    return resultado
}



function main(){
    console.log(tipoPagamento("PixOuDinheiro", 10))
}

main();