// Classe Veiculo
class Veiculo {
    constructor(marca, modelo, preco, cor, autonomia, tanqueCheio, imagemURL) {
        this.marca = marca;
        this.modelo = modelo;
        this.preco = preco;
        this.cor = cor;
        this.autonomia = autonomia;
        this.tanqueCheio = tanqueCheio;
        this.imagemURL = imagemURL;
    }

    calcularDistanciaMaxima() {
        return this.autonomia * this.tanqueCheio;
    }

    exibirDetalhes() {
        return `${this.marca} ${this.modelo} - ${this.cor} - R$ ${this.preco.toFixed(2)}`;
    }
}

// Lista de veículos
const veiculos = [];

// Função para cadastrar veículo
function cadastrarVeiculo() {
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const preco = parseFloat(document.getElementById("preco").value);
    const cor = document.getElementById("cor").value;
    const autonomia = parseInt(document.getElementById("autonomia").value);
    const tanqueCheio = parseFloat(document.getElementById("tanqueCheio").value);
    const imagemURL = document.getElementById("imagemURL").value;

    // Criar um novo veículo
    const veiculo = new Veiculo(marca, modelo, preco, cor, autonomia, tanqueCheio, imagemURL);

    // Adicionar veículo à lista
    veiculos.push(veiculo);

    // Atualizar a exibição
    exibirVeiculos();
    
    // Limpar formulário
    document.getElementById("veiculoForm").reset();
}

function exibirVeiculos() {
    const veiculosList = document.getElementById("veiculosList");
    // Limpar a lista antes de exibir os veículos
    veiculosList.innerHTML = "";

    // Iterar sobre a lista de veículos usando um loop for
    for (let i = 0; i < veiculos.length; i++) {
        const veiculoItem = document.createElement("li");
        const veiculoCard = criarVeiculoCard(veiculos[i]);
        veiculoItem.appendChild(veiculoCard);
        veiculosList.appendChild(veiculoItem);
    }
}

// Função para criar o card do veículo
function criarVeiculoCard(veiculo) {
    const veiculoCard = document.createElement("div");
    veiculoCard.className = "veiculo-card";

    const imagemVeiculo = document.createElement("img");
    imagemVeiculo.src = veiculo.imagemURL;
    imagemVeiculo.alt = `${veiculo.marca} ${veiculo.modelo}`;
    imagemVeiculo.className = "veiculo-imagem";
    veiculoCard.appendChild(imagemVeiculo);

    const detalhesVeiculo = document.createElement("div");
    detalhesVeiculo.textContent = veiculo.exibirDetalhes() + ` - Distância máxima: ${veiculo.calcularDistanciaMaxima()} km`;
    veiculoCard.appendChild(detalhesVeiculo);

    return veiculoCard;
}

// Chame a função exibirVeiculos inicialmente para exibir quaisquer veículos existentes
exibirVeiculos();