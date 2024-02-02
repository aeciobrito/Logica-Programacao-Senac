/*
#Parte 1:
    - Crie uma classe Veiculo
    - Adicione as propriedades: marca, modelo, preco, cor, autonomia, capacidadeTanque, imagemURL
    - Adicione um metodo calcularDistanciaMaxima, que retornará a autonomia * capacidadeTanque
    - Adicione um metodo exibirDetalhes, que retornará os dados concatenados de:
        * marca, modelo, cor, preco.toFixed(2)

#Parte 2:
    - Crie uma função cadastrarVeiculo
*/
class Veiculo {
    constructor(marca, modelo, preco, cor, autonomia, capacidadeTanque, imagemURL) {
        this.marca = marca;
        this.modelo = modelo;
        this.preco = preco;
        this.cor = cor;
        this.autonomia = autonomia;
        this.capacidadeTanque = capacidadeTanque;
        this.imagemURL = imagemURL;
    }

    calcularDistanciaMaxima() {
        return this.autonomia * this.capacidadeTanque;
    }

    exibirDetalhes() {
        return `${this.marca} ${this.modelo} - ${this.cor} - R$ ${this.preco.toFixed(2)}`;
    }
}

let veiculos = [];

// Função para cadastrar veículo
function cadastrarVeiculo() {
    //recebimento de valores do HTML
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const preco = parseFloat(document.getElementById("preco").value);
    const cor = document.getElementById("cor").value;
    const autonomia = parseInt(document.getElementById("autonomia").value);
    const capacidadeTanque = parseInt(document.getElementById("capacidadeTanque").value);
    const imagemURL = document.getElementById("imagemURL").value;

    // Instanciar um novo objeto veículo, passando os valores pedidos no construtor
    const veiculo = new Veiculo(marca, modelo, preco, cor, autonomia, capacidadeTanque, imagemURL);

    // Adicionar o veículo a nossa lista "banco de dados"
    veiculos.push(veiculo);

    // Atualiza a exibição
    exibirVeiculos()

    // Limpar formulário
    document.getElementById("veiculoForm").reset();
}

function exibirVeiculos() {
    const veiculosList = document.getElementById("veiculosList");
    // Limpar a lista antes de exibir os veículos
    veiculosList.innerHTML = "";

    for (let i = 0; i < veiculos.length; i++) {
        const veiculoItem = document.createElement("li");
        veiculoItem.innerHTML = veiculos[i].modelo;
        veiculosList.appendChild(veiculoItem);
    }
}