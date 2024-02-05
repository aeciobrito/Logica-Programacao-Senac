class Cliente {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
}

class Conta {
    constructor(cliente, numero, saldo) {
        this.cliente = cliente;
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valorSaque) {
        return true;
    }

    depositar(valorDeposito) {
        return true;
    }

    transferir(valorTransferencia, cliente) {
        return true;
    }
}

class ContaCorrente extends Conta {
    constructor(cliente, numero, saldo, limiteChequeEspecial) {
        super(cliente, numero, saldo);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    sacar(valorSaque) {
        super(valorSaque);
        return true;
    }
}

class ContaPoupanca extends Conta {
    constructor(cliente, numero, saldo, taxaRendimento) {
        super(cliente, numero, saldo);
        this.taxaRendimento = taxaRendimento;
    }

    aplicarRendimento() {

    }
}