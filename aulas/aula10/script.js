class Personagem {
    constructor(nome, vida, ataque, defesa, posicao) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
        this.vivo = true;
        this.posicao = posicao;
    }

    recuperarVida(qtd, personagem = this) {
        if (this.vivo) {
            personagem.vida += qtd;
            console.log(`${this.nome} recuperou ${qtd} de vida, e tem agora ${this.vida} no total`);
        }
    }

    atacar(inimigo) {
        if (this.vivo) {
            const distancia = Math.abs(this.posicao - inimigo.posicao);
            const poderAtaque = this.calcularPoderAtaque(distancia);
            inimigo.tomarDano(poderAtaque);
            console.log(`${this.nome} atacou ${inimigo.nome} com um total de ${poderAtaque}`);
        }
    }

    tomarDano(qtd) {
        if (this.vivo && qtd > this.defesa) {
            const danoReal = qtd - this.defesa;
            this.vida -= danoReal;

            if (this.vida <= 0) {
                this.morrer();
            }
        } else {
            console.log(`Ataque sem efeito em ${this.nome}`);
        }
    }

    morrer() {
        this.vivo = false;
        console.log(`${this.nome} morreu.`);
    }

    calcularPoderAtaque(distancia) {
        return this.ataque;
    }
}

class Arqueiro extends Personagem {
    constructor(nome, vida, ataque, defesa, posicao) {
        super(nome, vida, ataque, defesa, posicao);
        this.distanciaAtaque = 3;
    }

    calcularPoderAtaque(distancia) {
        const distanciaBonus = Math.min(3, this.distanciaAtaque - distancia);
        return super.calcularPoderAtaque(distancia) + distanciaBonus;
    }
}

class Guerreiro extends Personagem {
    constructor(nome, vida, ataque, defesa, posicao) {
        super(nome, vida, ataque, defesa, posicao);
    }
}

class Mago extends Personagem {
    constructor(nome, vida, ataque, defesa, posicao, pontosMagia) {
        super(nome, vida, ataque, defesa, posicao);
        this.pontosMagia = pontosMagia;
    }

    atacar(inimigo) {
        if (this.vivo && this.pontosMagia > 0) {
            const distancia = Math.abs(this.posicao - inimigo.posicao);
            const poderAtaque = this.ataque * (1 - Math.min(2, distancia) / 10);
            inimigo.tomarDano(poderAtaque);
            console.log(`${this.nome} atacou ${inimigo.nome} com um total de ${poderAtaque}`);
            this.pontosMagia--;
        }
    }

    recuperarMagia(qtd) {
        if (this.vivo) {
            this.pontosMagia += qtd;
        }
    }
}

// Exemplo de uso:
const arqueiro = new Arqueiro("Arqueiro", 100, 20, 10, 4);
const guerreiro = new Guerreiro("Guerreiro", 150, 25, 15, 5);
const mago = new Mago("Mago", 120, 18, 12, 8, 5);

arqueiro.atacar(guerreiro);
guerreiro.atacar(arqueiro);
mago.atacar(guerreiro);

console.log(arqueiro);
console.log(guerreiro);
console.log(mago);
