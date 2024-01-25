class Conta {
    constructor(numero, saldo = 0) {
        this.numero = numero;
        this.saldo = saldo;
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
        return `Numero: ${this.numero} - Saldo: ${this.saldo}`;
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

let contaCorr = new ContaCorrente(1122, 100);
let contaPoup = new ContaPoupanca(2345, 100);
console.log(contaCorr.toString());
console.log(contaPoup.toString());

console.log("Saque de 200 reais em cada!")
contaCorr.sacar(200);
contaPoup.sacar(200);

console.log(contaCorr.toString());
console.log(contaPoup.toString());

console.log("Apliquei rendimento na conta poupança")
contaPoup.aplicarRendimento();
console.log(contaPoup.toString());