class Animal {
    //3 propriedades básicas (peso, altura, velocidade)
    constructor(peso, altura, velocidae) {
        this.peso = peso;
        this.altura = altura;
        this.velocidae = velocidae;
    }
    //4 comportamentos (nasce, crece, reproduz, morre)
    nascer() {

    }

    crescer() {

    }

    reproduzir() {

    }

    morrer() {

    }
}

class Mamifero extends Animal {
    //1 específica
    constructor(peso, altura, velocidae, mamas){
        super(peso, altura, velocidae)
        this.mamas = mamas;
    }
    
    amamentar() {

    }
}

class Reptil extends Animal {
    constructor(peso, altura, velocidae, escamas) {
        super(peso, altura, velocidae);
        this.escamas = escamas;
    }
    
    pesilhotermia() {

    }
}