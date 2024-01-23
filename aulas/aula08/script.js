class Produto {
    constructor(nome, peso, preco, vencimento) {
        this.nome = nome;
        this.peso = peso;
        this.preco = preco;
        this.vencimento = vencimento;
    }

    estahVencido() {
        return !(parseInt(this.vencimento) >= 2024);       
    }
}

let produtos = [];
let cadastrarNovoProduto = true;

while(cadastrarNovoProduto) {
    //solicitar valores
    let nome = prompt("Informe o nome do produto:");
    let peso = prompt("Informe o peso do produto:");
    let preco = prompt("Informe o preco do produto:");
    let vencimento = prompt("Informe o vencimento do produto:");

    //Instancia de um objeto a partir de uma classe
    let produto = new Produto(nome, peso, preco, vencimento);
    
    if(produto.estahVencido()) {
        alert("Você acabou de cadastrar um produto vencido!");
    }
    
    produtos.push(produto);

    // Perguntar ao usuário se deseja cadastrar outro produto
    let resposta = prompt("Deseja cadastrar outro produto? (Digite 'sim' para continuar):");
    cadastrarNovoProduto = (resposta.toLowerCase() === 'sim');
}

console.log("Lista de produtos: ", produtos)