/*
#Parte 1:
    - Crie uma classe Veiculo
    - Adicione as propriedades: marca, modelo, preco, cor, autonomia, capacidadeTanque, imagemURL
    - Adicione um metodo calcularDistanciaMaxima, que retornará a autonomia * capacidadeTanque
    - Adicione um metodo exibirDetalhes, que retornará os dados concatenados de:
        * marca, modelo, cor, preco.toFixed(2)
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

veiculos.push(new Veiculo("fiat", "uno", 60000, "branco", 16, 90, "www.url.com"));
veiculos.push(new Veiculo("fiat", "palio", 90000, "vermelho", 14, 90, "www.url88.com"));
veiculos.push(new Veiculo("chrevrolet", "cruze", 120000, "amarelo", 11, 90, "www.url45.com"));

console.log(veiculos);