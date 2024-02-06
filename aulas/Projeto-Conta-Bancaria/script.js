class Cliente {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
}

class Conta {
    constructor(numero, saldo = 0, cliente) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
    }

    sacar(valor) {
        if(this.saldo >= valor && valor > 0) {
            this.saldo - valor;
            return true; //Saque realizado com sucesso
        } else {
            return false; // Saldo insuficiente ou valor inválido
        }
    }

    depositar(valor) {
        if(valor > 0) {
            this.saldo += valor;
            return true; // Deposito realizado com sucesso
        } else {
            return false; // Valor de deposito invalido
        }
    }

    toString() {
        return `Número: ${this.numero} - Saldo: ${this.saldo} - Cliente: ${this.cliente.nome}`;
    }
}

class ContaCorrente extends Conta {
    constructor(numero, saldo = 0, limiteChequeEspecial = 200) {
        super(numero, saldo);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    sacar(valor) {
        const valorDisponivelParaSaque = this.saldo + this.limiteChequeEspecial;

        if(valor > 0 && valorDisponivelParaSaque >= valor) {
            this.saldo -= valor;
            return true; // Saque realizado com sucesso
        } else {
            return false; // Slado insuficiente ou valor inválido
        }
    }
}

class ContaPoupanca extends Conta {
    constructor(numero, saldo = 0, taxaRendimento = 0.02) {
        super(numero, saldo);
        this.taxaRendimento = taxaRendimento;
    }

    aplicarRendimento() {
        this.saldo += this.saldo * this.taxaRendimento;
    }
}

let contas = [];
let clientes = [];

// Função para cadastrar cliente
function cadastrarCliente() {
    const nome = document.getElementById("nomeCliente").value;
    const cpf = document.getElementById("cpfCliente").value;

    const cliente = new Cliente(nome, cpf);

    clientes.push(cliente);

    // Atualizar a exibição de clientes
    exibirClientes();
    
    // Atualizar o seletor de clientes nas contas
    atualizarSeletorClientes();

    // Limpar formulário
    document.getElementById("clienteForm").reset();
}

// Atualizar o seletor de clientes nas contas
function atualizarSeletorClientes() {
    const seletorClientes = document.getElementById("cliente");

    // Limpar opções existentes
    seletorClientes.innerHTML = "";

    // Adicionar opções com base na lista de clientes
    clientes.forEach(cliente => {
        const option = document.createElement("option");
        option.value = cliente.cpf;
        option.textContent = cliente.nome;
        seletorClientes.appendChild(option);
    });
}

// Exibir clientes cadastrados
function exibirClientes() {
    const clientesList = document.getElementById("clientesList");
    // Limpar a lista antes de exibir os clientes
    clientesList.innerHTML = "";

    for (let i = 0; i < clientes.length; i++) {
        const clienteItem = document.createElement("li");
        clienteItem.textContent = `Nome: ${clientes[i].nome} - CPF: ${clientes[i].cpf}`;
        clientesList.appendChild(clienteItem);
    }
}


// Função para cadastrar conta
function cadastrarConta() {
    const numero = document.getElementById("numero").value;
    const saldo = parseFloat(document.getElementById("saldo").value);
    const tipoConta = document.getElementById("tipoConta").value;

    // Adicionar a carga do cliente ao criar a conta
    const clienteSelecionado = document.getElementById("cliente").value;
    const cliente = clientes.find(c => c.cpf === clienteSelecionado);

    let conta;

    switch (tipoConta) {
        case "ContaCorrente":
            conta = new ContaCorrente(numero, saldo);
            break;
        case "ContaPoupanca":
            conta = new ContaPoupanca(numero, saldo);
            break;
        default:
            conta = new Conta(numero, saldo);
            break;
    }

    // Atualizar para armazenar a referência do cliente na conta
    conta.cliente = cliente;

    contas.push(conta);

    // Atualizar a exibição
    exibirContas();

    // Limpar formulário
    document.getElementById("contaForm").reset();
}


function exibirContas() {
    const contasList = document.getElementById("contasList");
    // Limpar a lista antes de exibir as contas
    contasList.innerHTML = "";

    for (let i = 0; i < contas.length; i++) {
        const contaItem = document.createElement("li");
        const contaCard = criarContaCard(contas[i]);
        contasList.appendChild(contaCard);
        contasList.appendChild(contaItem);
    }
}

function criarContaCard(conta) {
    const contaCard = document.createElement("div");
    contaCard.className = "conta-card";

    const detalhesConta = document.createElement("div");
    detalhesConta.textContent = conta.toString();
    contaCard.appendChild(detalhesConta);

    return contaCard;
}
