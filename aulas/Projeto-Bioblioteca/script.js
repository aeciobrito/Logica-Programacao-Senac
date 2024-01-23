class MaterialBibliografico {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this._disponivel = true;
    }

    realizarEmprestimo() {
        if (this._isDisponivel()) {
            this._setDisponibilidade(false); //this._disponivel = false primeiro
            return true; // Empréstimo realizado com sucesso
        } else {
            return false; // Material já emprestado
        }
    }

    realizarDevolucao() {
        if (!this._isDisponivel()) {
            this._setDisponibilidade(true);
            return true; // Devolução realizada com sucesso
        } else {
            return false; // Material já devolvido
        }
    }

    _isDisponivel() {
        return this._disponivel;
    }

    _setDisponibilidade(status) { 
        this._disponivel = status;
    }

    toString() {
        return `Título: ${this.titulo}, Autor: ${this.autor}`;
    }
}

// Subclasse Livro
class Livro extends MaterialBibliografico {
    constructor(titulo, autor, genero) {
        super(titulo, autor);
        this.genero = genero;
    }

    toString() {
        return `${super.toString()}, Gênero: ${this.genero}`;
    }
}

// Subclasse Revista
class Revista extends MaterialBibliografico {
    constructor(titulo, autor, categoria) {
        super(titulo, autor);
        this.categoria = categoria;
    }

    toString() {
        return `${super.toString()}, Categoria: ${this.categoria}`;
    }
}

// Função para realizar ação (emprestimo ou devolucao)
function realizarAcao(acao) {
    const selectLivros = document.getElementById("livros");
    const selectedIndex = selectLivros.selectedIndex;

    if (selectedIndex === 0) {
        alert("Por favor, selecione um livro válido.");
        return;
    }

    const livroSelecionado = livros[selectedIndex - 1];

    if (acao === 'emprestimo') {
        const emprestimoSucesso = livroSelecionado.realizarEmprestimo();
        exibirResultado(`Empréstimo de ${livroSelecionado.titulo}: ${emprestimoSucesso ? 'Sucesso' : 'Material já emprestado'}`);
    } else if (acao === 'devolucao') {
        const devolucaoSucesso = livroSelecionado.realizarDevolucao();
        exibirResultado(`Devolução de ${livroSelecionado.titulo}: ${devolucaoSucesso ? 'Sucesso' : 'Material já devolvido'}`);
    }
}

function exibirResultado(mensagem) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML += `<p>${mensagem}</p>`;
}

const livros = [
    new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", "Fantasia"),
    new Livro("Harry Potter e a Pedra Filosofal", "J.K. Rowling", "Fantasia"),
    new Livro("Crepúsculo", "Stephenie Meyer", "Romance"),
    new Revista("National Geographic", "National Geographic Society", "Ciência")
];

// Preencher dinamicamente as opções do select
const selectLivros = document.getElementById("livros");

for (let i = 0; i < livros.length; i++) {
    const livro = livros[i];
    const option = document.createElement("option");
    option.value = i + 1; // Adiciona 1 para evitar o valor 0, que representa a opção padrão
    option.text = livro.titulo;
    selectLivros.add(option);
}

console.log(livros[0].toString()); // Exibe informações específicas de Livro
console.log(livros[3].toString()); // Exibe informações específicas de Revista